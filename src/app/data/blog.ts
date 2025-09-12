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
  {
    id: '1',
    slug: 'introducing-eu-ai-act-first-workshop',
    title: 'Introducing the EU AI Act: The First Futurist Law Lab is Here!',
    author: 'The Futurist Law Lab Team',
    authorBio: 'A collaborative post from our team members who hosted the workshop: Laura, Šárka, Kate, Matthew, and Stas.',
    excerpt: 'Our first workshop at the University of Amsterdam was a huge success! Read about our experience introducing the EU AI Act to an engaged group of students.',
    content: `On the 14th of May, members of the Futurist Law Lab team, Laura, Šárka, Kate, Matthew, and Stas, hosted a workshop on the EU Artificial Intelligence Act ("EU AI Act") at the University of Amsterdam ("UvA"). Having spent several months developing the project, this was our first opportunity to share it with a wider audience, and formed part of our ongoing preparations for our upcoming workshop at the European Youth Event in Strasbourg.

The workshop brought together an engaged group of participants, all with varied academic interests in politics, psychology economics and law, and all keen to explore the legal and ethical implications of AI in Europe. The session was designed to be accessible and engaging, ensuring that everyone, regardless of their familiarity with AI or EU legislation, were encouraged to critically engage with the EU AI Act.

After an overview of key AI concepts, the session moved to the EU AI Act's risk based categories, before providing an in-depth analysis of 'high risk' AI. Once this foundation was provided, participants engaged in our interactive 'Stakeholder Game". Each were given roles ranging from a teen EU citizen, generative AI start-up to a law enforcement authority, and the resulting discussions were really impactful. The participants raised thoughtful questions on a variety of topics, but seemed to take a natural interest in the use of AI in border control. They touched on the role of the Black Box Problem, potential biases within migration technology and the resulting human rights concerns. I was extremely rewarding to see how confidently participants applied the concepts introduced to them earlier in the session in their own debate. One student even mentioned that he wished he had written his thesis on the topic, something which not only reflected the strength of the discussion, but the kind of curiosity and critical engagement we designed our workshop to inspire.

We were genuinely thrilled with the response received from the participants after the session. Many noted that the technical aspects of AI, often seen as complex or even daunting, were made much more digestible. This was especially important to us, given that many did not have a technical background and demonstrated that everyone, regardless of their starting point, left with a clearer understanding of the EU AI Act itself, and the broader understanding of law, technology and their intersection. Above all, though, the success of FLL's UvA workshop affirmed the impact of our efforts and motivated us to ensure our next workshop at the Vrije Universiteit Amsterdam would be even better!`,
    publishedDate: '2024-05-20',
    category: 'events',
    tags: ['EU AI Act', 'Workshop', 'UvA', 'Legal Education', 'Team Experience'],
    featured: true,
    imageUrl: '/images/uva_workshop.jpeg'
  },
  {
    id: '2',
    slug: 'bridging-disciplines-vu-workshop-reflections',
    title: 'Bridging Disciplines: What can AI students learn from a Legal Workshop? (And what can it learn from them?) - Reflections from the FLL Workshop #2 at VU',
    author: 'The Futurist Law Lab Team',
    authorBio: 'A collaborative reflection from our team members who hosted the VU workshop: Laura, Kris, Matthew, Julia, Clara, and Kate.',
    excerpt: 'Our second workshop at Vrije Universiteit brought together AI students and legal perspectives in an engaging interdisciplinary dialogue. Read about the insights and learnings from this dynamic session.',
    content: `The second FLL workshop, hosted by team members Laura, Kris, Matthew, Julia, Clara, and Kate, took place at the Vrije Universiteit (VU) on June 10th. Our first session outside the University of Amsterdam (UvA) marked a significant step in expanding our initiative into a new academic community.

The workshop brought together an engaged group of students, many of whom were studying artificial intelligence and working on theses closely aligned with the subject of our workshop. In that sense, the interdisciplinary nature of the session became immediately clear: While our materials approach AI mostly through a legal lens, participants contributed technical perspectives that enriched the discussion, making it more dynamic and diverse. A clear example of this came from a student researching AI in medical diagnostics. Her examples of emerging technologies in that area prompted our group to explore how more nuanced applications of AI, that is, less easily categorizable, would be classified under the EU Act. This exchange highlighted the value of the workshops in promoting collaborative, real-world problem-solving.

Another interesting aspect of this session was that the more intimate group size at VU allowed for a shift in our usual format. Rather than structured paired stakeholder debates, the session evolved into a free-flowing conversation where participants engaged with one another across all stakeholder roles. The result was a dynamic, open exchange, almost like a debate between friends on the trade-offs in AI governance.

We concluded the session by opening the floor for feedback, and received an overall positive reaction regarding our balance between content delivery and interactivity. Participants highlighted that this balance promoted the clarity of the material and the accessibility of legal concepts, particularly valuable in a room, as opposed to our previous PPLE workshop, where most came from technical AI, rather than legal, backgrounds. This demonstrates what became one of our favorite aspects of the FLL workshops, that is, not only clearly communicating our content but also ensuring that it remains meaningful for every type of audience. We also value seeing that participants aren't just absorbing the content, but actively processing and critically engaging with it. And, judging by the VU students' involvement and insightful questions, it was clear that they were.

In summary, this workshop demonstrated the heart of FLL's purpose: Creating space for productive conversations between disciplines. Whether participants come from law, tech, or any other field, our goal is always to present the material in a way that is relevant, challenging, and thought-provoking for everyone. The VU session reinforced the value of interdisciplinary dialogue between law and technology, something we remain committed to in every workshop we deliver.

We would like to extend our sincere thanks to all the participants who made this session such a meaningful experience - Your engagement was truly appreciated!

Interested in joining the conversation? Find out when our next workshop is taking place on our LinkedIn (Futurist Law Lab) or Instagram (@Futuristlawlab)!`,
    publishedDate: '2024-06-15',
    category: 'events',
    tags: ['VU Workshop', 'Interdisciplinary Learning', 'AI Students', 'Legal Education', 'Team Reflection'],
    featured: false,
    imageUrl: '/images/vu_workshop.jpeg'
  }
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
