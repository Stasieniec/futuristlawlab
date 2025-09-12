import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { publications } from '../data/publications';

export const metadata: Metadata = {
  title: 'Publications | Futurist Law Lab - Research & Theses',
  description: 'Academic publications and bachelor theses from our members examining the intersection of law and technology.',
  keywords: ['legal research', 'bachelor thesis', 'smart contracts', 'AI law', 'technology regulation', 'legal innovation', 'academic publications'],
};

export default function PublicationsPage() {
  const allPublications = publications;

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
              <Link href="/publications" className="text-blue-700 font-medium hover:text-blue-800 transition">Publications</Link>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button p-2 focus:outline-none" aria-label="Toggle menu">
                <svg className="w-6 h-6 text-slate-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </nav>
          
          {/* Mobile Menu */}
          <div className="mobile-menu hidden md:hidden">
            <div className="flex flex-col space-y-4 pt-4 pb-3 px-4">
              <Link href="/#about" className="text-slate-800 hover:text-blue-700 transition py-2">About</Link>
              <Link href="/#mission" className="text-slate-800 hover:text-blue-700 transition py-2">Our Mission</Link>
              <Link href="/#activities" className="text-slate-800 hover:text-blue-700 transition py-2">Events</Link>
              <Link href="/blog" className="text-slate-800 hover:text-blue-700 transition py-2">Blog</Link>
              <Link href="/publications" className="text-blue-700 hover:text-blue-800 transition py-2">Publications</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-blue-100 py-2 px-4 rounded-full text-blue-700 text-sm font-medium inline-block mb-6">
              Academic Publications
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Academic{' '}
              <span className="text-blue-700 relative inline-block">
                Research
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-700/30 rounded-full"></span>
              </span>
            </h1>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Academic publications and bachelor theses from our members examining 
              the intersection of law and technology. From smart contracts to AI regulation, 
              our research contributes to scholarly discourse on the future of legal frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Publications</h2>
            <p className="text-slate-700">Academic work from our team members</p>
          </div>
          
          <div className="space-y-8">
            {allPublications.map((publication) => (
              <article key={publication.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-100">
                <div className="lg:flex">
                  <div className="lg:w-2/3 p-6 sm:p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                        {publication.category}
                      </span>
                      <time className="text-slate-500 text-sm" dateTime={publication.publishedDate}>
                        {new Date(publication.publishedDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </time>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                      <Link href={`/publications/${publication.slug}`} className="hover:text-blue-700 transition">
                        {publication.title}
                      </Link>
                    </h3>
                    
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center mr-4 overflow-hidden">
                        {publication.authorPhoto ? (
                          <Image
                            src={publication.authorPhoto}
                            alt={publication.author}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-slate-600 font-medium text-lg">
                            {publication.author.split(' ').map(name => name[0]).join('')}
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{publication.author}</p>
                        <p className="text-sm text-slate-600">Author</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      {publication.description.split('\n')[0]}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {publication.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm">
                          {tag}
                        </span>
                      ))}
                      {publication.tags.length > 4 && (
                        <span className="text-slate-500 text-sm">+{publication.tags.length - 4} more</span>
                      )}
                    </div>
                    
                    <Link 
                      href={`/publications/${publication.slug}`}
                      className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition"
                    >
                      Read full publication
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                  
                  <div className="lg:w-1/3 bg-gradient-to-br from-blue-50 to-slate-50 p-6 sm:p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-blue-700 rounded-2xl flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                      </div>
                      <p className="text-slate-600 font-medium">Bachelor Thesis</p>
                      <p className="text-sm text-slate-500 mt-2">PDF Available</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
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
              <p className="text-slate-300">contact@futuristlawlab.com</p>
              <p className="text-slate-300">Amsterdam, The Netherlands</p>
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