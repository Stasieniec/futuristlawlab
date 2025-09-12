export interface Publication {
  id: string;
  slug: string;
  title: string;
  author: string;
  authorBio?: string;
  authorPhoto?: string;
  description: string;
  pdfUrl: string;
  publishedDate: string;
  category: 'thesis' | 'research-paper' | 'working-paper';
  tags: string[];
  featured?: boolean;
}

export const publications: Publication[] = [
  {
    id: '1',
    slug: 'smart-contracts-legislation-impact',
    title: 'Is Law the Solution? Examining Legislative Impact on Smart Contract Adoption',
    author: 'Sarka Juklova',
    authorBio: 'Law major at PPLE College (University of Amsterdam), graduating in 2025. Interested in the intersection of Law and Economics, market regulation, and technology governance including AI, blockchain, and gene editing.',
    authorPhoto: '/images/team/sarka.png',
    description: `In this interdisciplinary research, Sarka explored how smart contract legislation in U.S. states affects users' willingness to adopt the technology. By combining doctrinal legal analysis with an empirical survey based on the Unified Theory of Acceptance and Use of Technology (UTAUT), the findings revealed some striking insights!

While smart contracts promise transparency, efficiency and disintermediation, the study shows that legal recognition alone may not be enough to drive their widespread adoption. Instead, how legislation is designed plays a key role in shaping user trust and engagement with new technologies.

This is exactly why the work of Futurist Law Lab matters. We strive to engage (young) people at the intersection of law and technology and empower them to take part in shaping forward-thinking, informed regulation.

The thesis also challenges the outdated regulation vs. innovation narrative. We believe that good regulation, grounded in technical understanding, empirical backing and openness to innovation, is not a threat, but a driver of progress. And that is the kind of regulation we should strive for in Europe and beyond.

A great thank you goes to the thesis supervisor Karolina Hwija for her ongoing support, helpful advice and kind words during the thesis process.`,
    pdfUrl: '/articles/Final_Thesis_Smart-contracts.pdf',
    publishedDate: '2025-01-15',
    category: 'thesis',
    tags: ['Smart Contracts', 'Blockchain', 'Legal Technology', 'UTAUT', 'Legislative Impact'],
    featured: true
  },
  {
    id: '2',
    slug: 'regulating-dark-patterns-eu-behavioural-case',
    title: 'Regulating Dark Patterns in the EU: A Behavioural Case for Counter-Architecture',
    author: 'Tadeáš',
    authorBio: 'Tadeáš is a dedicated researcher focused on the intersection of technology, law, and human behavior. His work explores how digital interfaces influence user decision-making and the regulatory frameworks needed to protect consumer autonomy.',
    authorPhoto: '/images/team/tadeas.jpeg',
    description: `In this research, Tadeáš explored how manipulative interface designs known as dark patterns undermine user autonomy and distort online markets. By combining doctrinal legal analysis with insights from behavioural economics, the thesis examines how existing EU legislation (GDPR, UCPD, CRD, DSA) addresses these practices, and where it fails to do so effectively.

While current frameworks rely heavily on transparency and consent, the findings show that this approach overlooks how digital interfaces shape user behaviour in practice. To move beyond this, the thesis introduces the concept of counter-architecture: a regulatory strategy focused on the structure of digital choice environments.

The proposals include fairness-by-design obligations, choice symmetry, and concrete design requirements for digital interfaces, all feeding into current debates around the proposed Digital Fairness Act.`,
    pdfUrl: '/articles/thesis_dark_patterns_in_eu.pdf',
    publishedDate: '2024-07-15',
    category: 'thesis',
    tags: ['Dark Patterns', 'EU Regulation', 'Behavioural Economics', 'Digital Fairness', 'Consumer Protection'],
    featured: false
  }
  // Future publications can be added here
];

export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find(publication => publication.slug === slug);
}

export function getFeaturedPublications(): Publication[] {
  return publications.filter(publication => publication.featured);
}

export function getPublicationsByCategory(category: Publication['category']): Publication[] {
  return publications.filter(publication => publication.category === category);
}
