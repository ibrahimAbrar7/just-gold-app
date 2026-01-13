import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustStrip from '@/components/TrustStrip';
import HowItWorks from '@/components/HowItWorks';
import WhyJustGold from '@/components/WhyJustGold';
import GoldVisualization from '@/components/GoldVisualization';
import SecuritySection from '@/components/SecuritySection';
import AppPreview from '@/components/AppPreview';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <HowItWorks />
        <WhyJustGold />
        <GoldVisualization />
        <SecuritySection />
        <AppPreview />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
