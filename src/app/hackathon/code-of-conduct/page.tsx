import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Code of Conduct | Legal Hackathon | Futurist Law Lab',
  description: 'Code of Conduct for the Legal Hackathon: Optimising the Law organized by Futurist Law Lab.',
};

export default function CodeOfConductPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="hackathon" />

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/hackathon" 
              className="inline-flex items-center text-blue-700 hover:text-blue-800 mb-6 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Hackathon
            </Link>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Code of Conduct
            </h1>
            <p className="text-lg text-slate-600">
              Legal Hackathon: Optimising the Law
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg [&_p]:text-slate-900 [&_li]:text-slate-900 [&_strong]:text-slate-900">
            
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Purpose</h2>
            <p>
              The Futurist Law Lab is committed to creating a safe, inclusive, and respectful environment for all participants, 
              mentors, judges, and sponsors at Legal Hackathon: Optimising the Law. This Code of Conduct sets expectations for 
              behaviour and provides guidance on handling violations.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Expected Behaviour</h2>
            <p>Participants are expected to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Treat everyone with respect, professionalism, and fairness.</li>
              <li>Collaborate openly and constructively.</li>
              <li>Listen to and value diverse perspectives.</li>
              <li>Comply with instructions from organisers.</li>
              <li>Respect the venue, equipment, and digital platforms.</li>
              <li>Protect confidential information and intellectual property (IP) of others.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Unacceptable Behaviour</h2>
            <p>The following is strictly prohibited:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Harassment, bullying, or intimidation in any form (verbal, physical, or digital).</li>
              <li>Discrimination based on race, ethnicity, gender, sexual orientation, disability, religion, age, or other personal characteristics.</li>
              <li>Sabotaging, stealing, or plagiarising others&apos; work.</li>
              <li>Sharing private or sensitive information without consent.</li>
              <li>Disruptive behaviour, including excessive intoxication, that interferes with the event.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Reporting Violations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Report incidents immediately to an organiser or to on-site security.</li>
              <li>Reports will be treated confidentially and addressed promptly.</li>
              <li>Include as much detail as possible to assist investigation.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Intellectual Property (IP)</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Participants retain ownership of the work they create during the hackathon.</li>
              <li>By participating, you grant the Futurist Law Lab a non-exclusive licence to use your work for promotional purposes or showcasing at future events.</li>
              <li>Respect the IP of other participants, sponsors, and partners; do not copy or use others&apos; code, designs, or materials without permission.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Consequences</h2>
            <p>Participants who violate this Code may face:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A warning or reprimand.</li>
              <li>Removal from the event without refund.</li>
              <li>Disqualification from prizes or further participation.</li>
              <li>Notification to affiliated institutions, sponsors, or universities if necessary.</li>
            </ul>
            <p>Decisions regarding enforcement are final and at the discretion of the organisers.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Acknowledgement</h2>
            <p>
              By participating in Legal Hackathon: Optimising the Law, you agree to abide by this Code of Conduct, respect the 
              rules of the event, and follow IP guidelines. Compliance ensures a productive, inclusive, and collaborative environment 
              for everyone.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-700 p-6 my-8">
              <p className="text-sm text-slate-700">
                <strong>Note:</strong> All participants must adhere to this Code of Conduct and the 
                <Link href="/hackathon/terms" className="text-blue-700 hover:text-blue-800 font-medium"> Terms &amp; Conditions</Link>. 
                Violations may result in removal from the event.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

