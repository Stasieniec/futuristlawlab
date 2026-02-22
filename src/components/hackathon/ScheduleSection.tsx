export default function ScheduleSection() {
  return (
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
  );
}
