import Script from 'next/script';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Futurist Law Lab',
  description: 'A student initiative based in Amsterdam engaging youth to shape the future of law in the age of technological advancement.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:from-zinc-900 dark:to-zinc-800">
      {/* Header/Navigation */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="font-bold text-2xl text-teal-600 dark:text-teal-400">Futurist Law Lab</div>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-teal-600 dark:hover:text-teal-400 transition" aria-label="Learn about Futurist Law Lab">About</Link>
            <Link href="#mission" className="hover:text-teal-600 dark:hover:text-teal-400 transition" aria-label="Explore our mission">Our Mission</Link>
            <Link href="#activities" className="hover:text-teal-600 dark:hover:text-teal-400 transition" aria-label="Discover our activities">Activities</Link>
            <Link href="#join" className="hover:text-teal-600 dark:hover:text-teal-400 transition" aria-label="Join our initiative">Join Us</Link>
            <Link href="#contact" className="hover:text-teal-600 dark:hover:text-teal-400 transition" aria-label="Contact us">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section aria-labelledby="hero-heading" className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <div className="bg-teal-50 dark:bg-teal-900/30 py-1 px-4 rounded-full text-teal-600 dark:text-teal-300 text-sm font-medium mb-6">
          Youth Initiative for Legal Innovation
        </div>
        <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 text-zinc-900 dark:text-white">
          Future-Proofing <span className="text-teal-600 dark:text-teal-400">Legal Frameworks</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-10 text-zinc-700 dark:text-zinc-300">
          A student initiative engaging youth to shape the future of law in the age of technological advancement.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link 
            href="#mission" 
            className="px-8 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition shadow-lg"
            aria-label="Learn about our mission"
          >
            Our Mission
          </Link>
          <Link 
            href="#join" 
            className="px-8 py-3 border border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400 rounded-md hover:bg-teal-50 dark:hover:bg-teal-900/20 transition"
            aria-label="Get involved with our initiative"
          >
            Get Involved
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" aria-labelledby="about-heading" className="container mx-auto px-4 py-20 border-t border-zinc-100 dark:border-zinc-800">
        <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-10 text-center text-zinc-900 dark:text-white">About Us</h2>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg mb-6 text-zinc-700 dark:text-zinc-300">
            Futurist Law Lab is a student initiative based in Amsterdam that approaches the intersection of law and emerging technologies primarily from a legal perspective.
          </p>
          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            We bring together law students, tech enthusiasts, and policymakers to collaborate on forward-thinking approaches to legal challenges posed by technological advancement.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" aria-labelledby="mission-heading" className="py-20 bg-zinc-50 dark:bg-zinc-800/50">
        <div className="container mx-auto px-4">
          <h2 id="mission-heading" className="text-3xl md:text-4xl font-bold mb-12 text-center text-zinc-900 dark:text-white">Our Mission</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <article className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center mb-6">
                <span className="text-teal-600 dark:text-teal-400 text-xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">Engage Youth</h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                We aim to engage young people in future-proofing the law. The youth often think they have no control over EU lawmaking, but that is far from the truth!
              </p>
            </article>
            
            <article className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center mb-6">
                <span className="text-teal-600 dark:text-teal-400 text-xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">Revitalize Law</h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                We want to show people that law is alive, exciting, and ever-changing. The law often lags behind technological developments, but it does not have to be that way!
              </p>
            </article>
          </div>
          
          <article className="mt-12 bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">How We Achieve Our Aims</h3>
            <p className="text-zinc-700 dark:text-zinc-300 mb-6">
              We promote smart lawmaking, inclusive legislative processes, and aim to be the voice of youth in legal discussions surrounding emerging technologies.
            </p>
            <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300 space-y-2">
              <li>Organizing events at universities</li>
              <li>Conducting workshops on law and technology</li>
              <li>Participating in events like the European Youth Event 2025 organized by the European Parliament in Strasbourg</li>
              <li>Creating resources for youth to understand and engage with legal frameworks</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" aria-labelledby="activities-heading" className="container mx-auto px-4 py-20">
        <h2 id="activities-heading" className="text-3xl md:text-4xl font-bold mb-12 text-center text-zinc-900 dark:text-white">Our Activities</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <article className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">University Events</h3>
            <p className="text-zinc-700 dark:text-zinc-300">
              We organize lectures, panel discussions, and networking events at universities across the Netherlands and Europe to engage students in discussions about the future of law.
            </p>
          </article>
          
          <article className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">Workshops</h3>
            <p className="text-zinc-700 dark:text-zinc-300">
              Our interactive workshops bring together diverse participants to tackle legal challenges posed by emerging technologies, including our upcoming participation at the European Youth Event 2025.
            </p>
          </article>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" aria-labelledby="join-heading" className="py-20 bg-teal-50 dark:bg-teal-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 id="join-heading" className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 dark:text-white">Join Our Initiative</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-zinc-700 dark:text-zinc-300">
            Are you passionate about law and technology? Join us in shaping the future of legal frameworks.
          </p>
          <Link 
            href="#contact" 
            className="inline-block px-8 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition shadow-lg"
            aria-label="Contact us to get involved"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" aria-label="Footer" className="bg-zinc-50 dark:bg-zinc-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="font-bold text-xl text-teal-600 dark:text-teal-400 mb-3">Futurist Law Lab</div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} Futurist Law Lab. All rights reserved.</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Amsterdam, The Netherlands</p>
            </div>
            <div className="flex space-x-6">
              <Link href="https://twitter.com/futuristlawlab" className="text-zinc-600 hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-400" aria-label="Follow us on Twitter">
                Twitter
              </Link>
              <Link href="https://linkedin.com/company/futuristlawlab" className="text-zinc-600 hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-400" aria-label="Connect with us on LinkedIn">
                LinkedIn
              </Link>
              <Link href="https://instagram.com/futuristlawlab" className="text-zinc-600 hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-400" aria-label="Follow us on Instagram">
                Instagram
              </Link>
              <Link href="mailto:contact@futuristlawlab.com" className="text-zinc-600 hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-400" aria-label="Email us">
                Email
              </Link>
            </div>
          </div>
        </div>
      </footer>
      
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
