
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import MissionSection from '../components/MissionSection';
import AIAssistant from '../components/AIAssistant';
import Footer from '../components/Footer';

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      
      <Navigation isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      
      <main id="main-content" role="main" className="pt-16">
        <Hero />
        <MissionSection />
        <FeatureGrid />
      </main>
      
      <AIAssistant />
      <Footer />
    </div>
  );
};

export default Index;
