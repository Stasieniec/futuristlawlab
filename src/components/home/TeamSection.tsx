import Image from 'next/image';
import { teamMembers } from '@/app/data/team';

export default function TeamSection() {
  return (
      <section id="team" aria-labelledby="team-heading" className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 id="team-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
              Meet Our Team
            </h2>
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
              The passionate students behind Futurist Law Lab working to shape the future of legal frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64 sm:h-72 lg:h-80 w-full">
                  <Image src={member.photo} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-700 font-medium mb-3">{member.role}</p>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Instructions for when all members are displayed */}
          <div className="mt-16 text-center">
            <p className="text-slate-600 italic">
              We are a team of dedicated students committed to exploring the intersection of law and technology.
            </p>
          </div>
        </div>
      </section>
  );
}
