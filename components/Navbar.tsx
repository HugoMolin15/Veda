
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#E8E9EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-2xl tracking-tighter text-[#0D1B1E]">sentinel</span>
            <span className="ml-1 text-gray-500 text-[12px] font-normal">VEDA</span>
          </div>
          <div className="hidden md:flex space-x-10 text-[14px] font-normal text-[#0D1B1E] tracking-tight">
            <div className="relative group cursor-pointer flex items-center gap-1 hover:opacity-70 transition-opacity">
              Platform <span className="material-icons text-[14px]">expand_more</span>
            </div>
            <a className="hover:opacity-70 transition-opacity" href="#">Threat Lab</a>
            <a className="hover:opacity-70 transition-opacity" href="#">API Docs</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a className="bg-transparent border border-gray-300 text-[#0D1B1E] px-6 py-2.5 rounded-full text-[14px] font-bold hover:border-[#0D1B1E] transition-all" href="#">Sign in</a>
            <a className="bg-[#0D1B1E] hover:opacity-90 text-white px-6 py-2.5 rounded-full text-[14px] font-bold transition-all shadow-sm" href="#">Initialize Defense</a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-black p-2 focus:outline-none">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M4 7H20" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  strokeLinecap="round"
                />
                <path 
                  d="M4 12H20" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  strokeLinecap="round"
                />
                <path 
                  d="M4 17H20" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
