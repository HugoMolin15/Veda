import React, { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
  { name: '00:00', value: 400, model: 240, noise: 100 },
  { name: '04:00', value: 300, model: 139, noise: 120 },
  { name: '08:00', value: 900, model: 980, noise: 150 },
  { name: '12:00', value: 1480, model: 390, noise: 180 },
  { name: '16:00', value: 1890, model: 480, noise: 200 },
  { name: '20:00', value: 2390, model: 1380, noise: 210 },
  { name: '24:00', value: 3490, model: 4300, noise: 250 },
];

const ForensicGraph: React.FC = () => {
  return (
    <div className="w-full h-full p-6 md:p-12 flex flex-col">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-white text-[18px] font-medium tracking-tight mb-1">Synthetic Spectral Analysis</h3>
          <p className="text-white/40 text-[12px] uppercase tracking-widest font-normal">Artifact Probability Density</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#5227FF]"></div>
            <span className="text-white/60 text-[11px] uppercase tracking-wider">Neural Signature</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
            <span className="text-white/60 text-[11px] uppercase tracking-wider">Model Origin</span>
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5227FF" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#5227FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorModel" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 10 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 10 }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#121212', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '12px' }}
              itemStyle={{ fontSize: '12px', color: '#fff' }}
              labelStyle={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', marginBottom: '4px', textTransform: 'uppercase' }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#5227FF"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue)"
              animationDuration={2000}
            />
            <Area
              type="monotone"
              dataKey="model"
              stroke="#10b981"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorModel)"
              animationDuration={2500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 border-t border-white/5 pt-8">
        {[
          { label: 'GAN Confidence', value: '98.4%', status: 'Critical' },
          { label: 'Latent Noise', value: '0.042ms', status: 'Detected' },
          { label: 'Artifact Jitter', value: 'Lo-Fi', status: 'Anomalous' },
          { label: 'Model UUID', value: 'SDXL-V2', status: 'Matched' },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-white/20 text-[10px] uppercase tracking-widest mb-1">{stat.label}</span>
            <span className="text-white text-[16px] font-medium">{stat.value}</span>
            <span className={`text-[10px] ${stat.status === 'Critical' ? 'text-red-400' : 'text-[#10b981]'} uppercase tracking-tight mt-1`}>● {stat.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Analytics: React.FC = () => {
  return (
    <div className="w-full">
      <div className="mb-12">
        <p className="text-[11px] font-normal text-[#12262B] uppercase tracking-widest mb-4 md:mb-6">THREAT FORENSICS</p>
        <h2 className="text-[40px] font-medium text-[#0D1B1E] leading-[0.95] tracking-tighter">
          Deep-layer analysis of <br /> synthetic media artifacts
        </h2>
      </div>

      <div className="w-full h-[500px] md:h-[650px] bg-[#0A0A0B] rounded-[16px] border border-[#1A1A1B] shadow-2xl overflow-hidden relative group">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_-20%,_#5227FF33,transparent_70%)]"></div>
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="relative z-10 w-full h-full">
          <ForensicGraph />
        </div>

        {/* Floating Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#5227FF08] to-transparent absolute -top-full animate-scan-slow"></div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
