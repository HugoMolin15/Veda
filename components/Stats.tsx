
import React from 'react';

const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {/* Featured lead card with brand gradient */}
      <div className="bg-[#121212] rounded-[16px] p-10 flex flex-col justify-end min-h-[300px] shadow-2xl relative overflow-hidden">
        {/* Concentric Rings Background */}
        <div className="absolute top-[-35%] left-[-20%] w-[300px] h-[300px] opacity-[0.15] pointer-events-none">
          <div className="absolute inset-0 border border-white rounded-full scale-[1.0]"></div>
          <div className="absolute inset-0 border border-white rounded-full scale-[0.8]"></div>
          <div className="absolute inset-0 border border-white rounded-full scale-[0.6]"></div>
          <div className="absolute inset-0 border border-white rounded-full scale-[0.4]"></div>
          <div className="absolute inset-0 border border-white rounded-full scale-[0.2]"></div>
        </div>

        <h3 className="text-white text-[32px] font-medium leading-[1.05] tracking-tight relative z-10 max-w-[240px]">
          Trusted by publishers monetizing AI audiences at scale
        </h3>
      </div>

      {/* Stats cards with top titles and bottom values */}
      {[
        { label: "Neural Detection Accuracy", value: "99.9%" },
        { label: "Real-time Analysis Speed", value: "< 12ms" },
        { label: "Average Risk Mitigated", value: "$4.2M" }
      ].map((stat, idx) => (
        <div
          key={idx}
          className="bg-[#FBFBFB] rounded-[8px] p-8 shadow-sm flex flex-col justify-between min-h-[180px] md:min-h-[300px]"
        >
          <span className="text-[14px] font-medium text-[#12262B] uppercase tracking-widest leading-tight">
            {stat.label}
          </span>
          <span className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[56px] font-semibold text-[#0D1B1E] leading-none tracking-tighter mb-2">
            {stat.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
