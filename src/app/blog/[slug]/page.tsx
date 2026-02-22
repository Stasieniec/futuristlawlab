import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, blogPosts } from '../../data/blog';
import BlogActions from './BlogActions';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | Futurist Law Lab',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | Futurist Law Lab Blog`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author],
      tags: post.tags,
      images: post.imageUrl ? [post.imageUrl] : undefined,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Split content into paragraphs for better formatting
  const contentParagraphs = post.content.split('\n\n').filter(p => p.trim());

  return (
    <div className="min-h-screen bg-white">
      <Header variant="main" activePath="/blog" />

      {/* Breadcrumb */}
      <nav className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-700 transition">Home</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <Link href="/blog" className="hover:text-blue-700 transition">Blog</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span className="text-slate-900">{post.title}</span>
          </div>
        </div>
      </nav>

      <main className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <article className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-8 sm:mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                  {post.category}
                </span>
                <time className="text-slate-500 text-sm" dateTime={post.publishedDate}>
                  {new Date(post.publishedDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              {/* Author Info */}
              <div className="bg-slate-50 rounded-xl p-6 mb-8">
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center mr-4 flex-shrink-0 overflow-hidden">
                    {post.authorPhoto ? (
                      <Image
                        src={post.authorPhoto}
                        alt={post.author}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-slate-600 font-medium text-xl">
                        {post.author.split(' ').map(name => name[0]).join('')}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{post.author}</h3>
                    {post.authorBio && (
                      <p className="text-slate-700 leading-relaxed">{post.authorBio}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Featured Image */}
            {post.imageUrl && (
              <div className="mb-8 sm:mb-12">
                <div className="relative w-full h-64 sm:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg prose-slate max-w-none">
              {contentParagraphs.map((paragraph, index) => (
                <p key={index} className="text-slate-700 mb-6 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Navigation and Sharing */}
            <footer className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link 
                  href="/blog"
                  className="inline-flex items-center text-slate-600 hover:text-blue-700 transition"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  Back to Blog
                </Link>
                
                <BlogActions 
                  title={post.title}
                  excerpt={post.excerpt}
                />
              </div>
            </footer>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}