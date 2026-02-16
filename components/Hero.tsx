
import React from 'react';
import Grainient from './Grainient';

const Hero: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 items-start mb-8 md:mb-16">
      <div className="max-w-2xl">
        <p className="text-[11px] font-normal text-[#12262B] uppercase tracking-widest mb-6">NEXT-GEN BRAND DEFENSE</p>
        <h1 className="text-[40px] font-medium text-[#0D1B1E] leading-[0.95] tracking-tighter mb-4 md:mb-8">
          Shield Your Identity <br /> in the Synthetic Era.
        </h1>
      </div>
      <div className="max-w-lg lg:ml-auto pt-0 lg:pt-8">
        <p className="text-[16px] text-gray-500 mb-10 leading-relaxed font-medium">
          Sentinel Veda deploys a proprietary neural layer to detect deepfakes, unauthorized brand clones, and AI-driven misinformation before they reach your audience.
        </p>
        <div className="flex gap-3 sm:gap-4 w-full">
          <button className="flex-1 sm:flex-none bg-[#0D1B1E] hover:opacity-90 text-white px-4 sm:px-10 py-4 rounded-full text-[13px] sm:text-[14px] font-bold transition-all shadow-sm truncate">Initialize Defense</button>
          <button className="flex-1 sm:flex-none bg-transparent border border-gray-300 hover:border-[#0D1B1E] text-[#0D1B1E] px-4 sm:px-10 py-4 rounded-full text-[13px] sm:text-[14px] font-bold transition-all truncate">View Threat Map</button>
        </div>
      </div>

      <div className="col-span-full rounded-[16px] overflow-hidden shadow-sm relative bg-[#F3F4F6] h-[400px] md:h-[600px] flex items-center justify-center mt-8 md:mt-12 border border-[#E8E9EB]">
        <div className="absolute inset-0">
          <Grainient
            color1="#2c262b"
            color2="#5227FF"
            color3="#a094c7"
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-xl w-full mx-4 pointer-events-auto shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                <span className="material-icons text-[#0D1B1E] text-xl">verified_user</span>
              </div>
              <div>
                <p className="text-[12px] font-bold text-white uppercase tracking-widest">Active Neural Shield</p>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                  <p className="text-[10px] text-green-400 font-bold uppercase tracking-tighter shadow-sm">System Protocol: Active</p>
                </div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/20 mb-6"></div>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-1.5 border border-white/20 bg-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest backdrop-blur-sm">Deepfake Detection</div>
              <div className="px-4 py-1.5 border border-white/20 bg-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest backdrop-blur-sm">Bot Neutralization</div>
              <div className="px-4 py-1.5 border border-white/20 bg-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest backdrop-blur-sm">Real-time Analysis</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
