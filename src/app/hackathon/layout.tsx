import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Hackathon: Optimising the Law | Futurist Law Lab',
  description: 'Join us for an exciting Legal Hackathon focused on optimising the law through innovative approaches. Hosted by Futurist Law Lab at Roeterseiland Campus, Amsterdam.',
};

export default function HackathonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
