import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Legal Hackathon | Futurist Law Lab',
  description: 'Terms and Conditions for participation in the Legal Hackathon: Optimising the Law organized by Futurist Law Lab.',
};

export default function TermsPage() {
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
              Terms &amp; Conditions
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
            
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Scope and Acceptance</h2>
            <p>
              These Terms &amp; Conditions (&ldquo;Terms&rdquo;) apply to participation in the Optimising the Law Hackathon 
              (&ldquo;Event&rdquo;), organised by the Futurist Law Lab (&ldquo;Organisers&rdquo;). By submitting a registration form, 
              and in any event by attending the Event, each participant (&ldquo;Participant&rdquo;) acknowledges having read, understood, 
              and agreed to be legally bound by these Terms and the Event&apos;s Code of Conduct, incorporated here by reference.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Eligibility and Admission</h2>
            <p><strong>2.1</strong> Participation is limited to registered individuals.</p>
            <p><strong>2.2</strong> The Organisers retain sole discretion to accept, reject, or cancel any registration.</p>
            <p><strong>2.3</strong> The Organisers may revoke admission at any time for breach of these Terms.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Conduct and Compliance</h2>
            <p><strong>3.1</strong> Participants shall comply at all times with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>applicable laws and regulations,</li>
              <li>all rules communicated by the Organisers,</li>
              <li>instructions of venue staff and security, and</li>
              <li>the Code of Conduct.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Intellectual Property</h2>
            <p>
              <strong>4.1</strong> All intellectual property rights in original materials created solely by a Participant or team 
              during the Event (&ldquo;Project IP&rdquo;) shall remain vested in the respective author(s).
            </p>
            <p>
              <strong>4.2</strong> Where jointly created, Participants agree to determine ownership internally and indemnify 
              the Organisers from disputes.
            </p>
            <p><strong>4.3</strong> Participants hereby grant the Organisers a perpetual, worldwide, royalty-free, non-exclusive licence to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>display, reproduce, and publish the Project IP for educational, promotional, and reporting purposes,</li>
              <li>identify the Participant by name in connection with such use.</li>
            </ul>
            <p>
              <strong>4.4</strong> Participants warrant that their submissions do not infringe any third-party rights and that 
              all external materials used are properly licensed.
            </p>
            <p>
              <strong>4.5</strong> The Organisers provide no warranty regarding the confidentiality or commercial protection of Project IP.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Data Protection and Publicity</h2>
            <p>
              <strong>5.1</strong> Personal data will be processed strictly in accordance with the EU General Data Protection Regulation 
              (GDPR) for purposes limited to Event organisation, administration, and reporting.
            </p>
            <p>
              <strong>5.2</strong> Participants consent to being photographed, recorded, or otherwise documented during the Event, 
              and to the dissemination of such materials for legitimate Event-related purposes.
            </p>
            <p>
              <strong>5.3</strong> Participants may request access, rectification, or deletion of their personal data in line with GDPR rights.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Awards and Judging</h2>
            <p>
              <strong>6.1</strong> The Event will include a series of challenges (&ldquo;Challenges&rdquo;) proposed, organised, 
              and judged by external partners or sponsors (&ldquo;Challenge Partners&rdquo;). Each Challenge Partner shall determine 
              the theme, rules, and assessment criteria for its respective Challenge.
            </p>
            <p>
              <strong>6.2</strong> All judging decisions, whether made by the Challenge Partners or the Organisers, are final and binding. 
              No cash alternatives shall be offered unless expressly stated by the relevant Challenge Partner.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Registration Fee</h2>
            <p>
              <strong>7.1</strong> Each Participant must pay a registration fee of €5 at the time of registration. Registration is 
              only valid once payment is received.
            </p>
            <p>
              <strong>7.2</strong> The registration fee contributes to covering Event costs such as venue use, materials, and refreshments.
            </p>
            <p>
              <strong>7.3</strong> All registrations are subject to Organisers&apos; approval. In case a participant is declined, 
              the registration fee is immediately refunded in full to the participant.
            </p>
            <p>
              <strong>7.4</strong> Registration fees from approved participants are non-refundable, except in the event that the 
              Organisers cancel the Event. In such a case, the registration fee will be refunded in full.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Disqualification and Removal</h2>
            <p>The Organisers may, at their absolute discretion, disqualify or remove any Participant for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>breach of these Terms,</li>
              <li>misconduct,</li>
              <li>failure to comply with lawful instructions,</li>
            </ul>
            <p>without obligation to refund or compensate.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Event Modification or Cancellation</h2>
            <p>
              The Organisers reserve the right to modify, postpone, suspend, or cancel the Event at any time due to circumstances 
              beyond reasonable control, without liability for any consequential losses incurred by Participants.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-700 p-6 my-8">
              <p className="text-sm text-slate-900">
                <strong>Note:</strong> By registering for and participating in the Legal Hackathon: Optimising the Law, 
                you acknowledge that you have read, understood, and agree to these Terms &amp; Conditions and the 
                <Link href="/hackathon/code-of-conduct" className="text-blue-700 hover:text-blue-800 font-medium"> Code of Conduct</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

