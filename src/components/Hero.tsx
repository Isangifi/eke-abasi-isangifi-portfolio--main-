import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  return (
    <section 
      className="relative pt-16 sm:pt-20 lg:pt-28 pb-16 lg:pb-24 overflow-hidden bg-[#0a0f0d] flex items-center min-h-[580px] lg:min-h-[660px]"
    >
      {/* Ambient Radial Lighting Glows for a deep, cinematic aesthetic */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-radial from-[#2ea88a]/12 via-[#185a4a]/05 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-radial from-[#cf9f4f]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      
      {/* Subtle architectural dot/grid texture */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#14201a_1px,transparent_1px),linear-gradient(to_bottom,#14201a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] opacity-30 pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl lg:max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Eyebrow with motion fade-in */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121c17] border border-[rgba(243,240,230,0.12)] text-xs font-semibold uppercase tracking-widest text-[#42c9a8] mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#42c9a8] animate-pulse" aria-hidden="true" />
            <span>Digital Solutions for Businesses &amp; Professionals</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif-display leading-[1.08] text-[#f3f0e6] mb-6 tracking-tight [text-wrap:balance]"
          >
            Your business runs on technology.<br />
            <em className="italic font-normal text-[#42c9a8]">I make sure it works.</em>
          </motion.h1>

          {/* Focus Subhead */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-xs sm:text-sm font-semibold tracking-wider text-[#6f7a74] uppercase mb-6"
          >
            Websites &amp; E-commerce · Business Technology · Digital Operations
          </motion.div>

          {/* Lead Description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-base sm:text-lg lg:text-xl text-[#aab3ac] leading-relaxed max-w-[62ch] mb-8 [text-wrap:pretty]"
          >
            I help businesses build, connect, and maintain the digital tools they rely on — from websites and e-commerce to business technology, automation, and ongoing technical support.
          </motion.p>

          {/* Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-wrap items-center justify-center gap-4 mb-4"
          >
            <a
              href="#scope"
              onClick={(e) => {
                e.preventDefault();
                onStartProject();
              }}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-wide uppercase bg-gradient-to-r from-[#2ea88a] to-[#1f8e73] hover:from-[#35be9c] hover:to-[#229e81] text-[#050f0b] rounded-lg transition-all duration-200 shadow-lg shadow-[#2ea88a]/20 hover:shadow-xl hover:shadow-[#2ea88a]/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                onViewWork();
              }}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-wide uppercase text-[#f3f0e6] hover:text-[#42c9a8] bg-[#101915]/80 hover:bg-[#14211c] border border-[rgba(243,240,230,0.18)] hover:border-[#42c9a8]/50 rounded-lg transition-all duration-200 cursor-pointer"
            >
              <span>View my work</span>
            </a>
          </motion.div>

          {/* Reassurance text */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-xs text-[#6f7a74] font-medium mb-12 sm:mb-16"
          >
            Practical technology. Clear execution. Reliable support.
          </motion.p>

          {/* 3 Metric Highlights */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-full max-w-2xl grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-[rgba(243,240,230,0.10)]"
          >
            <div className="text-center">
              <b className="block font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f3f0e6]">
                10+
              </b>
              <span className="block text-xs sm:text-sm text-[#6f7a74] mt-1 leading-snug">
                Digital projects delivered
              </span>
            </div>

            <div className="text-center border-x border-[rgba(243,240,230,0.08)] px-2">
              <b className="block font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f3f0e6]">
                6
              </b>
              <span className="block text-xs sm:text-sm text-[#6f7a74] mt-1 leading-snug">
                Professional certifications
              </span>
            </div>

            <div className="text-center">
              <b className="block font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f3f0e6]">
                4+ yrs
              </b>
              <span className="block text-xs sm:text-sm text-[#6f7a74] mt-1 leading-snug">
                Building &amp; supporting systems
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
