
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Platform', href: '#', hasDropdown: true },
    { name: 'Threat Lab', href: '#' },
    { name: 'API Docs', href: '#' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#E8E9EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center relative z-[60]">
            <span className="font-bold text-2xl tracking-tighter text-[#0D1B1E]">sentinel</span>
            <span className="ml-1 text-gray-500 text-[12px] font-normal">VEDA</span>
          </div>

          {/* Desktop Nav */}
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center relative z-[60]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black p-2 focus:outline-none transition-transform active:scale-95"
            >
              {isOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 md:hidden bg-white px-6 pt-32 h-screen"
          >
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-[32px] font-medium text-[#0D1B1E] tracking-tighter flex items-center justify-between"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  {link.hasDropdown && <span className="material-icons text-2xl">chevron_right</span>}
                </motion.a>
              ))}

              <div className="pt-12 flex flex-col space-y-4">
                <motion.a
                  href="#"
                  className="w-full text-center py-5 rounded-full border border-gray-200 text-[#0D1B1E] font-bold text-[16px]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Sign in
                </motion.a>
                <motion.a
                  href="#"
                  className="w-full text-center py-5 rounded-full bg-[#0D1B1E] text-white font-bold text-[16px] shadow-xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Initialize Defense
                </motion.a>
              </div>
            </div>

            {/* Background Grainient Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 opacity-10 pointer-events-none grayscale">
              <div className="w-full h-full bg-gradient-to-t from-gray-200 to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
