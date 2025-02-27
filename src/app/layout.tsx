import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Futurist Law Lab | Future-Proofing Legal Frameworks",
  description: "A student initiative based in Amsterdam engaging youth to shape the future of law in the age of technological advancement.",
  keywords: ["law", "future law", "legal innovation", "legal tech", "youth engagement", "Amsterdam", "student initiative", "EU law"],
  authors: [{ name: "Futurist Law Lab" }],
  openGraph: {
    title: "Futurist Law Lab | Future-Proofing Legal Frameworks",
    description: "A student initiative based in Amsterdam engaging youth to shape the future of law in the age of technological advancement.",
    url: "https://futuristlawlab.com",
    siteName: "Futurist Law Lab",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Futurist Law Lab",
    description: "A student initiative based in Amsterdam engaging youth to shape the future of law in the age of technological advancement.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
