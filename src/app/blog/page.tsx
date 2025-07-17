import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Futurist Law Lab',
  description: 'Latest insights, updates, and thoughts from Futurist Law Lab on legal innovation, technology, and youth engagement in law.',
  keywords: ['blog', 'legal innovation', 'law blog', 'technology law', 'youth engagement', 'EU law', 'legal tech'],
};

// This would typically come from a CMS or markdown files
const blogPosts = [
  {
    id: 'digital-rights-in-the-age-of-ai',
    title: 'Digital Rights in the Age of AI: Protecting Privacy and Autonomy',
    excerpt: 'As AI systems become more prevalent, how do we ensure fundamental digital rights are protected? Exploring the intersection of AI and human rights.',
    date: '2024-01-20',
    author: 'Laura Peirs',
    image: '/images/blog/digital-rights-ai.jpg',
    readTime: '7 min read',
    category: 'Digital Rights'
  },
  {
    id: 'future-of-ai-regulation',
    title: 'The Future of AI Regulation: What the EU AI Act Means for Innovation',
    excerpt: 'Exploring how the EU AI Act will shape the future of artificial intelligence development and deployment across Europe.',
    date: '2024-01-15',
    author: 'Laura Peirs',
    image: '/images/blog/ai-regulation.jpg',
    readTime: '8 min read',
    category: 'AI Regulation'
  },
  {
    id: 'youth-engagement-legal-frameworks',
    title: 'Why Youth Engagement is Critical for Future Legal Frameworks',
    excerpt: 'Young people have a unique perspective on technology and its implications. Here\'s why their voice matters in legal discussions.',
    date: '2024-01-10',
    author: 'Futurist Law Lab Team',
    image: '/images/blog/youth-engagement.jpg',
    readTime: '6 min read',
    category: 'Youth Engagement'
  },
  {
    id: 'eu-parliament-workshop-insights',
    title: 'Key Insights from Our European Parliament Workshop',
    excerpt: 'Reflections and key takeaways from our recent workshop at the European Parliament during the European Youth Event.',
    date: '2024-01-05',
    author: 'Laura Peirs',
    image: '/images/blog/eu-parliament.jpg',
    readTime: '10 min read',
    category: 'Events'
  }
];

export default function BlogPage() {
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
            
            <div className="flex space-x-8">
              <Link href="/" className="text-slate-800 font-medium hover:text-blue-700 transition">Home</Link>
              <Link href="/blog" className="text-blue-700 font-medium">Blog</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Insights & Updates
            </h1>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              Latest thoughts on legal innovation, technology, and the future of law from the Futurist Law Lab team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-slate-500 mb-3">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">By {post.author}</span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-blue-700 font-medium hover:text-blue-800 transition text-sm"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-10 h-10 relative mr-3">
                <Image 
                  src="/images/logo.jpeg" 
                  alt="Futurist Law Lab Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="font-bold text-2xl">Futurist Law Lab</div>
            </div>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Engaging youth to shape the future of law in the age of technological advancement.
            </p>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Futurist Law Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}