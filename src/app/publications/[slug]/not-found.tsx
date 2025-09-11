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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Article Not Found</h1>
            <p className="text-lg text-slate-700 mb-8">
              Sorry, we couldn&apos;t find the research article you&apos;re looking for. 
              It might have been moved, renamed, or doesn&apos;t exist yet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Browse All Articles
              </Link>
              <Link 
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-900 text-slate-900 font-medium rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-200"
              >
                Return Home
              </Link>
            </div>
            
            {/* Suggest Available Articles */}
            <div className="mt-12 p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Available Articles</h3>
              <div className="space-y-3">
                <Link 
                  href="/blog/smart-contracts-legislation-impact"
                  className="block text-blue-700 hover:text-blue-800 font-medium transition"
                >
                  → Is Law the Solution? Examining Legislative Impact on Smart Contract Adoption
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
