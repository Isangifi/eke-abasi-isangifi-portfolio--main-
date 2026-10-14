import React from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-[rgba(243,240,230,0.08)] bg-[#070b09] py-8 text-[#aab3ac] text-xs"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          {/* Copyright notice requested by user */}
          <div className="text-xs text-[#aab3ac]">
            © 2026 Eke-Abasi Isangifi. All rights reserved. Built with clean, accessible standards.
          </div>

          {/* Contact and Back to top arranged horizontally */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-xs">
            <a
              href="mailto:eisangifi@gmail.com"
              className="hover:text-[#42c9a8] transition-colors"
            >
              eisangifi@gmail.com
            </a>
            <a
              href="tel:+2348133869304"
              className="font-mono hover:text-[#42c9a8] transition-colors"
            >
              +234 813 386 9304
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 font-semibold text-[#f3f0e6] hover:text-[#42c9a8] transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#42c9a8]" />
            </button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
