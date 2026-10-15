import React from 'react';
import { motion } from 'framer-motion';
import { PORTRAIT_WEBP, PORTRAIT_IMAGE, PORTRAIT_FALLBACK } from '../data/portrait';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0d1411] border-y border-[rgba(243,240,230,0.08)] relative scroll-mt-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: About Copy with scroll reveal */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-[#42c9a8] mb-4">
              <span className="w-5 h-[1.5px] bg-[#42c9a8]" aria-hidden="true" />
              <span>About</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-[#f3f0e6] mb-6 leading-tight [text-wrap:balance]">
              I turn technology into something businesses can actually depend on.
            </h2>

            {/* Body Copy */}
            <div className="space-y-4 text-base sm:text-lg text-[#aab3ac] leading-relaxed max-w-[58ch]">
              <p>
                Most businesses don't need more technology — they need the right technology working together.
              </p>
              <p>
                I help businesses build and manage the digital infrastructure behind their day-to-day operations: websites, e-commerce platforms, business tools, cloud services, automation and technical support.
              </p>
              <p>
                Whether you need something built from scratch, an existing system fixed, or someone reliable to keep everything running, I focus on practical solutions that work beyond launch.
              </p>
            </div>

            {/* Tagline */}
            <div className="mt-8 pt-4">
              <p className="font-serif-display text-lg sm:text-xl font-bold text-[#e6b968] tracking-wide">
                Build. Integrate. Optimise. Support.
              </p>
            </div>
          </motion.div>

          {/* Right Column: High-Resolution Authentic Portrait Card */}
          <motion.div 
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[380px]">
              
              {/* Gold/emerald radial ambient glow */}
              <div 
                className="absolute -inset-6 bg-gradient-to-tr from-[#cf9f4f]/15 to-[#2ea88a]/15 rounded-3xl blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Portrait Container - Polished Editorial Card */}
              <div className="relative rounded-2xl overflow-hidden bg-[#121a17] border border-[rgba(243,240,230,0.14)] shadow-2xl transition-all duration-300 hover:border-[#2ea88a]/40">
                
                {/* Clean Photo Viewport without distortion or corruptions */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0a0f0d]">
                  <picture>
                    <source srcSet={PORTRAIT_WEBP} type="image/webp" />
                    <img
                      src={PORTRAIT_IMAGE}
                      onError={(e) => {
                        if (e.currentTarget.src !== window.location.origin + PORTRAIT_FALLBACK) {
                          e.currentTarget.src = PORTRAIT_FALLBACK;
                        }
                      }}
                      alt="Eke-Abasi Isangifi - Digital Solutions Engineer & Technology Consultant"
                      width="380"
                      height="475"
                      className="w-full h-full object-cover object-top sm:object-center transition-transform duration-700 ease-out hover:scale-[1.03]"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </div>

                {/* Refined Executive Identification Footer */}
                <div className="p-4 sm:p-4.5 bg-[#0e1613] border-t border-[rgba(243,240,230,0.08)] flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-[#f3f0e6] tracking-wide">
                      Eke-Abasi Isangifi
                    </h3>
                    <p className="text-xs text-[#aab3ac] mt-0.5">
                      Web Developer and Digital Technologist
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#182620] border border-[#2ea88a]/30 text-[11px] font-medium text-[#42c9a8] whitespace-nowrap shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#42c9a8] animate-pulse" aria-hidden="true" />
                    <span>Available</span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
