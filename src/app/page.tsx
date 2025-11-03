import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Futurist Law Lab',
  description: 'A student initiative based in Amsterdam engaging youth to shape the future of law in the age of technological advancement.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
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
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-slate-800 font-medium hover:text-blue-700 transition" aria-label="Learn about Futurist Law Lab">About</Link>
              <Link href="#mission" className="text-slate-800 font-medium hover:text-blue-700 transition" aria-label="Explore our mission">Our Mission</Link>
              <Link href="#activities" className="text-slate-800 font-medium hover:text-blue-700 transition" aria-label="Discover our events">Events</Link>
              <Link href="/hackathon" className="text-blue-700 font-bold hover:text-blue-800 transition" aria-label="Join our Legal Hackathon">Hackathon</Link>
              <Link href="/blog" className="text-slate-800 font-medium hover:text-blue-700 transition" aria-label="Read our blog articles">Blog</Link>
              <Link href="/publications" className="text-slate-800 font-medium hover:text-blue-700 transition" aria-label="View our academic publications">Publications</Link>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              {/* This would typically use useState for toggle functionality */}
              <button className="mobile-menu-button p-2 focus:outline-none" aria-label="Toggle menu">
                <svg className="w-6 h-6 text-slate-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </nav>
          
          {/* Mobile Menu (Hidden by default) */}
          <div className="mobile-menu hidden md:hidden">
            <div className="flex flex-col space-y-4 pt-4 pb-3 px-4">
              <Link href="#about" className="text-slate-800 hover:text-blue-700 transition py-2" aria-label="Learn about Futurist Law Lab">About</Link>
              <Link href="#mission" className="text-slate-800 hover:text-blue-700 transition py-2" aria-label="Explore our mission">Our Mission</Link>
              <Link href="#activities" className="text-slate-800 hover:text-blue-700 transition py-2" aria-label="Discover our events">Events</Link>
              <Link href="/hackathon" className="text-blue-700 font-bold hover:text-blue-800 transition py-2" aria-label="Join our Legal Hackathon">Hackathon</Link>
              <Link href="/blog" className="text-slate-800 hover:text-blue-700 transition py-2" aria-label="Read our blog articles">Blog</Link>
              <Link href="/publications" className="text-slate-800 hover:text-blue-700 transition py-2" aria-label="View our academic publications">Publications</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Mobile Optimized */}
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
                  href="/hackathon" 
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  aria-label="Join our Legal Hackathon"
                >
                  <span>Hackathon</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
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

      {/* About Section */}
      <section id="about" aria-labelledby="about-heading" className="bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="bg-blue-600/10 py-2 px-4 rounded-full text-blue-700 text-sm font-medium inline-block mb-4 sm:mb-6">
                Who We Are
              </div>
              <h2 id="about-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-slate-900">About Us</h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Futurist Law Lab is a student initiative based in Amsterdam that approaches the intersection of law and emerging technologies primarily from a legal perspective.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  We bring together law students, tech enthusiasts, and policymakers to collaborate on forward-thinking approaches to legal challenges posed by technological advancement.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/images/about_us.jpeg" 
                alt="Futurist Law Lab Team" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" aria-labelledby="activities-heading" className="py-16 sm:py-20 lg:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="bg-blue-100 py-2 px-4 rounded-full text-blue-700 text-sm font-medium inline-block mb-4 sm:mb-6">
            What We Do
          </div>
          <h2 id="activities-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-slate-900">Events</h2>
          <p className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Discover how we&apos;re making an impact through various initiatives and events.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Hackathon Event Card */}
          <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-6 group border-2 border-blue-700">
            <div className="rounded-xl overflow-hidden h-48 sm:h-56 lg:h-64 mb-4 sm:mb-6 relative shadow-sm bg-gradient-to-br from-blue-50 to-slate-50 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-700 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <p className="text-blue-700 font-bold text-lg">Legal Hackathon</p>
              </div>
              <div className="absolute top-3 right-3 bg-blue-700 text-white px-2 py-1 rounded-full text-xs font-medium">
                Upcoming
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-slate-900">Legal Hackathon: Optimising the Law</h3>
            <p className="text-sm sm:text-base text-slate-700 mb-3 sm:mb-4 leading-relaxed">
              Join us for an exciting hackathon where legal innovation meets creative problem-solving. Together, we&apos;ll explore innovative approaches to optimize legal frameworks for the modern age.
            </p>
            <div className="flex items-center text-sm text-blue-700 font-medium mb-4">
              <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Roeterseiland Campus, Amsterdam
            </div>
            <div className="flex gap-2">
              <Link 
                href="/hackathon" 
                className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition text-sm"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
              <a 
                href="https://luma.com/4n3xt9mz" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-4 py-2 border-2 border-blue-700 text-blue-700 font-medium rounded-lg hover:bg-blue-700 hover:text-white transition text-sm"
              >
                Register
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </article>
          
          <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-6 group">
            <div className="rounded-xl overflow-hidden h-48 sm:h-56 lg:h-64 mb-4 sm:mb-6 relative shadow-sm">
              <Image 
                src="/images/eu_workshop.jpeg" 
                alt="European Parliament Workshop" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
              Completed
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-slate-900">European Parliament Workshop</h3>
            <p className="text-sm sm:text-base text-slate-700 mb-3 sm:mb-4 leading-relaxed">
              Join us at the European Parliament in Strasbourg for an exclusive deep dive into the EU AI Act during the European Youth Event. Explore how this groundbreaking legislation will shape the future of artificial intelligence regulation.
            </p>
            <div className="flex items-center text-sm text-blue-700 font-medium">
              <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              June 13-14, 2025
            </div>
          </article>
          
          <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-6 group">
            <div className="rounded-xl overflow-hidden h-48 sm:h-56 lg:h-64 mb-4 sm:mb-6 relative shadow-sm">
              <Image 
                src="/images/uva_workshop.jpeg" 
                alt="University of Amsterdam Workshop" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                Completed
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-slate-900">University of Amsterdam Workshop</h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              What an incredible session we had at UvA! Students engaged passionately in dissecting the EU AI Act, exploring its implications for innovation and fundamental rights. The energy in the room was fantastic as we navigated through complex regulatory frameworks together.
            </p>
          </article>
          
          <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-6 group md:col-span-2 lg:col-span-1">
            <div className="rounded-xl overflow-hidden h-48 sm:h-56 lg:h-64 mb-4 sm:mb-6 relative shadow-sm">
              <Image 
                src="/images/vu_workshop.jpeg" 
                alt="Vrije Universiteit Amsterdam Workshop" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                Completed
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-slate-900">Vrije Universiteit Workshop</h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Our VU Amsterdam workshop was a huge success! Participants dove deep into the technical aspects of AI regulation, examining real-world case studies and their legal implications. The interactive discussions and collaborative problem-solving made it an unforgettable learning experience.
            </p>
          </article>
        </div>
        </div>
      </section>

      {/* Mission Section */}
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

      {/* Team Section */}
      <section id="team" aria-labelledby="team-heading" className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 id="team-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
              Meet Our Team
            </h2>
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
              The passionate students behind Futurist Law Lab working to shape the future of legal frameworks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Member Card 1 - Laura Peirs */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 sm:h-72 lg:h-80 w-full">
                <Image 
                  src="/images/team/laura.jpeg" 
                  alt="Laura Peirs" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1">Laura Peirs</h3>
                <p className="text-blue-700 font-medium mb-3">Founder, Legal Team</p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Half Belgian, half Polish PPLE student at the University of Amsterdam, majoring in law. Founder of Futurist Law Lab and Partnerships Manager at Computational Social Science. Passionate about interdisciplinary approaches to complex societal challenges, particularly at the intersection of law, technology, and governance. Enjoys mountain hiking, sailing, running, and reading in her free time.
                </p>
              </div>
            </div>
            
            {/* Member Card 2 - Sarka Juklova */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-80 w-full">
                <Image 
                  src="/images/team/sarka.png" 
                  alt="Sarka Juklova" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-1">Sarka Juklova</h3>
                <p className="text-blue-700 font-medium mb-3">Legal Team</p>
                <p className="text-slate-600">
                  Law major at PPLE College (University of Amsterdam), graduating in 2025. Interested in the intersection of Law and Economics, market regulation, and technology governance including AI, blockchain, and gene editing. Works as a tutor in Mathematics and Economics, and enjoys spending time with her dog, playing rugby, and running.
                </p>
              </div>
            </div>
            
            {/* Member Card 3 - Matthew Kelleher */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-80 w-full">
                <Image 
                  src="/images/team/matthew.jpeg" 
                  alt="Matthew Kelleher" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-1">Matthew Kelleher</h3>
                <p className="text-blue-700 font-medium mb-3">Legal Team</p>
                <p className="text-slate-600">
                  Second-year PPLE student at the University of Amsterdam, majoring in Law. Interested in Artificial Intelligence and emerging legal challenges, with research on how the European AI Act could impact Ireland&apos;s economy and how structural inequalities can be embedded in AI. In his free time, Matthew enjoys training Brazilian Jiu-Jitsu and playing tennis.
                </p>
              </div>
            </div>
            
            {/* Member Card 4 - Tadeáš Krejčí */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-80 w-full">
                <Image 
                  src="/images/team/tadeas.jpeg" 
                  alt="Tadeáš Krejčí" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-1">Tadeáš Krejčí</h3>
                <p className="text-blue-700 font-medium mb-3">Legal Team</p>
                <p className="text-slate-600">
                  Third-year PPLE student, majoring in Law, at the University of Amsterdam. Has mooting experience in EU competition law and previously worked on a project to popularize EU politics in Czech high schools. Enjoys long hikes, reading British romantic literature, and exploring etymology. Career ambition is to work in EU institutions and contribute to shaping European policies.
                </p>
              </div>
            </div>
            
            {/* Member Card 5 - Kate Owens */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 sm:h-72 lg:h-80 w-full">
                <Image 
                  src="/images/team/kate.jpeg" 
                  alt="Kate Owens" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1">Kate Owens</h3>
                <p className="text-blue-700 font-medium mb-3">Legal Team</p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Second-year PPLE student at the University of Amsterdam, majoring in law. Has a long-standing interest in STEM, which began through her participation in the BT Young Scientist Competition. It showed her the value of taking complex research and communicating it in a way that&apos;s accessible and engaging to the public, something she hopes to continue to do here at the Futurist Law Lab. Outside of academics, you can usually find her at the pool or exploring new cafés around Amsterdam.
                </p>
              </div>
            </div>
            
            {/* Member Card 6 - Clara Langenbach */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-80 w-full">
                <Image 
                  src="/images/team/clara.jpeg" 
                  alt="Clara Langenbach" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-1">Clara Langenbach</h3>
                <p className="text-blue-700 font-medium mb-3">Legal Team</p>
                <p className="text-slate-600">
                  Half German and Brazilian PPLE student with electives in Law and Economics and Global AI. Particularly interested in the intersection between Law and Technology and its application in both Europe and Brazil. Values bringing together diverse perspectives to assess issues in today&apos;s globalized world. Enjoys drawing, photography, and art in general.
                </p>
              </div>
            </div>
            
            {/* Member Card 7 - Julia Lirio */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-80 w-full">
                <Image 
                  src="/images/team/julia.jpeg" 
                  alt="Julia Lirio" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-1">Julia Lirio</h3>
                <p className="text-blue-700 font-medium mb-3">Legal Team</p>
                <p className="text-slate-600">
                  Brazilian/Italian PPLE student with a major in Law and a minor in Law and Economics. Interested in how Law should effectively regulate technology in our increasingly digitalized world and its relation to human rights and security. Analyzes how political groups lobby for or resist regulations like the EU AI Act. Enjoys playing volleyball, going to the movies, and reading in her free time.
                </p>
              </div>
            </div>
            
            {/* Member Card 8 - Stanislaw Wasilewski */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-80 w-full">
                <Image 
                  src="/images/team/stanislaw.jpeg" 
                  alt="Stanislaw Wasilewski" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-1">Stanislaw Wasilewski</h3>
                <p className="text-blue-700 font-medium mb-3">AI Team</p>
                <p className="text-slate-600">
                  AI Developer with a BSc in Artificial Intelligence from Vrije Universiteit Amsterdam. Specializes in machine learning, natural language processing, and computer vision. Works as an AI Engineer at TasteRay implementing and fine-tuning Large Language Models. Previously served as a Teaching Assistant for Machine Learning and Python at VU Amsterdam and co-founded a web development company. Passionate about building intelligent systems that enhance human capabilities while exploring the ethical dimensions of technology.
                </p>
              </div>
            </div>
            
            {/* Member Card 9 - Krzysztof Nowak */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-80 w-full">
                <Image 
                  src="/images/team/krzysztof.jpeg" 
                  alt="Krzysztof Nowak" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-1">Krzysztof Nowak</h3>
                <p className="text-blue-700 font-medium mb-3">AI Team</p>
                <p className="text-slate-600">
                  Third-year Artificial Intelligence student at Vrije Universiteit Amsterdam, currently on exchange at the Hong Kong University of Science and Technology. Conducting thesis internship at the Institute for Cancer Research, developing ML models for cancer diagnosis. Previous experience includes AI projects for Novo Nordisk and leading development of an intelligent healthcare assistant at Ancora Health. Passionate about the intersections of AI, neuroscience, medicine, and business.
                </p>
              </div>
            </div>
            
            {/* Member Card 10 - Mauro Peirs */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-80 w-full">
                <Image 
                  src="/images/team/mauro.jpeg" 
                  alt="Mauro Peirs" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-1">Mauro Peirs</h3>
                <p className="text-blue-700 font-medium mb-3">Social Media</p>
                <p className="text-slate-600">
                  At 17, Mauro is the youngest member of Futurist Law Lab. He combines his passion for AI law with his artistic side, finding inspiration in both technology and creative expression. He manages social media, bridging the gap between complex legal discussions and engaging digital storytelling. Believes that the way we communicate ideas is just as important as the ideas themselves.
                </p>
              </div>
            </div>
            
            {/* Member Card 11 - Hanna Schmidt */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-80 w-full">
                <Image 
                  src="/images/team/hanna.jpeg" 
                  alt="Hanna Schmidt" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-1">Hanna Schmidt</h3>
                <p className="text-blue-700 font-medium mb-3">Legal Team</p>
                <p className="text-slate-600">
                  Law major at PPLE College at the University of Amsterdam, graduating in 2027. I am especially interested in the intersection between Law and Economics and the role technology can play in this field. Outside of academics, I enjoy running, cooking and exploring new cafes around Amsterdam.
                </p>
              </div>
            </div>
            

          </div>
          
          {/* Instructions for when all members are displayed */}
          <div className="mt-16 text-center">
            <p className="text-slate-600 italic">
              We are a team of dedicated students committed to exploring the intersection of law and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Research Highlight Section */}
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
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
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
              </div>
              <p className="text-slate-300 mb-4 max-w-md">
                A student initiative based in Amsterdam engaging youth to shape the future of law in the age of technological advancement.
              </p>
              <div className="flex space-x-4">
                <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </a>
                <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-slate-300 hover:text-white transition">About Us</a></li>
                <li><a href="#mission" className="text-slate-300 hover:text-white transition">Our Mission</a></li>
                <li><a href="#activities" className="text-slate-300 hover:text-white transition">Events</a></li>
                <li><Link href="/hackathon" className="text-blue-400 hover:text-blue-300 transition font-medium">Hackathon</Link></li>
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
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Location</p>
                    <p>Amsterdam, The Netherlands</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Futurist Law Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Structured Data for WebPage */}
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Futurist Law Lab - Future-Proofing Legal Frameworks",
            "description": "A student initiative based in Amsterdam engaging youth to shape the future of law in the age of technological advancement.",
            "url": "https://futuristlawlab.com",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Futurist Law Lab",
              "url": "https://futuristlawlab.com"
            },
            "about": {
              "@type": "Thing",
              "name": "Legal innovation and youth engagement in law"
            },
            "keywords": "law, future law, legal innovation, legal tech, youth engagement, Amsterdam, student initiative, EU law"
          })
        }}
      />
      
      {/* FAQ Structured Data */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Futurist Law Lab?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Futurist Law Lab is a student initiative based in Amsterdam that engages youth to shape the future of law in the age of technological advancement."
                }
              },
              {
                "@type": "Question",
                "name": "What is the mission of Futurist Law Lab?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our mission is twofold: 1) Engage youth to future-proof the law, and 2) Show people that law is alive, exciting, and ever-changing."
                }
              },
              {
                "@type": "Question",
                "name": "How can I get involved with Futurist Law Lab?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can get involved by attending our university events, participating in our workshops, or directly contacting us through our website or social media channels."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
