import { NextRequest } from "next/server";

// Simple in-memory rate limiting per IP
const submissions = new Map<string, number>();
const RATE_LIMIT_MS = 60_000; // 1 submission per minute per IP

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    // Rate limit check
    const lastSubmission = submissions.get(ip);
    if (lastSubmission && Date.now() - lastSubmission < RATE_LIMIT_MS) {
      return Response.json(
        { error: "Please wait a moment before sending another message." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message, honeypot } = body;

    // Honeypot — if filled, it's a bot
    if (honeypot) {
      return Response.json({ success: true });
    }

    // Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (typeof name !== "string" || name.length > 200) {
      return Response.json({ error: "Invalid name." }, { status: 400 });
    }
    if (typeof email !== "string" || !email.includes("@") || email.length > 200) {
      return Response.json({ error: "Invalid email." }, { status: 400 });
    }
    if (typeof message !== "string" || message.length > 5000) {
      return Response.json(
        { error: "Message too long (max 5000 characters)." },
        { status: 400 }
      );
    }

    // Record submission time for rate limiting
    submissions.set(ip, Date.now());

    // Send Telegram notification
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const text = `📬 *Portfolio Contact*\n\n*Name:* ${name}\n*Email:* ${email}\n\n${message}`;

    if (botToken && chatId) {
      const res = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "Markdown",
          }),
        }
      );

      if (!res.ok) {
        console.error("Telegram send failed:", await res.text());
      }
    } else {
      console.log("--- CONTACT FORM SUBMISSION ---");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Message: ${message}`);
      console.log(`Time: ${new Date().toISOString()}`);
      console.log("------------------------------");
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
