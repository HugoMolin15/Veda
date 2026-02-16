import React from 'react';
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
import { motion } from 'framer-motion';

const SectionWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  noBorders?: boolean;
  delay?: number;
}> = ({ children, className = "", bgColor = "bg-white", noBorders = false, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay }}
    className={`${!noBorders ? 'md:border-b border-[#E8E9EB]' : ''} w-full ${bgColor} ${className}`}
  >
    <div className={`max-w-7xl mx-auto ${!noBorders ? 'md:border-l md:border-r md:border-dashed border-[#E8E9EB]' : ''} px-4 sm:px-6 lg:px-8 py-12 md:py-32`}>
      {children}
    </div>
  </motion.div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#0D1B1E] selection:text-white bg-white">
      <Pointer />
      <Navbar />

      <main>
        <SectionWrapper>
          <Hero />
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <Stats />
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <Narrative />
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <Features />
        </SectionWrapper>

        <SectionWrapper>
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

        <SectionWrapper>
          <Comparison />
        </SectionWrapper>

        <SectionWrapper
          bgColor="bg-[#FFF9EB]"
          noBorders={true}
        >
          <Analytics />
        </SectionWrapper>

        <SectionWrapper>
          <PremiumBrands />
        </SectionWrapper>

        <SectionWrapper>
          <Blog />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
};

export default App;
