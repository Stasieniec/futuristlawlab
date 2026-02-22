import Image from 'next/image';

export default function AboutSection() {
  return (
      <section id="about" aria-labelledby="about-heading" className="bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="bg-blue-600/10 py-2 px-4 rounded-full text-blue-700 text-sm font-medium inline-block mb-4 sm:mb-6">
                Who We Are
              </div>
              <h2 id="about-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-slate-900">About Us</h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Futurist Law Lab is a student initiative based in Amsterdam that approaches the intersection of law and emerging technologies primarily from a legal perspective.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  We bring together law students, tech enthusiasts, and policymakers to collaborate on forward-thinking approaches to legal challenges posed by technological advancement.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about_us.jpeg"
                alt="Futurist Law Lab Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        </div>
      </section>
  );
}
