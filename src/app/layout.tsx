import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Futurist Law Lab | Future-Proofing Legal Frameworks",
  description: "A student initiative based in Amsterdam engaging youth to shape the future of law. Join us in making legal frameworks more responsive to technological advancements.",
  keywords: ["law", "future law", "legal innovation", "legal tech", "youth engagement", "Amsterdam", "student initiative", "EU law", "technology law", "future-proofing law", "law students", "legal workshops"],
  authors: [{ name: "Futurist Law Lab" }],
  creator: "Futurist Law Lab",
  publisher: "Futurist Law Lab",
  metadataBase: new URL("https://futuristlawlab.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Futurist Law Lab | Future-Proofing Legal Frameworks",
    description: "A student initiative based in Amsterdam engaging youth to shape the future of law in the age of technological advancement.",
    url: "https://futuristlawlab.com",
    siteName: "Futurist Law Lab",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Futurist Law Lab - Future-Proofing Legal Frameworks',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Futurist Law Lab",
    description: "A student initiative based in Amsterdam engaging youth to shape the future of law in the age of technological advancement.",
    images: ['/images/twitter-image.svg'],
    creator: "@futuristlawlab",
  },
  verification: {
    google: "google-site-verification=YOUR_VERIFICATION_CODE", // You'll need to replace this with your actual verification code
  },
  category: 'law',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://futuristlawlab.com" />
        <meta name="theme-color" content="#0d9488" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        
        {/* Structured Data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Futurist Law Lab",
              "url": "https://futuristlawlab.com",
              "logo": "https://futuristlawlab.com/images/logo.jpg",
              "description": "A student initiative based in Amsterdam engaging youth to shape the future of law in the age of technological advancement.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Amsterdam",
                "addressCountry": "Netherlands"
              },
              "sameAs": [
                "https://twitter.com/futuristlawlab",
                "https://linkedin.com/company/futuristlawlab",
                "https://instagram.com/futuristlawlab"
              ]
            })
          }}
        />
        
        {/* Structured Data for NGO */}
        <Script
          id="ngo-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "Futurist Law Lab",
              "url": "https://futuristlawlab.com",
              "logo": "https://futuristlawlab.com/images/logo.jpg",
              "description": "A student initiative based in Amsterdam engaging youth to shape the future of law in the age of technological advancement.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Amsterdam",
                "addressCountry": "Netherlands"
              },
              "email": "contact@futuristlawlab.com",
              "foundingDate": "2024",
              "genre": "Legal Innovation",
              "knowsAbout": ["Law", "Technology", "Legal Frameworks", "Legal Innovation", "EU Law"]
            })
          }}
        />
        
        {/* Mobile Menu JavaScript */}
        <Script id="mobile-menu-script" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              const btn = document.querySelector('.mobile-menu-button');
              const menu = document.querySelector('.mobile-menu');
              
              if (btn && menu) {
                btn.addEventListener('click', () => {
                  menu.classList.toggle('hidden');
                });
                
                // Close menu when clicking on a link
                const links = menu.querySelectorAll('a');
                links.forEach(link => {
                  link.addEventListener('click', () => {
                    menu.classList.add('hidden');
                  });
                });
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
