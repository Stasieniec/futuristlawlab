import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPublicationBySlug, publications } from '../../data/publications';
import ArticleActions from './ArticleActions';

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const publication = getPublicationBySlug(slug);

  if (!publication) {
    return {
      title: 'Publication Not Found | Futurist Law Lab',
      description: 'The requested publication could not be found.',
    };
  }

  return {
    title: `${publication.title} | Futurist Law Lab`,
    description: publication.description.split('\n')[0].substring(0, 160) + '...',
    keywords: publication.tags,
    authors: [{ name: publication.author }],
    openGraph: {
      title: publication.title,
      description: publication.description.split('\n')[0].substring(0, 160) + '...',
      type: 'article',
      publishedTime: publication.publishedDate,
      authors: [publication.author],
      tags: publication.tags,
    },
  };
}

export async function generateStaticParams() {
  return publications.map((publication) => ({
    slug: publication.slug,
  }));
}

export default async function PublicationPage({ params }: { params: Params }) {
  const { slug } = await params;
  const publication = getPublicationBySlug(slug);

  if (!publication) {
    notFound();
  }

  // Split description into paragraphs for better formatting
  const descriptionParagraphs = publication.description.split('\n\n').filter(p => p.trim());

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
              <Link href="/publications" className="text-slate-800 font-medium hover:text-blue-700 transition">Blog</Link>
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
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-700 transition">Home</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <Link href="/publications" className="hover:text-blue-700 transition">Publications</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span className="text-slate-900">{publication.title}</span>
          </div>
        </div>
      </nav>

      <main className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                {publication.category}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {publication.title}
            </h1>
            
            {/* Author Info */}
            <div className="bg-slate-50 rounded-xl p-6 mb-8">
              <div className="flex items-start">
                <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center mr-4 flex-shrink-0 overflow-hidden">
                  {publication.authorPhoto ? (
                    <Image
                      src={publication.authorPhoto}
                      alt={publication.author}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-slate-600 font-medium text-xl">
                      {publication.author.split(' ').map(name => name[0]).join('')}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{publication.author}</h3>
                  {publication.authorBio && (
                    <p className="text-slate-700 leading-relaxed">{publication.authorBio}</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {publication.tags.map((tag) => (
                <span key={tag} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 space-y-8 lg:space-y-0">
              {/* Article Content */}
              <div className="lg:order-2">
                <div className="prose prose-lg prose-slate max-w-none">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Description</h2>
                  {descriptionParagraphs.map((paragraph, index) => (
                    <p key={index} className="text-slate-700 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {/* Download Button */}
                <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Full Article</h3>
                      <p className="text-slate-600">Download the complete thesis as PDF</p>
                    </div>
                    <a
                      href={publication.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="lg:order-1">
                <div className="sticky top-24">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Preview</h3>
                  <div className="bg-slate-100 rounded-xl overflow-hidden shadow-sm">
                    <iframe
                      src={`${publication.pdfUrl}#view=FitH`}
                      className="w-full h-96 sm:h-[600px] lg:h-[700px]"
                      title={`Preview of ${publication.title}`}
                    />
                  </div>
                  <p className="text-sm text-slate-600 mt-3 text-center">
                    PDF preview • <a href={publication.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">Open in new tab</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link 
                href="/publications"
                className="inline-flex items-center text-slate-600 hover:text-blue-700 transition"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to Publications
              </Link>
              
              <ArticleActions 
                title={publication.title}
                description={publication.description.split('\n')[0]}
              />
            </div>
          </div>
        </div>
      </main>

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
                <li><Link href="/publications" className="text-slate-300 hover:text-white transition">Blog</Link></li>
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
