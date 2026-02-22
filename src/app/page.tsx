import Script from 'next/script';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import EventsSection from '@/components/home/EventsSection';
import MissionSection from '@/components/home/MissionSection';
import TeamSection from '@/components/home/TeamSection';
import ResearchHighlight from '@/components/home/ResearchHighlight';

export const metadata: Metadata = {
  title: 'Home | Futurist Law Lab',
  description: 'A student initiative based in Amsterdam engaging youth to shape the future of law in the age of technological advancement.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="home" />

      <HeroSection />

      <AboutSection />

      <EventsSection />

      <MissionSection />

      <TeamSection />

      <ResearchHighlight />

      <Footer variant="full" />

      {/* Structured Data for WebPage */}
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Futurist Law Lab - Future-Proofing Legal Frameworks",
            "description": "A student initiative based in Amsterdam engaging youth to shape the future of law in the age of technological advancement.",
            "url": "https://futuristlawlab.com",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Futurist Law Lab",
              "url": "https://futuristlawlab.com"
            },
            "about": {
              "@type": "Thing",
              "name": "Legal innovation and youth engagement in law"
            },
            "keywords": "law, future law, legal innovation, legal tech, youth engagement, Amsterdam, student initiative, EU law"
          })
        }}
      />

      {/* FAQ Structured Data */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Futurist Law Lab?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Futurist Law Lab is a student initiative based in Amsterdam that engages youth to shape the future of law in the age of technological advancement."
                }
              },
              {
                "@type": "Question",
                "name": "What is the mission of Futurist Law Lab?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our mission is twofold: 1) Engage youth to future-proof the law, and 2) Show people that law is alive, exciting, and ever-changing."
                }
              },
              {
                "@type": "Question",
                "name": "How can I get involved with Futurist Law Lab?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can get involved by attending our university events, participating in our workshops, or directly contacting us through our website or social media channels."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
