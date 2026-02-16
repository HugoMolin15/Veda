
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Narrative from './components/Narrative';
import Features from './components/Features';
import Comparison from './components/Comparison';
import Analytics from './components/Analytics';
import PremiumBrands from './components/PremiumBrands';
import Blog from './components/Blog';
import Footer from './components/Footer';
import NeuralCore from './components/NeuralCore';
import { Pointer } from './components/ui/pointer';

const SectionWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  noBorders?: boolean
}> = ({ children, className = "", bgColor = "bg-white", noBorders = false }) => (
  <div className={`${!noBorders ? 'md:border-b border-[#E8E9EB]' : ''} w-full ${bgColor} ${className}`}>
    <div className={`max-w-7xl mx-auto ${!noBorders ? 'md:border-l md:border-r md:border-dashed border-[#E8E9EB]' : ''} px-4 sm:px-6 lg:px-8 py-12 md:py-32`}>
      {children}
    </div>
  </div>
);

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#0D1B1E] selection:text-white bg-white">
      <Pointer />
      <Navbar />

      <main>
        <SectionWrapper className="animate-on-scroll transition-all duration-1000">
          <Hero />
        </SectionWrapper>

        <SectionWrapper className="animate-on-scroll transition-all duration-1000 delay-100">
          <Stats />
        </SectionWrapper>

        <SectionWrapper className="animate-on-scroll transition-all duration-1000 delay-200">
          <Narrative />
        </SectionWrapper>

        <SectionWrapper className="animate-on-scroll transition-all duration-1000 delay-300">
          <Features />
        </SectionWrapper>

        <SectionWrapper className="animate-on-scroll transition-all duration-1000">
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-20 gap-4 md:gap-8">
              <div className="max-w-lg">
                <p className="text-[11px] font-normal text-[#12262B] uppercase tracking-widest mb-4 md:mb-6">NEURAL THREAT DETECTION</p>
                <h2 className="text-[40px] font-medium text-[#0D1B1E] leading-[0.95] tracking-tighter">
                  From Anomaly to <br /> Actionable Defense
                </h2>
              </div>
              <div className="max-w-sm text-[14px] text-gray-500 leading-relaxed font-normal pt-2 md:pt-12">
                Our neural layer identifies synthetic patterns, classifies the malicious intent of bot-driven campaigns, and maps these risks to automated takedown protocols.
              </div>
            </div>

            <NeuralCore />
          </div>
        </SectionWrapper>

        <SectionWrapper className="animate-on-scroll transition-all duration-1000">
          <Comparison />
        </SectionWrapper>

        <SectionWrapper
          className="animate-on-scroll transition-all duration-1000"
          bgColor="bg-[#FFF9EB]"
          noBorders={true}
        >
          <Analytics />
        </SectionWrapper>

        <SectionWrapper className="animate-on-scroll transition-all duration-1000">
          <PremiumBrands />
        </SectionWrapper>

        <SectionWrapper className="animate-on-scroll transition-all duration-1000">
          <Blog />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
};

export default App;
