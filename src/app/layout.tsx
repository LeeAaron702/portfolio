import type { Metadata } from "next";
import { Outfit, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
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
    "30+ shipped projects across SaaS, e-commerce, mobile, and AI. Production systems tied to real revenue.",
  icons: {
    icon: "/icon.svg",
  },
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
      className={`${outfit.variable} ${dmSans.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="font-body">{children}</body>
    </html>
  );
}
