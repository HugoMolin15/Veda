
import React from 'react';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      tag: "Forensics",
      date: "Oct 12, 2026",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2574&auto=format&fit=crop",
      title: "The Rise of CEO-Cloning: How to Verify Voice in 2026.",
      desc: "An in-depth look at how audio synthesis is being used for corporate espionage and the tools required to detect it.",
    },
    {
      id: 2,
      tag: "Ethics",
      date: "Sep 28, 2026",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2670&auto=format&fit=crop",
      title: "Pixel Ethics: Why Forensic Watermarking is the New SSL.",
      desc: "Strategic guide for organizations to adopt cryptographic watermarking for all outbound communications.",
    },
    {
      id: 3,
      tag: "Neural Core",
      date: "Sep 15, 2026",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2532&auto=format&fit=crop",
      title: "Detection vs. Deception: A Deep Dive into Veda’s Neural Core.",
      desc: "Mapping the neural architectures capable of identifying GAN-generated artifacts in milliseconds.",
    }
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
        <div>
          <p className="text-[11px] font-normal text-[#12262B] uppercase tracking-widest mb-6">Threat Lab Insights</p>
          <h2 className="text-[40px] font-medium text-[#0D1B1E] leading-[0.95] tracking-tighter max-w-2xl">
            Intelligence from the frontier
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-14">
        {posts.map((post) => (
          <div key={post.id} className="group cursor-pointer">
            <div className="h-64 rounded-[12px] overflow-hidden mb-8 bg-[#FBFBFB] relative border border-gray-100 transition-all duration-500 group-hover:shadow-[0_20px_40px_-15px_rgba(82,39,255,0.15)] group-hover:border-[#5227FF]/10">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="text-[11px] text-[#5227FF] font-medium uppercase tracking-widest mb-4">
              {post.tag} • {post.date}
            </div>

            <h3 className="text-[20px] font-medium text-[#0D1B1E] mb-4 leading-tight tracking-tight decoration-[#5227FF]/30 group-hover:underline transition-all">
              {post.title}
            </h3>

            <p className="text-[15px] text-gray-500 leading-relaxed font-normal mb-8 line-clamp-2">
              {post.desc}
            </p>

            <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#0D1B1E] uppercase tracking-wider group-hover:text-[#5227FF] transition-colors duration-300">
              Read now
              <span className="material-icons text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
