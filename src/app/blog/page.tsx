import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '../data/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog | Futurist Law Lab',
  description: 'Personal insights, thoughts, and reflections from our team members exploring law and technology.',
  keywords: ['legal tech blog', 'law student insights', 'personal reflections', 'team thoughts', 'legal innovation commentary'],
};

export default function BlogPage() {
  const allPosts = blogPosts;

  return (
    <div className="min-h-screen bg-white">
      <Header variant="main" activePath="/blog" />

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

      {/* All Posts */}
      {allPosts.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">All Posts</h2>
              <p className="text-slate-700">Browse all thoughts and reflections from our team</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {allPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 group">
                  {post.imageUrl && (
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {post.category}
                    </span>
                    <time className="text-slate-500 text-sm" dateTime={post.publishedDate}>
                      {new Date(post.publishedDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short'
                      })}
                    </time>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-700 transition">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-slate-600 font-medium mb-3">{post.author}</p>
                  
                  <p className="text-slate-700 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition text-sm"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}