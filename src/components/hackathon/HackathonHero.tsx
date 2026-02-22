export default function HackathonHero() {
  return (
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
  );
}
