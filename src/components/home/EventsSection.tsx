import Image from 'next/image';
import Link from 'next/link';

export default function EventsSection() {
  return (
      <section id="activities" aria-labelledby="activities-heading" className="py-16 sm:py-20 lg:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="bg-blue-100 py-2 px-4 rounded-full text-blue-700 text-sm font-medium inline-block mb-4 sm:mb-6">
            What We Do
          </div>
          <h2 id="activities-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-slate-900">Events</h2>
          <p className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Discover how we&apos;re making an impact through various initiatives and events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          

          <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-6 group">
            <div className="rounded-xl overflow-hidden h-48 sm:h-56 lg:h-64 mb-4 sm:mb-6 relative shadow-sm bg-gradient-to-br from-blue-50 to-slate-50 flex items-center justify-center">
              <Image
                src="/images/AI_ambassador_program_workshop.jpg"
                alt="AI Ambassador Program Workshop"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                Completed
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-slate-900">AI Ambassador Program Workshop</h3>
            <p className="text-sm sm:text-base text-slate-700 mb-3 sm:mb-4 leading-relaxed">
              We hosted a workshop on the EU AI Act for the AI Impact Ambassador Programme at the University of Amsterdam, covering its risk-based approach and implications for academia, innovation, rights, and accountability, while engaging students in critical discussion on responsible AI governance.
            </p>
            <div className="flex items-center text-sm text-blue-700 font-medium mb-2">
              <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              February 11, 2026
            </div>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
          </article>

          <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-6 group">
            <div className="rounded-xl overflow-hidden h-48 sm:h-56 lg:h-64 mb-4 sm:mb-6 relative shadow-sm bg-gradient-to-br from-blue-50 to-slate-50 flex items-center justify-center">
              <Image
                src="/images/uva_workshop_04_december_2026.jpg"
                alt="UvA workshop 04 December"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                Completed
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-slate-900">AI Regulation Panel Discussion</h3>
            <p className="text-sm sm:text-base text-slate-700 mb-3 sm:mb-4 leading-relaxed">
              We hosted a panel with University of Amsterdam professors on the future of AI regulation in the EU. Moderated by Julia Botti Lirio, the discussion covered the EU AI Act, data privacy, and democratic implications, with insights from Daniel Mügge, Joris van Hoboken, and Fernando van der Vlist.

            </p>
            <div className="flex items-center text-sm text-blue-700 font-medium mb-2">
              <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              December 04, 2025
            </div>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
          </article>


        {/* Hackathon Event Card */}
          <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-6 group">
            <div className="rounded-xl overflow-hidden h-48 sm:h-56 lg:h-64 mb-4 sm:mb-6 relative shadow-sm bg-gradient-to-br from-blue-50 to-slate-50 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-700 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <p className="text-blue-700 font-bold text-lg">Legal Hackathon</p>
              </div>
              <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                Completed
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-slate-900">Legal Hackathon: Optimising the Law</h3>
            <p className="text-sm sm:text-base text-slate-700 mb-3 sm:mb-4 leading-relaxed">
              We hosted an exciting hackathon where legal innovation met creative problem-solving. Together, participants explored innovative approaches to optimize legal frameworks for the modern age.
            </p>
            <div className="flex items-center text-sm text-blue-700 font-medium mb-2">
              <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              November 28-29, 2025
            </div>
            <div className="flex items-center text-sm text-blue-700 font-medium mb-4">
              <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Nieuwe Achtergracht 164, Amsterdam
            </div>
            <Link
              href="/hackathon"
              className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition text-sm"
            >
              View Event Details
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </article>

          <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-6 group">
            <div className="rounded-xl overflow-hidden h-48 sm:h-56 lg:h-64 mb-4 sm:mb-6 relative shadow-sm">
              <Image
                src="/images/eu_workshop.jpeg"
                alt="European Parliament Workshop"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
              Completed
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-slate-900">European Parliament Workshop</h3>
            <p className="text-sm sm:text-base text-slate-700 mb-3 sm:mb-4 leading-relaxed">
              Join us at the European Parliament in Strasbourg for an exclusive deep dive into the EU AI Act during the European Youth Event. Explore how this groundbreaking legislation will shape the future of artificial intelligence regulation.
            </p>
            <div className="flex items-center text-sm text-blue-700 font-medium">
              <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              June 13-14, 2025
            </div>
          </article>

          <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-6 group">
            <div className="rounded-xl overflow-hidden h-48 sm:h-56 lg:h-64 mb-4 sm:mb-6 relative shadow-sm">
              <Image
                src="/images/uva_workshop.jpeg"
                alt="University of Amsterdam Workshop"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                Completed
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-slate-900">University of Amsterdam Workshop</h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              What an incredible session we had at UvA! Students engaged passionately in dissecting the EU AI Act, exploring its implications for innovation and fundamental rights. The energy in the room was fantastic as we navigated through complex regulatory frameworks together.
            </p>
          </article>

          <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-6 group md:col-span-2 lg:col-span-1">
            <div className="rounded-xl overflow-hidden h-48 sm:h-56 lg:h-64 mb-4 sm:mb-6 relative shadow-sm">
              <Image
                src="/images/vu_workshop.jpeg"
                alt="Vrije Universiteit Amsterdam Workshop"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                Completed
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-slate-900">Vrije Universiteit Workshop</h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Our VU Amsterdam workshop was a huge success! Participants dove deep into the technical aspects of AI regulation, examining real-world case studies and their legal implications. The interactive discussions and collaborative problem-solving made it an unforgettable learning experience.
            </p>
          </article>
        </div>
        </div>
      </section>
  );
}
