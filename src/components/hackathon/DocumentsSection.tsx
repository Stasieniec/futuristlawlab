import Link from 'next/link';

export default function DocumentsSection() {
  return (
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
  );
}
