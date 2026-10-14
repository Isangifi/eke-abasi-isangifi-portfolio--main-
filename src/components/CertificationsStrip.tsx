import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../data/portfolioData';

export const CertificationsStrip: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="border-y border-[rgba(243,240,230,0.08)] bg-[#0d1411]/90 backdrop-blur-sm py-4 sm:py-5 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e6b968] shrink-0">
            <Award className="w-4 h-4 text-[#e6b968]" />
            <span>6 Professional Certifications:</span>
          </div>

          {/* Horizontal Items List with subtle stagger */}
          <div className="w-full lg:w-auto flex flex-wrap items-center gap-2.5 sm:gap-3">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121c17] border border-[rgba(243,240,230,0.08)] hover:border-[#42c9a8]/40 transition-colors text-xs text-[#f3f0e6]"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#42c9a8] shrink-0" />
                <span className="font-medium whitespace-nowrap">{cert.name}</span>
                <span className="text-[10px] font-mono text-[#e6b968] bg-[#1a241b] px-1.5 py-0.5 rounded border border-[#e6b968]/20">
                  Certified
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
};
