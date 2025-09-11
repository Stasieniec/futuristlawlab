export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  authorBio?: string;
  authorPhoto?: string;
  excerpt: string;
  content: string;
  publishedDate: string;
  category: 'news' | 'insights' | 'events' | 'opinion';
  tags: string[];
  featured?: boolean;
  imageUrl?: string;
}

export const blogPosts: BlogPost[] = [
  // Blog posts will be added here in the future
  // Example structure:
  // {
  //   id: '1',
  //   slug: 'welcome-to-futurist-law-lab',
  //   title: 'Welcome to Futurist Law Lab',
  //   author: 'Laura Peirs',
  //   authorBio: 'Founder of Futurist Law Lab...',
  //   authorPhoto: '/images/team/laura.jpeg',
  //   excerpt: 'Introducing our mission to bridge law and technology...',
  //   content: 'Full blog post content here...',
  //   publishedDate: '2025-01-10',
  //   category: 'news',
  //   tags: ['Announcement', 'Mission'],
  //   featured: true,
  //   imageUrl: '/images/blog/welcome.jpg'
  // }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getBlogPostsByCategory(category: BlogPost['category']): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}
