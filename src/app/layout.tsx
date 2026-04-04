import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lee Seaver — Full-Stack & AI Integration Engineer",
  description:
    "Portfolio of Lee Seaver. 30+ shipped projects across SaaS, e-commerce, mobile, and AI. Live demos at leeseaver.com.",
  openGraph: {
    title: "Lee Seaver — Full-Stack & AI Integration Engineer",
    description:
      "30+ shipped projects. SaaS, AI pipelines, iOS apps, and real production systems.",
    url: "https://leeseaver.com",
    siteName: "Lee Seaver",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lee Seaver — Full-Stack & AI Integration Engineer",
    description: "30+ shipped projects. Live demos at leeseaver.com.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jakarta.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
