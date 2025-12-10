import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhySection } from "@/components/sections/WhySection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <WhySection />
        <HowItWorksSection />
        <AudienceSection />
        <VideoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
