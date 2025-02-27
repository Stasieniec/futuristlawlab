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
  title: "Futurist Law Lab",
  description: "Exploring the intersection of law, technology, and the future",
  keywords: ["law", "technology", "future", "legal innovation", "legal tech", "futurism"],
  authors: [{ name: "Futurist Law Lab Team" }],
  openGraph: {
    title: "Futurist Law Lab",
    description: "Exploring the intersection of law, technology, and the future",
    url: "https://futuristlawlab.vercel.app",
    siteName: "Futurist Law Lab",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Futurist Law Lab",
    description: "Exploring the intersection of law, technology, and the future",
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
