'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function JoinUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="main" />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 -z-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full transform translate-x-1/3 -translate-y-1/3 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-900/5 rounded-full transform -translate-x-1/3 translate-y-1/3 blur-3xl -z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full text-blue-700 text-sm font-medium mb-8">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
              Recruitment Open
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Join Our <br className="hidden sm:block" />
              <span className="text-blue-700">Growing Community</span>
            </h1>

            <p className="text-xl text-slate-700 mb-10 leading-relaxed max-w-3xl mx-auto">
              We&apos;ve partnered with AISO to build an interdisciplinary team at the intersection of law, AI, and technology. Are you ready to shape the future?
            </p>

            <a
              href="https://form.typeform.com/to/FuntjC0F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span className="text-lg">Apply Here</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">FLL × AISO Partnership</h2>
                <p className="text-lg text-slate-600">
                  Two student organizations, one shared mission: bringing together legal minds and AI expertise to shape the future of technology governance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Team - FLL */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border-2 border-blue-700">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-700 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">AI Team</h2>
                  <p className="text-blue-700 font-medium">The Futurist Law Lab</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">About FLL</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  The Futurist Law Lab (FLL) is a student-led initiative operating at the intersection of law, artificial intelligence, and emerging technologies.
                </p>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Our mission is to bring the topics of AI and its regulatory landscape closer to young people while furthering access to justice.
                </p>
                <p className="text-slate-700 mb-4 font-medium">We do this by:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-slate-700">Delivering workshops, talks, and hands-on events such as hackathons</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-slate-700">Publishing accessible and engaging content</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-slate-700">Building a community of students with both legal and technical backgrounds to promote mutual understanding and interdisciplinary collaboration</span>
                  </li>
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  We believe that AI is here to stay, and that young people will be most affected by how it is governed. To meaningfully influence AI regulation and assess its societal impact, students must first understand the technology and its implications. FLL provides a platform to gain that knowledge, collaborate across disciplines, and contribute to responsible AI innovation.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Role Responsibilities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-slate-700">Share knowledge about AI and its underlying technologies with students and young audiences</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-slate-700">Co-develop and support workshops at the intersection of law and AI together with our team (primarily from legal backgrounds)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-slate-700">Assist in organising events related to law and technology</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-slate-700">Collaborate with industry partners within Amsterdam&apos;s AI ecosystem and beyond</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-slate-700">Support administrative and technical tasks (e.g., website maintenance, domain management)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">What We Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <span className="text-slate-700">Basic programming skills & foundational understanding of AI</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <span className="text-slate-700">Interest in law, regulation, and technology governance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <span className="text-slate-700">Awareness of the AI industry landscape</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <span className="text-slate-700">Availability of 5–10 hours per week, including at least 1 hour for the weekly all-hands meeting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <span className="text-slate-700">Open-mindedness and willingness to learn across disciplines</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <span className="text-slate-700">Strong teamwork and communication skills</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AISO Legal Team */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border-2 border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Legal Team</h2>
                  <p className="text-slate-700 font-medium">AISO - Applications now open for 3 positions</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-slate-700 mb-4 leading-relaxed">
                  AISO is launching a small, high impact Legal Team that will support some of the most active student-led AI initiatives at the University of Amsterdam. This team will play a key role in helping a fast growing student community navigate questions around governance, compliance, templates and structures that come up when students build real projects with external partners.
                </p>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  You will not be giving legal advice. Instead, you will help research, draft and structure the internal legal foundations needed for student projects to run smoothly. Think of it as working in an in house style role inside an ambitious student organisation that collaborates with companies, researchers and university teams.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  This is a hands-on learning environment for law students who want to understand how technology, AI and student-led initiatives interact with Dutch law, contracts and organisational structures. You will work closely with AISO leadership and receive recruitment and onboarding support from Futurist Law Lab (FLL).
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">What you will work on</h3>
                <p className="text-slate-700 mb-4">Based on our latest meeting notes, these are the core areas the team will handle:</p>
                
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-bold text-slate-900 mb-2">1. Drafting and maintaining internal legal templates</h4>
                    <p className="text-slate-700 text-sm">
                      Contracts and templates for things like student project agreements, hackathon related materials, collaboration outlines and other recurring documents. Your work will help standardise the legal processes behind AI projects and events.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-bold text-slate-900 mb-2">2. Researching Dutch legal frameworks relevant to student initiatives</h4>
                    <p className="text-slate-700 text-sm">
                      This includes looking into organisational structures, responsibilities, university related constraints, Dutch business and nonprofit rules, and the boundaries of what student teams can and cannot formally do.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-bold text-slate-900 mb-2">3. Supporting AISO&apos;s internal restructuring</h4>
                    <p className="text-slate-700 text-sm">
                      AISO is planning a legal and organisational restructuring next academic year. The Legal Team will assist with research, drafting and general preparation.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-bold text-slate-900 mb-2">4. Handling day to day operational questions</h4>
                    <p className="text-slate-700 text-sm">
                      The organisation receives recurring legal questions around internships, project teams, collaborations and compliance. The Legal Team acts as an internal reference point to provide researched, structured answers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">What we are looking for</h3>
                <div className="bg-blue-50 rounded-lg p-6 mb-4">
                  <p className="text-slate-900 font-bold mb-2">Team size: 3 law students</p>
                </div>
                <p className="text-slate-700 font-medium mb-3">Profile:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-slate-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-slate-700">Dutch law or international law students at the University of Amsterdam</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-slate-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-slate-700">Interested in AI, technology, governance or organisational law</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-slate-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-slate-700">Comfortable researching topics independently</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-slate-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-slate-700">Reliable, structured, good at writing clearly</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-slate-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-slate-700">Curious about how student organisations operate from a legal perspective</span>
                  </li>
                </ul>
                <div className="mt-4 space-y-2">
                  <p className="text-slate-700"><span className="font-bold">Time commitment:</span> Approximately 5 to 10 hours per week, depending on current needs. Some weeks will be more research heavy.</p>
                  <p className="text-slate-700"><span className="font-bold">Start date:</span> As soon as possible. The organisation currently faces daily legal questions and upcoming deadlines that need support.</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">What you gain</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-slate-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-slate-700">Experience working on real world legal questions inside a fast growing student organisation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-slate-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-slate-700">Exposure to the intersection of technology, education and law</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-slate-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-slate-700">Insight into Dutch business, nonprofit and university related structures</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-slate-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-slate-700">Opportunities to collaborate with partners, professors and external organisations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-slate-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-slate-700">A strong portfolio of legal drafting, research and organisational work</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-slate-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-slate-700">A chance to meaningfully shape a legal foundation from the ground up</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Whether you&apos;re passionate about AI technology or legal frameworks, we have a place for you. Apply now to join our interdisciplinary team and help shape the future of law and technology.
            </p>
            <a
              href="https://form.typeform.com/to/FuntjC0F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
            >
              <span>Apply Now</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
            <p className="text-sm text-blue-200 mt-4">Same application form for both positions</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
