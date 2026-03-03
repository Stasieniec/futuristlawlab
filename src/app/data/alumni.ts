// Alumni data — to add a previous member, add an object to this array.

export interface AlumniInfo {
  name: string;
  role: string;
  photo: string; // images still under 'team'
  bio: string;
}

export const alumni: AlumniInfo[] = [

  {
    name: 'Maxim Gusev',
    role: 'AI Team',
    photo: '/images/team/maxim.jpeg',
    bio: 'Computer Scientist with an MSc from ETH Zurich, specializing in large-scale machine learning, language models, and distributed systems. Works on transformer architectures, model generalization, and high-performance training pipelines. Previously contributed to document understanding research published at ICDM and organized AI-focused innovation events. Passionate about advancing reliable, efficient AI systems and exploring their applications across science, law, and entrepreneurship.',
  },
  {
    name: 'Krzysztof Nowak',
    role: 'AI Team',
    photo: '/images/team/krzysztof.jpeg',
    bio: 'Third-year Artificial Intelligence student at Vrije Universiteit Amsterdam, currently on exchange at the Hong Kong University of Science and Technology. Conducting thesis internship at the Institute for Cancer Research, developing ML models for cancer diagnosis. Previous experience includes AI projects for Novo Nordisk and leading development of an intelligent healthcare assistant at Ancora Health. Passionate about the intersections of AI, neuroscience, medicine, and business.',
  },
  {
    name: 'Mauro Peirs',
    role: 'Social Media',
    photo: '/images/team/mauro.jpeg',
    bio: 'At 17, Mauro is the youngest member of Futurist Law Lab. He combines his passion for AI law with his artistic side, finding inspiration in both technology and creative expression. He manages social media, bridging the gap between complex legal discussions and engaging digital storytelling. Believes that the way we communicate ideas is just as important as the ideas themselves.',
  }
];
