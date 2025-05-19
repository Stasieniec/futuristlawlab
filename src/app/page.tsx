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
              <Link href="#activities" className="text-slate-800 font-medium hover:text-blue-700 transition" aria-label="Discover our activities">Activities</Link>
              <Link href="#join" className="text-slate-800 font-medium hover:text-blue-700 transition" aria-label="Join our initiative">Join Us</Link>
              <Link href="#contact" className="text-slate-800 font-medium hover:text-blue-700 transition" aria-label="Contact us">Contact</Link>
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
              <Link href="#activities" className="text-slate-800 hover:text-blue-700 transition py-2" aria-label="Discover our activities">Activities</Link>
              <Link href="#join" className="text-slate-800 hover:text-blue-700 transition py-2" aria-label="Join our initiative">Join Us</Link>
              <Link href="#contact" className="text-slate-800 hover:text-blue-700 transition py-2" aria-label="Contact us">Contact</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Modern Redesign */}
      <section aria-labelledby="hero-heading" className="relative py-12 md:py-16 lg:py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-slate-50 -z-10"></div>
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-blue-700/5 -z-10 rounded-l-3xl hidden md:block"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full transform translate-x-1/3 -translate-y-1/3 blur-3xl -z-10 hidden md:block"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-900/5 rounded-full transform -translate-x-1/3 translate-y-1/3 blur-3xl -z-10 hidden md:block"></div>
        
        {/* Animated Network Background */}
        <div className="absolute inset-0 -z-5">
          {/* Network Nodes */}
          <div className="absolute h-3 w-3 bg-blue-700/40 rounded-full top-1/4 left-1/5 animate-pulse"></div>
          <div className="absolute h-2 w-2 bg-slate-700/30 rounded-full top-3/5 left-1/3 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute h-4 w-4 bg-blue-600/30 rounded-full top-2/5 left-2/3 animate-pulse" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute h-2 w-2 bg-blue-500/30 rounded-full top-1/6 left-1/2 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute h-3 w-3 bg-slate-600/30 rounded-full top-3/4 left-3/4 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute h-2 w-2 bg-blue-700/30 rounded-full top-2/3 left-1/6 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute h-3 w-3 bg-slate-800/30 rounded-full top-1/3 left-4/5 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute h-4 w-4 bg-blue-800/30 rounded-full top-2/5 left-1/8 animate-pulse" style={{ animationDelay: '1.8s' }}></div>
          <div className="absolute h-2 w-2 bg-blue-600/30 rounded-full top-4/5 left-2/5 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Network Lines */}
          <div className="absolute h-px bg-blue-700/20 w-1/4 top-1/4 left-1/5 transform rotate-12 animate-[pulse_3s_ease-in-out_infinite]"></div>
          <div className="absolute h-px bg-slate-700/20 w-1/3 top-3/5 left-1/3 transform -rotate-12 animate-[pulse_2.5s_ease-in-out_infinite]" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute h-px bg-blue-600/20 w-1/3 top-2/5 left-2/3 transform rotate-45 animate-[pulse_3.5s_ease-in-out_infinite]" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute h-px bg-blue-500/20 w-1/4 top-1/6 left-1/2 transform -rotate-45 animate-[pulse_3s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}></div>
          <div className="absolute h-px bg-slate-600/20 w-1/4 top-3/4 left-3/4 transform rotate-12 animate-[pulse_4s_ease-in-out_infinite]" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute h-px bg-blue-700/20 w-1/3 top-2/3 left-1/6 transform -rotate-20 animate-[pulse_3.2s_ease-in-out_infinite]" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute h-px bg-slate-800/20 w-1/4 top-1/3 left-4/5 transform rotate-30 animate-[pulse_3.8s_ease-in-out_infinite]" style={{ animationDelay: '1.4s' }}></div>
          <div className="absolute h-px bg-blue-800/20 w-1/3 top-2/5 left-1/8 transform -rotate-15 animate-[pulse_2.8s_ease-in-out_infinite]" style={{ animationDelay: '1.7s' }}></div>
          <div className="absolute h-px bg-blue-600/20 w-1/4 top-4/5 left-2/5 transform rotate-10 animate-[pulse_3.3s_ease-in-out_infinite]" style={{ animationDelay: '1.9s' }}></div>
        </div>
        
        {/* Animated Dots (decorative) - hidden on small screens */}
        <div className="absolute inset-0 -z-5 hidden md:block">
          <div className="absolute top-20 right-[20%] w-2 h-2 bg-blue-700 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-[30%] w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-60 right-[15%] w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 left-[60%] w-2 h-2 bg-slate-700 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute bottom-40 left-[75%] w-3 h-3 bg-slate-600 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Content - Large Text and CTA */}
            <div className="w-full md:w-5/12 lg:w-4/12 mb-8 md:mb-0 text-center md:text-left">
              <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-4 md:mb-6 tracking-tight animate-fade-in">
                Future-Proofing <br className="hidden sm:block" />
                <span className="text-blue-700 relative">
                  Legal Frameworks
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-700/30 rounded-full"></span>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-lg mx-auto md:mx-0 animate-fade-in animate-delay-200">
                A student initiative engaging youth to shape the future of law in the age of technological advancement.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in animate-delay-300">
                <Link 
                  href="#mission" 
                  className="btn-primary flex items-center bg-slate-900 hover:bg-slate-800"
                  aria-label="Learn about our mission"
                >
                  <span>Our Mission</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
                <Link 
                  href="#join" 
                  className="btn-secondary border-slate-900 text-slate-900 hover:bg-slate-900/10"
                  aria-label="Get involved with our initiative"
                >
                  Get Involved
                </Link>
              </div>
            </div>
            
            {/* Right side - Neural Network Visualization */}
            <div className="w-full md:w-7/12 lg:w-8/12 md:mt-0 mt-8 flex justify-center items-center">
              <div className="w-full h-[400px] md:h-[450px] lg:h-[500px] relative animate-fade-in animate-delay-300">
                {/* 3D Neural Network Animation - No Container */}
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
      <section id="about" aria-labelledby="about-heading" className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="bg-blue-600/10 py-1.5 px-4 rounded-full text-blue-700 text-sm font-medium inline-block mb-4">
                Who We Are
              </div>
              <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">About Us</h2>
              <div className="space-y-4">
                <p className="text-lg text-slate-700">
                  Futurist Law Lab is a student initiative based in Amsterdam that approaches the intersection of law and emerging technologies primarily from a legal perspective.
                </p>
                <p className="text-lg text-slate-700">
                  We bring together law students, tech enthusiasts, and policymakers to collaborate on forward-thinking approaches to legal challenges posed by technological advancement.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 relative h-80 rounded-2xl overflow-hidden shadow-lg">
              {/* This would be replaced with an actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <Image 
                  src="/window.svg" 
                  alt="Futurist Law Lab Team" 
                  width={120}
                  height={120}
                  className="opacity-30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" aria-labelledby="mission-heading" className="py-20 bg-slate-50 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-900 to-transparent opacity-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-900 to-transparent opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-blue-100 py-1.5 px-4 rounded-full text-blue-700 text-sm font-medium inline-block mb-4">
              Our Purpose
            </div>
            <h2 id="mission-heading" className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Our Mission</h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
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

      {/* Activities Section */}
      <section id="activities" aria-labelledby="activities-heading" className="container mx-auto px-4 py-20 relative">
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-slate-50 to-transparent"></div>
        <div className="text-center mb-16">
          <div className="bg-blue-100 py-1.5 px-4 rounded-full text-blue-700 text-sm font-medium inline-block mb-4">
            What We Do
          </div>
          <h2 id="activities-heading" className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Our Activities</h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Discover how we&apos;re making an impact through various initiatives and events.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <article className="card group">
            <div className="rounded-xl overflow-hidden h-48 mb-6 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative border border-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-transparent"></div>
              <Image 
                src="/file.svg" 
                alt="University Events" 
                width={80}
                height={80}
                className="opacity-60 relative z-10"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">University Events</h3>
            <p className="text-slate-700">
              We organize lectures, panel discussions, and networking events at universities across Europe.
            </p>
          </article>
          
          <article className="card group">
            <div className="rounded-xl overflow-hidden h-48 mb-6 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative border border-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-transparent"></div>
              <Image 
                src="/window.svg" 
                alt="Workshops" 
                width={80}
                height={80}
                className="opacity-60 relative z-10"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Workshops</h3>
            <p className="text-slate-700">
              Our interactive workshops bring together diverse participants to tackle legal challenges posed by emerging technologies.
            </p>
          </article>
          
          <article className="card group">
            <div className="rounded-xl overflow-hidden h-48 mb-6 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative border border-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-transparent"></div>
              <Image 
                src="/layout.svg" 
                alt="Digital Resources" 
                width={80}
                height={80}
                className="opacity-60 relative z-10"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Digital Resources</h3>
            <p className="text-slate-700">
              We create and share accessible resources that explain complex legal-technological concepts to young people.
            </p>
          </article>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" aria-labelledby="join-heading" className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 opacity-40"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700 opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="join-heading" className="text-3xl md:text-4xl font-bold mb-8">Join Our Initiative</h2>
            <p className="text-xl mb-10 text-blue-50">
              We&apos;re looking for passionate young people who want to make a difference in the future of law and technology. If you&apos;re interested in joining us, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:contact@futuristlawlab.com" 
                className="bg-white text-slate-900 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition shadow-lg"
                aria-label="Contact us via email"
              >
                Contact Us
              </a>
              <a 
                href="#" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition"
                aria-label="Learn more about joining our initiative"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" aria-labelledby="contact-heading" className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="bg-blue-100 py-1.5 px-4 rounded-full text-blue-700 text-sm font-medium inline-block mb-4">
                Get In Touch
              </div>
              <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Contact Us</h2>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                Have questions or want to learn more about our initiative? We&apos;d love to hear from you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-8 rounded-xl shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-900/5 rounded-full transform translate-x-16 -translate-y-16"></div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-700 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Email</p>
                      <a href="mailto:contact@futuristlawlab.com" className="text-blue-700 hover:text-blue-800">contact@futuristlawlab.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-700 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Location</p>
                      <p className="text-slate-800">Amsterdam, The Netherlands</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-700 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Follow Us</p>
                      <div className="flex space-x-3 mt-1">
                        <a href="#" aria-label="Twitter" className="text-slate-700 hover:text-blue-700 transition">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                        </a>
                        <a href="#" aria-label="LinkedIn" className="text-slate-700 hover:text-blue-700 transition">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                        </a>
                        <a href="#" aria-label="Instagram" className="text-slate-700 hover:text-blue-700 transition">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-slate-900/5 rounded-full transform translate-x-16 translate-y-16"></div>
                <h3 className="text-xl font-bold mb-6 text-slate-900">Send Us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Your Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-slate-900 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-800 transition shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section id="team" aria-labelledby="team-heading" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="team-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              The passionate students behind Futurist Law Lab working to shape the future of legal frameworks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Member Card 1 - Laura Peirs */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-80 w-full">
                <Image 
                  src="/images/team/laura.jpeg" 
                  alt="Laura Peirs" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-1">Laura Peirs</h3>
                <p className="text-blue-700 font-medium mb-3">Founder, Legal Team</p>
                <p className="text-slate-600">
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
            
            {/* Member Card 4 - Stanislaw Wasilewski */}
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
            
            {/* Member Card 5 - Tadeáš Krejčí */}
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
            
            {/* Member Card 6 - Clara Langenbach */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-80 w-full">
                <Image 
                  src="/images/team/clara.png" 
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
            
            {/* Member Card 7 - Krzysztof Nowak */}
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
            
            {/* Member Card 8 - Mauro Peirs */}
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
            
            {/* Member Card 9 - Julia Lirio */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-80 w-full">
                <Image 
                  src="/images/team/julia.jpg" 
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
          </div>
          
          {/* Instructions for when all members are displayed */}
          <div className="mt-16 text-center">
            <p className="text-slate-600 italic">
              We are a team of dedicated students committed to exploring the intersection of law and technology.
            </p>
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
                <li><a href="#activities" className="text-slate-300 hover:text-white transition">Activities</a></li>
                <li><a href="#join" className="text-slate-300 hover:text-white transition">Join Us</a></li>
                <li><a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a></li>
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
