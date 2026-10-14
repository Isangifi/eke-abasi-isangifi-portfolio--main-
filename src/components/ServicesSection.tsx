import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onInquire: (subject: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onInquire }) => {
  return (
    <section id="services" className="py-20 lg:py-28 relative scroll-mt-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with scroll reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-2xl mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-[#42c9a8] mb-3">
            <span className="w-5 h-[1.5px] bg-[#42c9a8]" aria-hidden="true" />
            <span>Practical Technology Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-display text-[#f3f0e6] tracking-tight">
            Ways I can help your business.
          </h2>
          <p className="mt-3 text-base text-[#aab3ac] leading-relaxed">
            From establishing your digital presence to connecting the everyday cloud platforms behind it, I deliver straightforward solutions tailored to what your operations actually require.
          </p>
        </motion.div>

        {/* 4-Column Responsive Grid with staggered scroll animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#121a17] border border-[rgba(243,240,230,0.08)] hover:border-[rgba(243,240,230,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2ea88a]/05"
            >
              <div>
                {/* Number & Badge */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[rgba(243,240,230,0.06)]">
                  <span className="font-serif-display text-lg font-bold text-[#6f7a74]">
                    {service.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#cf9f4f] bg-[#1d261e] px-2 py-0.5 rounded border border-[#cf9f4f]/20">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold font-serif-display text-[#f3f0e6] mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-[#aab3ac] mb-6 leading-relaxed">
                  {service.subtitle}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-8">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-xs text-[#f3f0e6]/90 leading-snug">
                      <Check className="w-3.5 h-3.5 text-[#42c9a8] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Deliverable & Action */}
              <div className="pt-4 border-t border-[rgba(243,240,230,0.06)]">
                <div className="mb-4">
                  <span className="text-[10px] uppercase tracking-wider text-[#6f7a74] block font-semibold">
                    Ideal Outcome:
                  </span>
                  <p className="text-[11px] text-[#aab3ac] mt-0.5 leading-snug">
                    {service.idealFor}
                  </p>
                </div>

                <button
                  onClick={() => onInquire(`${service.title} Inquiry`)}
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider text-[#f3f0e6] hover:text-[#050f0b] bg-[#17221d] hover:bg-[#42c9a8] border border-[rgba(243,240,230,0.12)] hover:border-transparent transition-all duration-200 text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
