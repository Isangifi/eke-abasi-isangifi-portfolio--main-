import React from 'react';
import { motion } from 'framer-motion';

export const WhoIWorkWith: React.FC = () => {
  const clients = [
    {
      num: '01',
      title: 'Startups',
      desc: 'Build a credible digital foundation from the beginning.',
    },
    {
      num: '02',
      title: 'Growing Businesses',
      desc: 'Improve the systems and technology supporting everyday operations.',
    },
    {
      num: '03',
      title: 'Professionals',
      desc: 'Build a strong digital presence and the tools needed to work efficiently.',
    },
    {
      num: '04',
      title: 'E-commerce Businesses',
      desc: 'Create and improve online stores and digital customer experiences.',
    },
    {
      num: '05',
      title: 'Organisations',
      desc: 'Set up, connect and support the technology teams rely on.',
    },
  ];

  return (
    <section id="who" className="py-20 lg:py-24 relative scroll-mt-20 border-b border-[rgba(243,240,230,0.08)] bg-[#0d1411] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with scroll reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-2xl mb-12"
        >
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-[#42c9a8] mb-3">
            <span className="w-5 h-[1.5px] bg-[#42c9a8]" aria-hidden="true" />
            <span>Clients</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-display text-[#f3f0e6] tracking-tight">
            Who I work with.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#aab3ac] leading-relaxed">
            People and businesses who need technology that works without unnecessary complexity.
          </p>
        </motion.div>

        {/* 5-Item Simple Cards Grid with staggered scroll reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {clients.map((c, index) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="p-6 rounded-xl bg-[#121a17] border border-[rgba(243,240,230,0.08)] hover:border-[rgba(243,240,230,0.18)] transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-serif-display text-2xl font-bold text-[#42c9a8] block mb-3">
                  {c.num}
                </span>
                <h3 className="text-lg font-bold font-serif-display text-[#f3f0e6] mb-2">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#aab3ac] leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
