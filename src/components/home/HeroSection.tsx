import Link from 'next/link';

export default function HeroSection() {
  return (
      <section aria-labelledby="hero-heading" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden min-h-[80vh] sm:min-h-[70vh] md:min-h-[85vh] flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 -z-10"></div>

        {/* Desktop Background Elements - Hidden on Mobile */}
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-blue-700/5 -z-10 rounded-l-3xl hidden lg:block"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full transform translate-x-1/3 -translate-y-1/3 blur-3xl -z-10 hidden lg:block"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-900/5 rounded-full transform -translate-x-1/3 translate-y-1/3 blur-3xl -z-10 hidden lg:block"></div>

        {/* Subtle Mobile Background Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl -z-10 lg:hidden"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-slate-900/5 rounded-full blur-2xl -z-10 lg:hidden"></div>

        {/* Animated Network Background - Desktop Only */}
        <div className="absolute inset-0 -z-5 hidden lg:block">
          {/* Network Nodes */}
          <div className="absolute h-3 w-3 bg-blue-700/40 rounded-full top-1/4 left-1/5 animate-pulse"></div>
          <div className="absolute h-2 w-2 bg-slate-700/30 rounded-full top-3/5 left-1/3 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute h-4 w-4 bg-blue-600/30 rounded-full top-2/5 left-2/3 animate-pulse" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute h-2 w-2 bg-blue-500/30 rounded-full top-1/6 left-1/2 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute h-3 w-3 bg-slate-600/30 rounded-full top-3/4 left-3/4 animate-pulse" style={{ animationDelay: '0.3s' }}></div>

          {/* Network Lines */}
          <div className="absolute h-px bg-blue-700/20 w-1/4 top-1/4 left-1/5 transform rotate-12 animate-[pulse_3s_ease-in-out_infinite]"></div>
          <div className="absolute h-px bg-slate-700/20 w-1/3 top-3/5 left-1/3 transform -rotate-12 animate-[pulse_2.5s_ease-in-out_infinite]" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute h-px bg-blue-600/20 w-1/3 top-2/5 left-2/3 transform rotate-45 animate-[pulse_3.5s_ease-in-out_infinite]" style={{ animationDelay: '0.6s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            {/* Main Content - Full Width on Mobile */}
            <div className="w-full lg:w-5/12 xl:w-4/12 text-center lg:text-left">
              <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 sm:mb-8 tracking-tight">
                Future-Proofing{' '}
                <br className="hidden sm:block" />
                <span className="text-blue-700 relative inline-block">
                  Legal Frameworks
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-blue-700/30 rounded-full"></span>
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-700 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                A student initiative engaging youth to shape the future of law in the age of technological advancement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/join-us"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  aria-label="Join our team"
                >
                  <span>Join Us</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </Link>
                <Link
                  href="#activities"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-900 text-slate-900 font-medium rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-200 transform hover:-translate-y-0.5"
                  aria-label="View our events"
                >
                  Events
                </Link>
              </div>
            </div>

            {/* Neural Network Visualization - Desktop Only */}
            <div className="hidden lg:flex w-7/12 xl:w-8/12 mt-0 justify-center items-center">
              <div className="w-full h-[400px] xl:h-[500px] relative">
                <div className="w-full h-full relative" style={{perspective: '1200px', transformStyle: 'preserve-3d'}}>
                  {/* Neural Network Nodes */}
                  <div className="absolute h-8 w-8 bg-blue-700/90 rounded-full top-1/4 left-1/4 animate-pulse shadow-lg shadow-blue-700/30" style={{transform: 'translateZ(30px)'}}></div>
                  <div className="absolute h-7 w-7 bg-blue-800/90 rounded-full top-3/4 left-1/2 animate-pulse shadow-lg shadow-blue-800/30" style={{animationDelay: '0.5s', transform: 'translateZ(20px)'}}></div>
                  <div className="absolute h-6 w-6 bg-blue-500/90 rounded-full top-1/2 left-3/4 animate-pulse shadow-lg shadow-blue-500/30" style={{animationDelay: '0.7s', transform: 'translateZ(35px)'}}></div>
                  <div className="absolute h-9 w-9 bg-blue-700/90 rounded-full top-1/3 left-1/3 animate-pulse shadow-lg shadow-blue-700/30" style={{animationDelay: '1.2s', transform: 'translateZ(15px)'}}></div>
                  <div className="absolute h-7 w-7 bg-slate-900/90 rounded-full top-2/3 left-1/4 animate-pulse shadow-lg shadow-slate-900/30" style={{animationDelay: '0.3s', transform: 'translateZ(40px)'}}></div>
                  <div className="absolute h-8 w-8 bg-blue-600/90 rounded-full top-1/2 left-2/3 animate-pulse shadow-lg shadow-blue-600/30" style={{animationDelay: '0.8s', transform: 'translateZ(25px)'}}></div>
                  <div className="absolute h-7 w-7 bg-slate-900/90 rounded-full top-1/4 left-2/3 animate-pulse shadow-lg shadow-slate-900/30" style={{animationDelay: '0.5s', transform: 'translateZ(32px)'}}></div>
                  <div className="absolute h-6 w-6 bg-blue-500/90 rounded-full top-3/4 left-1/4 animate-pulse shadow-lg shadow-blue-500/30" style={{animationDelay: '0.9s', transform: 'translateZ(18px)'}}></div>
                  <div className="absolute h-8 w-8 bg-blue-700/90 rounded-full top-2/3 left-3/4 animate-pulse shadow-lg shadow-blue-700/30" style={{animationDelay: '1.4s', transform: 'translateZ(38px)'}}></div>
                  <div className="absolute h-9 w-9 bg-slate-900/90 rounded-full top-2/5 left-3/5 animate-pulse shadow-lg shadow-slate-900/30" style={{animationDelay: '1.1s', transform: 'translateZ(22px)'}}></div>
                  <div className="absolute h-7 w-7 bg-blue-600/90 rounded-full top-1/6 left-2/5 animate-pulse shadow-lg shadow-blue-600/30" style={{animationDelay: '0.7s', transform: 'translateZ(28px)'}}></div>
                  <div className="absolute h-8 w-8 bg-blue-500/90 rounded-full top-4/5 left-3/5 animate-pulse shadow-lg shadow-blue-500/30" style={{animationDelay: '1.3s', transform: 'translateZ(24px)'}}></div>

                  {/* Connections - Animated with 3D Effect */}
                  <svg className="absolute inset-0 w-full h-full" style={{filter: 'drop-shadow(0 0 8px rgba(37, 99, 235, 0.4))'}}>
                    {/* Connection 1 */}
                    <line x1="25%" y1="25%" x2="33%" y2="33%" className="stroke-blue-600 stroke-[3px]" strokeLinecap="round">
                      <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite" />
                    </line>
                    {/* Connection 2 */}
                    <line x1="33%" y1="33%" x2="50%" y2="75%" className="stroke-blue-700 stroke-[3px]" strokeLinecap="round">
                      <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
                    </line>
                    {/* Connection 3 */}
                    <line x1="33%" y1="33%" x2="67%" y2="50%" className="stroke-blue-600 stroke-[3px]" strokeLinecap="round">
                      <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" />
                    </line>
                    {/* Connection 4 */}
                    <line x1="67%" y1="50%" x2="75%" y2="75%" className="stroke-blue-500 stroke-[3px]" strokeLinecap="round">
                      <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="2.7s" repeatCount="indefinite" />
                    </line>
                    {/* Connection 5 */}
                    <line x1="75%" y1="50%" x2="50%" y2="75%" className="stroke-slate-900 stroke-[3px]" strokeLinecap="round">
                      <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="2.3s" repeatCount="indefinite" />
                    </line>
                    {/* Connection 6 */}
                    <line x1="25%" y1="25%" x2="25%" y2="67%" className="stroke-blue-600 stroke-[3px]" strokeLinecap="round">
                      <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="2.8s" repeatCount="indefinite" />
                    </line>
                    {/* Connection 7 */}
                    <line x1="33%" y1="33%" x2="67%" y2="25%" className="stroke-slate-900 stroke-[3px]" strokeLinecap="round">
                      <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="3.2s" repeatCount="indefinite" />
                    </line>
                    {/* Connection 8 */}
                    <line x1="67%" y1="25%" x2="75%" y2="50%" className="stroke-blue-600 stroke-[3px]" strokeLinecap="round">
                      <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="2.9s" repeatCount="indefinite" />
                    </line>
                    {/* Connection 9 */}
                    <line x1="25%" y1="75%" x2="50%" y2="75%" className="stroke-slate-900 stroke-[3px]" strokeLinecap="round">
                      <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" />
                    </line>
                    {/* Connection 10 */}
                    <line x1="25%" y1="67%" x2="25%" y2="75%" className="stroke-blue-700 stroke-[3px]" strokeLinecap="round">
                      <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="2.6s" repeatCount="indefinite" />
                    </line>
                    {/* Connection 11 */}
                    <line x1="75%" y1="50%" x2="67%" y2="75%" className="stroke-blue-500 stroke-[3px]" strokeLinecap="round">
                      <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="2.4s" repeatCount="indefinite" />
                    </line>
                    {/* Connection 12 */}
                    <line x1="60%" y1="40%" x2="25%" y2="25%" className="stroke-slate-900 stroke-[3px]" strokeLinecap="round">
                      <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="2.8s" repeatCount="indefinite" />
                    </line>
                    {/* Connection 13 */}
                    <line x1="60%" y1="40%" x2="67%" y2="25%" className="stroke-blue-600 stroke-[3px]" strokeLinecap="round">
                      <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="3.1s" repeatCount="indefinite" />
                    </line>
                    {/* Connection 14 */}
                    <line x1="60%" y1="40%" x2="60%" y2="80%" className="stroke-blue-700 stroke-[3px]" strokeLinecap="round">
                      <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="2.7s" repeatCount="indefinite" />
                    </line>
                    {/* Extra 3D-like connections */}
                    <line x1="25%" y1="25%" x2="75%" y2="50%" className="stroke-blue-400 stroke-[2px]" strokeLinecap="round" strokeDasharray="5,5">
                      <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="3.5s" repeatCount="indefinite" />
                    </line>
                    <line x1="33%" y1="33%" x2="75%" y2="75%" className="stroke-blue-400 stroke-[2px]" strokeLinecap="round" strokeDasharray="5,5">
                      <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="3.8s" repeatCount="indefinite" />
                    </line>
                    <line x1="25%" y1="75%" x2="67%" y2="25%" className="stroke-slate-900 stroke-[2px]" strokeLinecap="round" strokeDasharray="5,5">
                      <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
                    </line>
                    <line x1="40%" y1="16%" x2="60%" y2="80%" className="stroke-slate-900 stroke-[2px]" strokeLinecap="round" strokeDasharray="5,5">
                      <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="3.6s" repeatCount="indefinite" />
                    </line>
                  </svg>

                  {/* Moving Pulses Along Lines */}
                  <div className="absolute h-4 w-4 bg-blue-400 rounded-full animate-[ping_4s_ease-in-out_infinite] blur-[1px]" style={{top: '29%', left: '29%', filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))'}}></div>
                  <div className="absolute h-4 w-4 bg-blue-500 rounded-full animate-[ping_3.5s_ease-in-out_infinite] blur-[1px]" style={{top: '65%', left: '35%', animationDelay: '0.7s', filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))'}}></div>
                  <div className="absolute h-4 w-4 bg-blue-600 rounded-full animate-[ping_4.5s_ease-in-out_infinite] blur-[1px]" style={{top: '45%', left: '55%', animationDelay: '1.5s', filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))'}}></div>
                  <div className="absolute h-4 w-4 bg-blue-700 rounded-full animate-[ping_3.8s_ease-in-out_infinite] blur-[1px]" style={{top: '58%', left: '72%', animationDelay: '1.2s', filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))'}}></div>
                  <div className="absolute h-4 w-4 bg-slate-900 rounded-full animate-[ping_4.2s_ease-in-out_infinite] blur-[1px]" style={{top: '25%', left: '50%', animationDelay: '0.5s', filter: 'drop-shadow(0 0 10px rgba(15, 23, 42, 0.8))'}}></div>
                  <div className="absolute h-4 w-4 bg-slate-900 rounded-full animate-[ping_3.9s_ease-in-out_infinite] blur-[1px]" style={{top: '42%', left: '40%', animationDelay: '1.7s', filter: 'drop-shadow(0 0 10px rgba(15, 23, 42, 0.8))'}}></div>

                  {/* 3D Rotation Animation */}
                  <div className="absolute inset-0 animate-[spin_45s_linear_infinite] opacity-85" style={{transformStyle: 'preserve-3d', animation: 'float 15s ease-in-out infinite'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
