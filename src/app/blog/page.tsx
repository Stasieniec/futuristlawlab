import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '../data/blog';

export const metadata: Metadata = {
  title: 'Blog | Futurist Law Lab',
  description: 'Personal insights, thoughts, and reflections from our team members exploring law and technology.',
  keywords: ['legal tech blog', 'law student insights', 'personal reflections', 'team thoughts', 'legal innovation commentary'],
};

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

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
              <Link href="/blog" className="text-blue-700 font-medium hover:text-blue-800 transition">Blog</Link>
              <Link href="/publications" className="text-slate-800 font-medium hover:text-blue-700 transition">Publications</Link>
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
              <Link href="/blog" className="text-blue-700 hover:text-blue-800 transition py-2">Blog</Link>
              <Link href="/publications" className="text-slate-800 hover:text-blue-700 transition py-2">Publications</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-blue-100 py-2 px-4 rounded-full text-blue-700 text-sm font-medium inline-block mb-6">
              Personal Insights
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Thoughts from{' '}
              <span className="text-blue-700 relative inline-block">
                Our Team
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-700/30 rounded-full"></span>
              </span>
            </h1>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Personal reflections, insights, and thoughts from our team members 
              as we explore the evolving landscape of law and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      {blogPosts.length === 0 ? (
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-24 mx-auto mb-8 bg-slate-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Coming Soon</h2>
              <p className="text-slate-700 mb-8 leading-relaxed">
                Our team is preparing to share their personal thoughts and experiences. 
                Stay tuned for informal insights, reflections, and behind-the-scenes stories 
                from our journey exploring law and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/publications"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  View Publications
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
                <Link 
                  href="/#team"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-900 text-slate-900 font-medium rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-200"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // This section will be used when blog posts are added
        <div>
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="py-12 sm:py-16 lg:py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Featured Posts</h2>
                  <p className="text-slate-700">Personal highlights from our team members</p>
                </div>
                {/* Featured posts grid will go here */}
              </div>
            </section>
          )}

          {/* All Posts */}
          {otherPosts.length > 0 && (
            <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">All Posts</h2>
                  <p className="text-slate-700">Browse all thoughts and reflections from our team</p>
                </div>
                {/* All posts grid will go here */}
              </div>
            </section>
          )}
        </div>
      )}

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