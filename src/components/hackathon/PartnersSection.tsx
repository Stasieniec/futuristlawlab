import Image from 'next/image';

export default function PartnersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Partners</h2>
            <p className="text-slate-600">This event was made possible by our amazing partners</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
              <div className="relative w-full h-24">
                <Image
                  src="/hackathon/houthoff.jpeg"
                  alt="Houthoff"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
              <div className="relative w-full h-24">
                <Image
                  src="/hackathon/pinsent-masons.png"
                  alt="Pinsent Masons"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
              <div className="relative w-full h-24">
                <Image
                  src="/hackathon/debrauw.jpeg"
                  alt="De Brauw Blackstone Westbroek"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
              <div className="relative w-full h-24">
                <Image
                  src="/hackathon/moonlit.jpeg"
                  alt="Moonlit"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
              <div className="relative w-full h-24">
                <Image
                  src="/hackathon/lovable-black.svg"
                  alt="Lovable"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
              <div className="relative w-full h-24">
                <Image
                  src="/hackathon/momen-logo.svg"
                  alt="Momen"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
              <div className="relative w-full h-24">
                <Image
                  src="/hackathon/amsterdam-law-hub.jpeg"
                  alt="Amsterdam Law Hub"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
              <div className="relative w-full h-24">
                <Image
                  src="/hackathon/amsterdam-university-fonds.png"
                  alt="Amsterdam University Fonds"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
              <div className="relative w-full h-24">
                <Image
                  src="/hackathon/sirach-ventures.png"
                  alt="Sirach Ventures"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
              <div className="relative w-full h-24">
                <Image
                  src="/hackathon/tdp.jpeg"
                  alt="TDP"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
              <div className="relative w-full h-24">
                <Image
                  src="/hackathon/aim-pple.jpeg"
                  alt="AIM PPLE"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200">
              <div className="relative w-full h-24">
                <Image
                  src="/hackathon/hack-the-law.png"
                  alt="Hack the Law Cambridge"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
