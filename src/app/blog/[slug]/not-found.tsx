import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
            
            <div className="hidden md:flex space-x-8">
              <Link href="/#about" className="text-slate-800 font-medium hover:text-blue-700 transition">About</Link>
              <Link href="/#mission" className="text-slate-800 font-medium hover:text-blue-700 transition">Our Mission</Link>
              <Link href="/#activities" className="text-slate-800 font-medium hover:text-blue-700 transition">Events</Link>
              <Link href="/blog" className="text-blue-700 font-medium hover:text-blue-800 transition">Blog</Link>
              <Link href="/publications" className="text-slate-800 font-medium hover:text-blue-700 transition">Publications</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* 404 Content */}
      <main className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            {/* 404 Icon */}
            <div className="w-32 h-32 mx-auto mb-8 bg-slate-100 rounded-full flex items-center justify-center">
              <svg className="w-16 h-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Blog Post Not Found</h1>
            <p className="text-lg text-slate-700 mb-8">
              Sorry, we couldn&apos;t find the blog post you&apos;re looking for. 
              It might have been moved, renamed, or doesn&apos;t exist yet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                Browse All Posts
              </Link>
              <Link 
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-900 text-slate-900 font-medium rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-200"
              >
                Return Home
              </Link>
            </div>
            
            {/* Suggest Available Posts */}
            <div className="mt-12 p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Available Posts</h3>
              <div className="space-y-3">
                <Link 
                  href="/blog/introducing-eu-ai-act-first-workshop"
                  className="block text-blue-700 hover:text-blue-800 font-medium transition"
                >
                  → Introducing the EU AI Act: The First Futurist Law Lab is Here!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}