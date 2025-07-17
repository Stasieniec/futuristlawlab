import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// This would typically come from a CMS or markdown files
const blogPosts = {
  'digital-rights-in-the-age-of-ai': {
    id: 'digital-rights-in-the-age-of-ai',
    title: 'Digital Rights in the Age of AI: Protecting Privacy and Autonomy',
    excerpt: 'As AI systems become more prevalent, how do we ensure fundamental digital rights are protected? Exploring the intersection of AI and human rights.',
    date: '2024-01-20',
    author: 'Laura Peirs',
    image: '/images/blog/digital-rights-ai.jpg',
    readTime: '7 min read',
    category: 'Digital Rights',
    content: `
      <p>As artificial intelligence becomes increasingly integrated into our daily lives, the protection of fundamental digital rights has never been more critical. From algorithmic decision-making in hiring processes to AI-powered surveillance systems, the intersection of AI and human rights presents both unprecedented opportunities and significant challenges.</p>
      
      <h2>The Current Digital Rights Landscape</h2>
      <p>Digital rights encompass a broad range of human rights as they apply to the digital sphere, including privacy, freedom of expression, access to information, and non-discrimination. These rights are not new concepts, but their application in the context of AI systems requires careful consideration and often new regulatory approaches.</p>
      
      <h3>Privacy in the Age of AI</h3>
      <p>AI systems often require vast amounts of data to function effectively, creating tension between innovation and privacy protection. The challenge lies in developing AI systems that can deliver their promised benefits while respecting individual privacy rights and maintaining user control over personal data.</p>
      
      <h2>Key Challenges</h2>
      
      <h3>1. Algorithmic Transparency</h3>
      <p>Many AI systems operate as "black boxes," making decisions through processes that are difficult or impossible to understand. This lack of transparency can undermine accountability and make it challenging for individuals to challenge automated decisions that affect them.</p>
      
      <h3>2. Bias and Discrimination</h3>
      <p>AI systems can perpetuate or amplify existing biases present in their training data or design. This can lead to discriminatory outcomes in critical areas such as employment, lending, and criminal justice, potentially violating principles of equality and non-discrimination.</p>
      
      <h3>3. Consent and Control</h3>
      <p>Traditional concepts of informed consent become complex in AI contexts. How can individuals meaningfully consent to data processing when they cannot fully understand how their data will be used in AI systems or what inferences might be drawn from it?</p>
      
      <h2>Regulatory Responses</h2>
      
      <h3>The EU AI Act Approach</h3>
      <p>The European Union's AI Act represents a comprehensive attempt to address these challenges through a risk-based regulatory framework. It includes specific provisions for high-risk AI systems, prohibited practices, and transparency requirements that aim to protect fundamental rights while enabling innovation.</p>
      
      <h3>GDPR and AI</h3>
      <p>The General Data Protection Regulation (GDPR) already provides some protection for individuals in AI contexts, including rights to explanation for automated decision-making and data portability. However, the application of GDPR to AI systems continues to evolve through case law and regulatory guidance.</p>
      
      <h2>The Role of Youth in Digital Rights Advocacy</h2>
      <p>Young people, as digital natives, have a unique perspective on digital rights and AI governance. They understand intuitively how these systems work and can identify potential rights violations that might not be apparent to older generations. Their engagement is crucial for developing rights-protective AI governance frameworks.</p>
      
      <h3>Practical Steps for Protection</h3>
      <ul>
        <li><strong>Education and Awareness:</strong> Understanding your digital rights and how AI systems affect them</li>
        <li><strong>Advocacy:</strong> Participating in policy discussions and supporting rights-protective legislation</li>
        <li><strong>Technical Literacy:</strong> Developing understanding of how AI systems work and their potential impacts</li>
        <li><strong>Community Engagement:</strong> Building coalitions to advocate for stronger digital rights protections</li>
      </ul>
      
      <h2>Looking Forward</h2>
      <p>The protection of digital rights in the age of AI requires ongoing vigilance and adaptation. As AI technologies continue to evolve, so too must our approaches to rights protection. This includes developing new legal frameworks, technical standards, and governance mechanisms that can keep pace with technological change.</p>
      
      <p>At Futurist Law Lab, we believe that engaging young people in these discussions is essential. The digital rights frameworks we develop today will shape the technological landscape that the next generation inherits. By ensuring that youth voices are heard in these critical conversations, we can build a future where AI serves humanity while respecting fundamental rights.</p>
      
      <h2>Conclusion</h2>
      <p>The intersection of AI and digital rights presents both challenges and opportunities. While AI systems can potentially enhance human capabilities and improve quality of life, they must be developed and deployed in ways that respect fundamental rights and human dignity. This requires ongoing dialogue between technologists, policymakers, civil society, and especially young people who will be most affected by these technologies.</p>
      
      <p>The future of digital rights in the age of AI depends on our collective commitment to ensuring that technological progress serves human flourishing while protecting the values and rights that define our democratic societies.</p>
    `
  },
  'future-of-ai-regulation': {
    id: 'future-of-ai-regulation',
    title: 'The Future of AI Regulation: What the EU AI Act Means for Innovation',
    excerpt: 'Exploring how the EU AI Act will shape the future of artificial intelligence development and deployment across Europe.',
    date: '2024-01-15',
    author: 'Laura Peirs',
    image: '/images/blog/ai-regulation.jpg',
    readTime: '8 min read',
    category: 'AI Regulation',
    content: `
      <p>The European Union's Artificial Intelligence Act represents a landmark moment in the regulation of AI technologies. As the world's first comprehensive AI regulation, it sets a precedent that will likely influence global approaches to AI governance.</p>
      
      <h2>Understanding the EU AI Act</h2>
      <p>The AI Act takes a risk-based approach to AI regulation, categorizing AI systems into four risk levels: minimal, limited, high, and unacceptable risk. This nuanced framework recognizes that not all AI applications pose the same level of threat to fundamental rights and safety.</p>
      
      <h3>Key Provisions</h3>
      <ul>
        <li><strong>Prohibited AI practices:</strong> Systems that pose unacceptable risks, such as social scoring systems and real-time biometric identification in public spaces</li>
        <li><strong>High-risk AI systems:</strong> Strict requirements for risk assessment, data governance, and human oversight</li>
        <li><strong>Foundation models:</strong> Special obligations for providers of general-purpose AI models</li>
        <li><strong>Transparency requirements:</strong> Users must be informed when interacting with AI systems</li>
      </ul>
      
      <h2>Impact on Innovation</h2>
      <p>While some critics argue that the AI Act could stifle innovation, proponents contend that clear regulations actually foster innovation by providing certainty and building public trust in AI technologies.</p>
      
      <p>The Act includes provisions for regulatory sandboxes, allowing companies to test innovative AI systems under relaxed regulatory conditions. This approach balances the need for innovation with the imperative to protect fundamental rights.</p>
      
      <h2>Global Implications</h2>
      <p>The EU AI Act is likely to have extraterritorial effects, similar to the GDPR. Companies worldwide that want to operate in the EU market will need to comply with these regulations, potentially leading to a global standardization of AI governance practices.</p>
      
      <h2>What's Next?</h2>
      <p>As the AI Act comes into force, businesses, researchers, and policymakers must prepare for a new era of AI governance. This includes developing compliance frameworks, investing in AI safety research, and fostering dialogue between technologists and regulators.</p>
      
      <p>At Futurist Law Lab, we believe that engaging young people in these discussions is crucial. The next generation will inherit the AI systems we build today, and their voices must be heard in shaping the regulatory frameworks that govern them.</p>
    `
  },
  'youth-engagement-legal-frameworks': {
    id: 'youth-engagement-legal-frameworks',
    title: 'Why Youth Engagement is Critical for Future Legal Frameworks',
    excerpt: 'Young people have a unique perspective on technology and its implications. Here\'s why their voice matters in legal discussions.',
    date: '2024-01-10',
    author: 'Futurist Law Lab Team',
    image: '/images/blog/youth-engagement.jpg',
    readTime: '6 min read',
    category: 'Youth Engagement',
    content: `
      <p>The legal frameworks that govern our digital future are being shaped today, yet the voices of young people—those who will be most affected by these decisions—are often absent from the conversation. This is not just a missed opportunity; it's a fundamental flaw in how we approach legal innovation.</p>
      
      <h2>The Digital Native Advantage</h2>
      <p>Young people today are digital natives who have grown up with technology as an integral part of their lives. They understand intuitively how digital systems work, what their limitations are, and how they can be misused. This perspective is invaluable when crafting regulations that need to be both effective and practical.</p>
      
      <h3>Unique Perspectives on Privacy</h3>
      <p>Consider privacy regulations like GDPR. While older generations might focus on traditional notions of privacy, young people understand the nuanced ways in which data is collected, shared, and monetized in the digital ecosystem. They can identify blind spots that might not be apparent to regulators who didn't grow up with social media and smartphones.</p>
      
      <h2>The Innovation Imperative</h2>
      <p>Legal frameworks need to balance protection with innovation. Young people, who are often at the forefront of technological adoption and creation, can provide insights into how regulations might inadvertently stifle beneficial innovations or fail to address emerging risks.</p>
      
      <h3>Case Study: AI in Education</h3>
      <p>When regulators discuss AI in education, they often focus on academic integrity and data protection. Students, however, can provide insights into how AI tools actually enhance learning, where they fall short, and what safeguards would be most effective without hindering educational benefits.</p>
      
      <h2>Building Inclusive Legal Processes</h2>
      <p>Engaging youth in legal discussions isn't just about gathering input—it's about building more inclusive and democratic legal processes. When young people participate in shaping the laws that will govern their future, they develop a deeper understanding of legal systems and are more likely to engage with them constructively.</p>
      
      <h2>Practical Steps for Engagement</h2>
      <ul>
        <li><strong>University partnerships:</strong> Collaborate with law schools and technology programs to bring student perspectives into policy discussions</li>
        <li><strong>Youth advisory panels:</strong> Establish formal mechanisms for young people to contribute to regulatory processes</li>
        <li><strong>Accessible communication:</strong> Present legal concepts in ways that are understandable and relevant to young audiences</li>
        <li><strong>Digital platforms:</strong> Use technology to facilitate youth participation in legal discussions</li>
      </ul>
      
      <h2>The Path Forward</h2>
      <p>At Futurist Law Lab, we're committed to bridging this gap. Through our workshops, events, and advocacy work, we're creating spaces where young voices can be heard in legal discussions. We believe that the future of law must be shaped by those who will live with its consequences.</p>
      
      <p>The legal frameworks of tomorrow need the wisdom of today's youth. By engaging young people in these crucial conversations, we can build a legal system that is not only more effective but also more legitimate and democratic.</p>
    `
  },
  'eu-parliament-workshop-insights': {
    id: 'eu-parliament-workshop-insights',
    title: 'Key Insights from Our European Parliament Workshop',
    excerpt: 'Reflections and key takeaways from our recent workshop at the European Parliament during the European Youth Event.',
    date: '2024-01-05',
    author: 'Laura Peirs',
    image: '/images/blog/eu-parliament.jpg',
    readTime: '10 min read',
    category: 'Events',
    content: `
      <p>Our recent workshop at the European Parliament during the European Youth Event was an incredible experience that reinforced our belief in the power of youth engagement in shaping legal frameworks. Here are the key insights and takeaways from this transformative event.</p>
      
      <h2>The Setting: European Parliament in Strasbourg</h2>
      <p>Being in the heart of European democracy, surrounded by the institutions that shape EU law, provided a unique backdrop for our discussions. The participants—young people from across Europe—brought diverse perspectives on how AI regulation affects their daily lives and future aspirations.</p>
      
      <h3>Workshop Structure</h3>
      <p>Our workshop was designed to be interactive and engaging, moving beyond traditional lecture formats to foster genuine dialogue and collaborative problem-solving. We used case studies, role-playing exercises, and small group discussions to explore complex legal concepts.</p>
      
      <h2>Key Insights from Participants</h2>
      
      <h3>1. The Implementation Gap</h3>
      <p>One of the most striking insights was the gap between legal frameworks on paper and their practical implementation. Participants highlighted how regulations like GDPR, while well-intentioned, often result in meaningless cookie banners and checkbox exercises rather than meaningful privacy protection.</p>
      
      <h3>2. Cross-Border Challenges</h3>
      <p>Young people from different EU member states shared their experiences with how the same EU regulations are implemented differently across borders. This highlighted the need for more harmonized approaches to legal implementation.</p>
      
      <h3>3. The Speed of Innovation vs. Regulation</h3>
      <p>Participants were acutely aware of the tension between the rapid pace of technological development and the necessarily deliberate pace of legal development. They proposed innovative solutions like regulatory sandboxes and adaptive legal frameworks.</p>
      
      <h2>Specific Discussions on AI Regulation</h2>
      
      <h3>Biometric Identification in Public Spaces</h3>
      <p>The discussion on biometric identification sparked intense debate. While most participants supported restrictions on real-time biometric identification, they also recognized legitimate use cases for security and public safety. The nuanced approach of the AI Act, with its exceptions for specific circumstances, was appreciated.</p>
      
      <h3>AI in Education and Employment</h3>
      <p>Participants shared personal experiences with AI tools in education and expressed concerns about AI bias in hiring processes. They emphasized the need for transparency and human oversight in high-stakes AI applications.</p>
      
      <h2>Collaborative Solutions</h2>
      
      <h3>Youth Advisory Mechanisms</h3>
      <p>One of the most concrete outcomes was a proposal for formal youth advisory mechanisms in EU institutions. Participants outlined how such mechanisms could provide ongoing input on technology policy while ensuring diverse representation.</p>
      
      <h3>Digital Literacy and Legal Education</h3>
      <p>The workshop highlighted the need for better digital literacy and legal education. Participants proposed innovative approaches to teaching legal concepts through technology and real-world applications.</p>
      
      <h2>Challenges and Limitations</h2>
      
      <h3>Representation and Access</h3>
      <p>We acknowledged that even within our diverse group, certain voices were underrepresented. This reinforced the importance of actively seeking out and including marginalized perspectives in legal discussions.</p>
      
      <h3>Technical Complexity</h3>
      <p>Some participants struggled with the technical aspects of AI regulation, highlighting the need for better resources and education to help young people engage meaningfully with complex legal-technical issues.</p>
      
      <h2>Looking Forward: Action Items</h2>
      
      <h3>Continued Engagement</h3>
      <p>The workshop was just the beginning. Participants committed to continuing the conversation through online platforms and local initiatives in their home countries.</p>
      
      <h3>Policy Recommendations</h3>
      <p>We're compiling the insights from the workshop into concrete policy recommendations that will be shared with EU institutions and member state governments.</p>
      
      <h3>Network Building</h3>
      <p>Perhaps most importantly, the workshop created a network of young legal innovators who will continue to collaborate on future-proofing legal frameworks.</p>
      
      <h2>Conclusion</h2>
      <p>The European Parliament workshop confirmed our belief that young people have crucial insights to offer on legal innovation. Their perspectives on technology, implementation challenges, and democratic participation are essential for creating legal frameworks that are both effective and legitimate.</p>
      
      <p>As we continue our work at Futurist Law Lab, we're committed to creating more opportunities for youth engagement in legal discussions. The future of law depends on the voices of those who will inherit it.</p>
    `
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: 'Post Not Found | Futurist Law Lab',
    };
  }

  return {
    title: `${post.title} | Futurist Law Lab`,
    description: post.excerpt,
    keywords: ['blog', 'legal innovation', 'law blog', 'technology law', 'youth engagement', 'EU law', 'legal tech', post.category.toLowerCase()],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

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
              <Link href="/blog" className="text-slate-800 font-medium hover:text-blue-700 transition">Blog</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Article Header */}
      <article className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-slate-500">
                <li><Link href="/" className="hover:text-blue-700">Home</Link></li>
                <li>/</li>
                <li><Link href="/blog" className="hover:text-blue-700">Blog</Link></li>
                <li>/</li>
                <li className="text-slate-900">{post.title}</li>
              </ol>
            </nav>

            {/* Category and Meta */}
            <div className="mb-6">
              <span className="inline-block bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              <div className="flex items-center text-sm text-slate-500 mb-6">
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
                <span className="mx-2">•</span>
                <span>By {post.author}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Featured Image */}
            <div className="relative h-64 sm:h-80 lg:h-96 mb-12 rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src={post.image} 
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg prose-slate max-w-none
                prose-headings:text-slate-900 prose-headings:font-bold
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline
                prose-ul:text-slate-700 prose-li:mb-2
                prose-strong:text-slate-900"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Bio */}
            <div className="mt-16 p-6 bg-slate-50 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{post.author}</h3>
                  <p className="text-slate-600">Futurist Law Lab</p>
                </div>
              </div>
              <p className="text-slate-700">
                {post.author === 'Laura Peirs' 
                  ? 'Founder of Futurist Law Lab and PPLE student at the University of Amsterdam, majoring in law. Passionate about interdisciplinary approaches to complex societal challenges.'
                  : 'The team at Futurist Law Lab is dedicated to engaging youth in shaping the future of legal frameworks through innovative approaches and collaborative discussions.'
                }
              </p>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </article>

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