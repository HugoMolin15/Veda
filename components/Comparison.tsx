import React, { useState } from 'react';
import TrueFocus from './TrueFocus';
import DecryptedText from './DecryptedText';
import ASCIIText from './ASCIIText';

const Comparison: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const cards = [
    {
      title: "Neural Focus",
      description: "While legacy stacks blur the truth, Veda's neural layer provides the high-fidelity focus needed to isolate synthetic anomalies.",
      Illustration: () => (
        <div className="relative w-full h-72 mb-10 flex items-center justify-center bg-transparent overflow-visible">
          <TrueFocus
            sentence="True Focus"
            manualMode={hoveredIdx !== 0}
            blurAmount={5}
            borderColor="#5227FF"
            animationDuration={0.4}
            pauseBetweenAnimations={1}
          />
        </div>
      )
    },
    {
      title: "Instant Decryption",
      description: "Human review is too slow for viral misinformation. Veda's neural layer decrypts synthetic intent at the speed of the engine.",
      Illustration: () => (
        <div className="relative w-full h-72 mb-10 flex items-center justify-center bg-transparent overflow-visible">
          <div className="text-[#0D1B1E] text-[32px] md:text-[40px] font-black tracking-tighter">
            <DecryptedText
              text="DECRYPTING..."
              animateOn="hover"
              revealDirection="center"
              sequential
              loop={true}
              useOriginalCharsOnly={false}
              forceHover={hoveredIdx === 1}
              className="text-[#5227FF]"
              encryptedClassName="text-gray-300"
            />
          </div>
        </div>
      )
    },
    {
      title: "Neural Artifacts",
      description: "AI leaves behind invisible mathematical residue. Our engine reconstructs these artifacts to identify the model of origin.",
      Illustration: () => (
        <div className="relative w-full h-72 mb-10 flex items-center justify-center bg-transparent overflow-visible">
          <ASCIIText
            text="VEDA"
            enableWaves={hoveredIdx === 2}
            asciiFontSize={8}
          />
        </div>
      )
    }
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-normal text-[#12262B] uppercase tracking-widest mb-6">THE TRUST GAP</p>
          <h2 className="text-[40px] font-medium text-[#0D1B1E] leading-[0.95] tracking-tighter">
            Why legacy stacks fail in <br /> the synthetic era
          </h2>
        </div>
        <div className="max-w-sm text-[16px] text-gray-500 leading-relaxed mb-2 font-normal">
          Traditional security relies on static signatures. AI-driven threats are dynamic, unique, and designed to bypass standard filters.
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {cards.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="bg-white p-12 rounded-[12px] border border-[#F3F4F6] flex flex-col items-center text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)]"
          >
            <item.Illustration />

            <h3 className="text-[16px] font-normal text-[#0D1B1E] mb-4 tracking-tight whitespace-nowrap w-full overflow-hidden text-ellipsis">
              {item.title}
            </h3>

            <p className="text-[15px] text-gray-500 leading-relaxed font-normal">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Comparison;
