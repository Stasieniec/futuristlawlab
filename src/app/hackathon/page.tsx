import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HackathonHero from '@/components/hackathon/HackathonHero';
import EventResources from '@/components/hackathon/EventResources';
import AboutHackathon from '@/components/hackathon/AboutHackathon';
import PrizesSection from '@/components/hackathon/PrizesSection';
import ScheduleSection from '@/components/hackathon/ScheduleSection';
import PartnersSection from '@/components/hackathon/PartnersSection';
import DocumentsSection from '@/components/hackathon/DocumentsSection';

export default function HackathonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="main" />
      <HackathonHero />
      <EventResources />
      <AboutHackathon />
      <PrizesSection />
      <ScheduleSection />
      <PartnersSection />
      <DocumentsSection />
      <Footer />
    </div>
  );
}
