export default function MissionSection() {
  return (
      <section id="mission" aria-labelledby="mission-heading" className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-900 to-transparent opacity-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-900 to-transparent opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="bg-blue-100 py-2 px-4 rounded-full text-blue-700 text-sm font-medium inline-block mb-4 sm:mb-6">
              Our Purpose
            </div>
            <h2 id="mission-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-slate-900">Our Mission</h2>
            <p className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              We aim to bridge the gap between technological advancement and legal frameworks through youth engagement and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="card group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 transition group-hover:bg-blue-200">
                <span className="text-blue-700 text-xl font-bold">01</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-700 transition">Engage Youth</h3>
              <p className="text-slate-700">
                We aim to engage young people in future-proofing the law. The youth often think they have no control over EU lawmaking, but that is far from the truth!
              </p>
            </article>

            <article className="card group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 transition group-hover:bg-blue-200">
                <span className="text-blue-700 text-xl font-bold">02</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-700 transition">Revitalize Law</h3>
              <p className="text-slate-700">
                We want to show people that law is alive, exciting, and ever-changing. The law often lags behind technological developments, but it does not have to be that way!
              </p>
            </article>
          </div>

          <article className="mt-12 card border-t-4 border-blue-700 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-slate-900 opacity-5 rounded-full transform translate-x-16 translate-y-16"></div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">How We Achieve Our Aims</h3>
            <p className="text-slate-800 mb-6">
              We promote smart lawmaking, inclusive legislative processes, and aim to be the voice of youth in legal discussions surrounding emerging technologies.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-800">Organizing events at universities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-800">Conducting workshops on law and technology</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-800">Participating in events like the European Youth Event</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-800">Creating resources for youth engagement</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
  );
}
