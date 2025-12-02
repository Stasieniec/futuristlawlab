'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HackathonPage() {
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
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-700 text-sm font-medium mb-8">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              Event Completed - November 28-29, 2025
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Legal Hackathon: <br className="hidden sm:block" />
              <span className="text-blue-700">Optimising the Law</span>
            </h1>

            <p className="text-xl text-slate-700 mb-10 leading-relaxed max-w-3xl mx-auto">
              We hosted an exciting hackathon where legal innovation met creative problem-solving. Together, participants explored innovative approaches to optimize legal frameworks for the modern age.
            </p>
          </div>
        </div>
      </section>

      {/* Post-Event Resources Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Event Resources</h2>
              <p className="text-slate-600">Share your feedback and access photos from the hackathon</p>
            </div>

            <div className="space-y-4">
              <Link
              href="/hackathon/feedback"
              className="block w-full p-6 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Hackathon Feedback</h3>
                    <p className="text-emerald-100">Share your experience and help us improve</p>
                  </div>
                </div>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </Link>

            <Link
              href="/hackathon/photos"
              className="block w-full p-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Hackathon Photos</h3>
                    <p className="text-purple-100">View photos from the event (feedback required)</p>
                  </div>
                </div>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </Link>

            <a
              href="https://docs.google.com/forms/d/11Ltd6M75mALheBokmPT1DZSHJThRNXJlNA6oFDPZXmk/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full p-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Lovable Feedback Survey</h3>
                    <p className="text-pink-100">We kindly ask you to share your experience with Lovable</p>
                  </div>
                </div>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </div>
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* About the Hackathon & Participation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">About the Hackathon</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed mb-8">
                <p>
                  The Legal Hackathon: Optimising the Law was an exciting event organized by Futurist Law Lab,
                  bringing together law students, tech enthusiasts, and innovators to tackle real-world legal challenges
                  through creative and technological solutions.
                </p>
                <p>
                  Participants worked in teams to develop innovative solutions that optimize legal frameworks,
                  making them more accessible, efficient, and responsive to the needs of modern society.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6">Who Participated?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-700 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Law Students</h4>
                    <p className="text-slate-600 text-sm">Explored how technology can improve legal processes</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-700 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Tech Enthusiasts</h4>
                    <p className="text-slate-600 text-sm">Dove into legal applications and regulatory challenges</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-700 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Innovators</h4>
                    <p className="text-slate-600 text-sm">Created meaningful change in legal systems</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-700 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Curious Minds</h4>
                    <p className="text-slate-600 text-sm">Engaged with the intersection of law, technology, and society</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Prizes</h2>
              <p className="text-slate-600 text-lg">Exciting rewards for our winners</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Prize 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border-2 border-blue-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Hack the Law Cambridge</h3>
                <p className="text-slate-700">
                  Exclusive access to Hack the Law Cambridge competition with covered expenses
                </p>
              </div>

              {/* Prize 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border-2 border-blue-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Moonlit Pro Access</h3>
                <p className="text-slate-700">
                  1 year of Moonlit Pro access
                </p>
              </div>

              {/* Prize 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border-2 border-blue-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Moonlit Office Tour</h3>
                <p className="text-slate-700">
                  Lunch & office tour at Moonlit office in Amsterdam
                </p>
              </div>

              {/* Prize 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border-2 border-blue-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Pinsent Masons Office Tour</h3>
                <p className="text-slate-700">
                  Lunch & office tour at Pinsent Masons in Amsterdam
                </p>
              </div>

              {/* Prize 5 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border-2 border-blue-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">$1080 Momen Pro Plan</h3>
                <p className="text-slate-700">
                  1-year Momen Pro-plan subscription
                </p>
              </div>

              {/* More Prizes Coming */}
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border-2 border-blue-200">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">And More to Be Revealed!</h3>
                <p className="text-slate-700">
                  Stay tuned for additional exciting prizes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Event Schedule</h2>
              <p className="text-slate-600 text-lg mb-6">
                Nieuwe Achtergracht 164, 1018 WV Amsterdam
              </p>

              {/* Google Maps Embed */}
              <div className="max-w-3xl mx-auto">
                <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.7844863582654!2d4.909803776793503!3d52.36543704714482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c68e6e1c89%3A0x929a376c6797e08c!2sNieuwe%20Achtergracht%20164%2C%201018%20WV%20Amsterdam!5e0!3m2!1sen!2snl!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Event Location Map"
                  ></iframe>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Nieuwe+Achtergracht+164,+1018+WV+Amsterdam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-blue-700 hover:text-blue-800 font-medium transition"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Open in Google Maps
                </a>
              </div>
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

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Partners</h2>
              <p className="text-slate-600">This event was made possible by our amazing partners</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
              <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
                <div className="relative w-full h-24">
                  <Image
                    src="/hackathon/houthoff.jpeg"
                    alt="Houthoff"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
                <div className="relative w-full h-24">
                  <Image
                    src="/hackathon/pinsent-masons.png"
                    alt="Pinsent Masons"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
                <div className="relative w-full h-24">
                  <Image
                    src="/hackathon/debrauw.jpeg"
                    alt="De Brauw Blackstone Westbroek"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
                <div className="relative w-full h-24">
                  <Image
                    src="/hackathon/moonlit.jpeg"
                    alt="Moonlit"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
                <div className="relative w-full h-24">
                  <Image
                    src="/hackathon/lovable-black.svg"
                    alt="Lovable"
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
                    src="/hackathon/amsterdam-law-hub.jpeg"
                    alt="Amsterdam Law Hub"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
                <div className="relative w-full h-24">
                  <Image
                    src="/hackathon/amsterdam-university-fonds.png"
                    alt="Amsterdam University Fonds"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
                <div className="relative w-full h-24">
                  <Image
                    src="/hackathon/sirach-ventures.png"
                    alt="Sirach Ventures"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
                <div className="relative w-full h-24">
                  <Image
                    src="/hackathon/tdp.jpeg"
                    alt="TDP"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
                <div className="relative w-full h-24">
                  <Image
                    src="/hackathon/aim-pple.jpeg"
                    alt="AIM PPLE"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
                <div className="relative w-full h-24">
                  <Image
                    src="/hackathon/hack-the-law.png"
                    alt="Hack the Law Cambridge"
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
