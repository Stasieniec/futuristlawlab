import Image from 'next/image';
import Link from 'next/link';

export default function ResearchHighlight() {
  return (
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-blue-100 py-2 px-4 rounded-full text-blue-700 text-sm font-medium inline-block mb-6">
              Latest Articles
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Exploring Legal Innovation
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Our members are conducting research at the intersection of law and technology.
              Discover their latest work and insights into the future of legal frameworks.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-100">
              <div className="lg:flex">
                <div className="lg:w-2/3 p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      Bachelor Thesis
                    </span>
                    <span className="text-slate-500 text-sm">January 2025</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                    Is Law the Solution? Examining Legislative Impact on Smart Contract Adoption
                  </h3>

                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center mr-3 overflow-hidden">
                      <Image
                        src="/images/team/sarka.png"
                        alt="Sarka Juklova"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-slate-600 font-medium">By Sarka Juklova</p>
                  </div>

                  <p className="text-slate-700 mb-6 leading-relaxed">
                    This interdisciplinary research explores how smart contract legislation in U.S. states affects users&apos; willingness to adopt the technology, revealing striking insights about the role of legal design in shaping user trust and technological engagement.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm">Smart Contracts</span>
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm">Blockchain</span>
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm">Legal Technology</span>
                  </div>

                  <Link
                    href="/publications/smart-contracts-legislation-impact"
                    className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition"
                  >
                    Read full publication
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>

                <div className="lg:w-1/3 bg-gradient-to-br from-blue-50 to-slate-50 p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-blue-700 rounded-2xl flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <p className="text-slate-600 font-medium">Full PDF Available</p>
                    <Link
                      href="/publications"
                      className="inline-flex items-center text-blue-700 text-sm font-medium hover:text-blue-800 transition mt-3"
                    >
                      View All Publications
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
  );
}
