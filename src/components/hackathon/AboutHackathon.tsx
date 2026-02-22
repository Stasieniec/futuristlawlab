export default function AboutHackathon() {
  return (
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
  );
}
