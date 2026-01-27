import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ApproachSection } from '@/components/sections/ApproachSection';
import { ValueSection } from '@/components/sections/ValueSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PortfolioSection />
        <SkillsSection />
        <ApproachSection />
        <ValueSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
