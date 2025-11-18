'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function HackathonPage() {
  const [showTeamModal, setShowTeamModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 relative mr-3">
                <Image
                  src="/images/logo.jpeg"
                  alt="Futurist Law Lab Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="font-bold text-2xl text-blue-700">Futurist Law Lab</div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/#about" className="text-slate-800 font-medium hover:text-blue-700 transition">About</Link>
              <Link href="/#mission" className="text-slate-800 font-medium hover:text-blue-700 transition">Our Mission</Link>
              <Link href="/#activities" className="text-slate-800 font-medium hover:text-blue-700 transition">Events</Link>
              <Link href="/blog" className="text-slate-800 font-medium hover:text-blue-700 transition">Blog</Link>
              <Link href="/publications" className="text-slate-800 font-medium hover:text-blue-700 transition">Publications</Link>
            </div>
          </nav>
        </div>
      </header>

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
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
              </svg>
              November 28-29, 2025
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Legal Hackathon: <br className="hidden sm:block" />
              <span className="text-blue-700">Optimising the Law</span>
            </h1>

            <p className="text-xl text-slate-700 mb-10 leading-relaxed max-w-3xl mx-auto">
              Join us for an exciting hackathon where legal innovation meets creative problem-solving. Together, we&apos;ll explore innovative approaches to optimize legal frameworks for the modern age.
            </p>
          </div>
        </div>
      </section>

      {/* Registration CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Secure Your Spot</h2>
            <p className="text-xl mb-6 text-blue-100">
              Registration fee: €5 • Limited spots available
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://luma.com/nx4442y5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
              >
                <span>Register Now</span>
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </a>
              <Link
                href="#schedule"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-200"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Formation Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border-2 border-blue-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">Team Formation</h2>
                <p className="text-slate-600 mb-6">
                  Create or join a team to participate in the hackathon challenges. Teams can have up to 4 members.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
                <p className="text-blue-800 text-sm">
                  <strong>Important:</strong> You must register on Luma before you can create or join a team. Registration is required for participation.
                </p>
              </div>

              <button
                onClick={() => setShowTeamModal(true)}
                className="w-full px-8 py-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Team Formation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Formation Modal */}
      {showTeamModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowTeamModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Coming Soon!</h3>
              <p className="text-slate-600 mb-6">
                Team formation will be available soon. Please register on Luma first to participate in the hackathon.
              </p>
              <button
                onClick={() => setShowTeamModal(false)}
                className="w-full px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Event Schedule</h2>
              <p className="text-slate-600 text-lg">
                Roeterseiland Campus, Roetersstraat 11, 1018 WB Amsterdam
              </p>
            </div>

            {/* Day 1 */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-t-2xl px-8 py-6">
                <h3 className="text-2xl font-bold">Day 1 - Friday, November 28, 2025</h3>
              </div>
              <div className="bg-white border-2 border-slate-200 rounded-b-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-blue-700 font-bold text-lg">15:30</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Doors Open & Networking</h4>
                      <p className="text-slate-600 text-sm">Arrive, check in, and meet fellow participants</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-blue-700 font-bold text-lg">16:00</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Welcome by the Futurist Law Lab</h4>
                      <p className="text-slate-600 text-sm">Opening remarks and hackathon overview</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-blue-700 font-bold text-lg">17:00</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Presentations by Law Partners</h4>
                      <p className="text-slate-600 text-sm">Insights from our partnering law firms</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-blue-700 font-bold text-lg">17:30</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Reveal of Challenges & Start of Hacking Time</h4>
                      <p className="text-slate-600 text-sm">Challenge announcements and work begins!</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-blue-50 -mx-4 px-4 py-3 rounded-lg">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-blue-700 font-bold text-lg">18:00</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Team Formation & Registration + Opening Drinks!</h4>
                      <p className="text-slate-600 text-sm">Form your teams and celebrate the start with drinks</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-blue-700 font-bold text-lg">19:00</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Location Closes</h4>
                      <p className="text-slate-600 text-sm">End of Day 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div>
              <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-t-2xl px-8 py-6">
                <h3 className="text-2xl font-bold">Day 2 - Saturday, November 29, 2025</h3>
              </div>
              <div className="bg-white border-2 border-slate-200 rounded-b-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-blue-700 font-bold text-lg">8:30</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Doors Open & Breakfast</h4>
                      <p className="text-slate-600 text-sm">Start your day with breakfast</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-blue-700 font-bold text-lg">9:00</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Momen + Lovable Workshop</h4>
                      <p className="text-slate-600 text-sm">Interactive workshop session</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-blue-700 font-bold text-lg">10:00</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Houthoff Talk</h4>
                      <p className="text-slate-600 text-sm">Presentation by Houthoff</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-blue-700 font-bold text-lg">10:30</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Moonlit Talk</h4>
                      <p className="text-slate-600 text-sm">Presentation by Moonlit</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-blue-700 font-bold text-lg">12:00</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Lunch</h4>
                      <p className="text-slate-600 text-sm">Networking lunch</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-blue-700 font-bold text-lg">13:00</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Pitching Workshop by the Amsterdam Law Hub</h4>
                      <p className="text-slate-600 text-sm">Learn how to pitch your solution effectively</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-amber-50 -mx-4 px-4 py-3 rounded-lg">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-blue-700 font-bold text-lg">15:00</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">End of Hacking Time & Project Submission</h4>
                      <p className="text-slate-600 text-sm">Final deadline for project submissions</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-green-50 -mx-4 px-4 py-3 rounded-lg">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-blue-700 font-bold text-lg">15:30</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Pitching!</h4>
                      <p className="text-slate-600 text-sm">Teams present their solutions</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-blue-700 font-bold text-lg">17:30</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Dinner</h4>
                      <p className="text-slate-600 text-sm">Enjoy dinner while judges deliberate</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-blue-50 -mx-4 px-4 py-3 rounded-lg">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-blue-700 font-bold text-lg">18:30</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Award Ceremony</h4>
                      <p className="text-slate-600 text-sm">Announcing the winners!</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-blue-700 font-bold text-lg">19:00</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Closing Drinks</h4>
                      <p className="text-slate-600 text-sm">Celebrate and network</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-blue-700 font-bold text-lg">20:00</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Location Closes</h4>
                      <p className="text-slate-600 text-sm">End of the hackathon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Hackathon & Participation */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">About the Hackathon</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed mb-8">
                <p>
                  The Legal Hackathon: Optimising the Law is an exciting event organized by Futurist Law Lab,
                  bringing together law students, tech enthusiasts, and innovators to tackle real-world legal challenges
                  through creative and technological solutions.
                </p>
                <p>
                  Participants will work in teams to develop innovative solutions that optimize legal frameworks,
                  making them more accessible, efficient, and responsive to the needs of modern society.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6">Who Should Participate?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-700 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Law Students</h4>
                    <p className="text-slate-600 text-sm">Interested in exploring how technology can improve legal processes</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-700 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Tech Enthusiasts</h4>
                    <p className="text-slate-600 text-sm">Curious about legal applications and regulatory challenges</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-700 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Innovators</h4>
                    <p className="text-slate-600 text-sm">Passionate about creating meaningful change in legal systems</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-700 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Anyone Curious</h4>
                    <p className="text-slate-600 text-sm">Interested in the intersection of law, technology, and society</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Partners</h2>
              <p className="text-slate-600">This event is made possible by our amazing partners</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
              <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
                <div className="relative w-full h-24">
                  <Image
                    src="/hackathon/IMG_2978-removebg-preview.png"
                    alt="Partner"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
                <div className="relative w-full h-24">
                  <Image
                    src="/hackathon/IMG_3007-removebg-preview.png"
                    alt="Partner"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
                <div className="relative w-full h-24">
                  <Image
                    src="/hackathon/logoblack.svg"
                    alt="Lovable"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
                <div className="relative w-full h-24">
                  <Image
                    src="/hackathon/WhatsApp_Image_2025-11-17_at_15.37.49-removebg-preview.png"
                    alt="Partner"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
                <div className="relative w-full h-24">
                  <Image
                    src="/hackathon/momen-logo.svg"
                    alt="Momen"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
                <div className="relative w-full h-24">
                  <Image
                    src="/hackathon/WhatsApp Image 2025-11-18 at 13.50.29 (2).jpeg"
                    alt="Partner"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
                <div className="relative w-full h-24">
                  <Image
                    src="/hackathon/WhatsApp Image 2025-11-18 at 13.50.29 (3).jpeg"
                    alt="Partner"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Documents Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Important Documents</h2>
              <p className="text-slate-600">Please review these documents before registering</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/hackathon/terms"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-700"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Terms &amp; Conditions</h3>
                    <p className="text-slate-600 mb-3">
                      Review the terms of participation, including eligibility, intellectual property rights, registration fees, and event policies.
                    </p>
                    <span className="inline-flex items-center text-blue-700 font-medium">
                      Read Terms
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                href="/hackathon/code-of-conduct"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-700"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Code of Conduct</h3>
                    <p className="text-slate-600 mb-3">
                      Learn about our commitment to creating a safe, inclusive, and respectful environment for all participants.
                    </p>
                    <span className="inline-flex items-center text-blue-700 font-medium">
                      Read Code of Conduct
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 opacity-30"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center mb-4">
                <div className="w-10 h-10 relative mr-3">
                  <Image
                    src="/images/logo.jpeg"
                    alt="Futurist Law Lab Logo"
                    fill
                    className="object-contain invert"
                    priority
                  />
                </div>
                <div className="font-bold text-xl text-white">Futurist Law Lab</div>
              </Link>
              <p className="text-slate-300 mb-4 max-w-md">
                A student initiative based in Amsterdam engaging youth to shape the future of law in the age of technological advancement.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/#about" className="text-slate-300 hover:text-white transition">About Us</Link></li>
                <li><Link href="/#mission" className="text-slate-300 hover:text-white transition">Our Mission</Link></li>
                <li><Link href="/#activities" className="text-slate-300 hover:text-white transition">Events</Link></li>
                <li><Link href="/blog" className="text-slate-300 hover:text-white transition">Blog</Link></li>
                <li><Link href="/publications" className="text-slate-300 hover:text-white transition">Publications</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-slate-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-slate-300">contact@futuristlawlab.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-slate-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="text-slate-300">Amsterdam, The Netherlands</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Futurist Law Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
