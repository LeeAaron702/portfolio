import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

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
      // Pretend success
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

    // Send email if SMTP is configured
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactEmail = process.env.CONTACT_EMAIL || "Lee.Seaver@gmail.com";

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${smtpUser}>`,
        to: contactEmail,
        replyTo: email,
        subject: `Portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      });
    } else {
      // No SMTP configured — log to stdout so Docker logs capture it
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
