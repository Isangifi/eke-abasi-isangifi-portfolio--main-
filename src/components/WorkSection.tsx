import React, { useState } from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { CASE_STUDIES, CaseStudy } from '../data/portfolioData';

interface WorkSectionProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
  onInquire: (subject: string) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectCaseStudy, onInquire }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredStudies = filter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((s) => s.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="work" className="py-20 lg:py-28 relative scroll-mt-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with scroll reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-[#42c9a8] mb-3">
              <span className="w-5 h-[1.5px] bg-[#42c9a8]" aria-hidden="true" />
              <span>Selected Client Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-display text-[#f3f0e6] tracking-tight">
              Work that holds up under real use.
            </h2>
            <p className="mt-3 text-base text-[#aab3ac] leading-relaxed">
              Recent client projects spanning responsive websites, commercial e-commerce, and executive digital operations — built for reliability, speed, and real business results.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="flex items-center p-1 bg-[#121c18] border border-[rgba(243,240,230,0.08)] rounded-lg self-start md:self-end">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#20332b] text-[#f3f0e6] shadow-sm'
                  : 'text-[#aab3ac] hover:text-[#f3f0e6]'
              }`}
            >
              All Projects ({CASE_STUDIES.length})
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                filter === 'web'
                  ? 'bg-[#20332b] text-[#f3f0e6] shadow-sm'
                  : 'text-[#aab3ac] hover:text-[#f3f0e6]'
              }`}
            >
              Web &amp; Storefronts
            </button>
            <button
              onClick={() => setFilter('operations')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                filter === 'operations'
                  ? 'bg-[#20332b] text-[#f3f0e6] shadow-sm'
                  : 'text-[#aab3ac] hover:text-[#f3f0e6]'
              }`}
            >
              Digital Operations
            </button>
          </div>
        </motion.div>

        {/* Case Studies List with staggered scroll animation */}
        <div className="space-y-10 lg:space-y-14">
          {filteredStudies.map((study, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group relative rounded-2xl border border-[rgba(243,240,230,0.09)] hover:border-[rgba(243,240,230,0.22)] bg-gradient-to-br from-[#121a17] via-[#101714] to-[#0a0f0d] p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#2ea88a]/05"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}>
                  
                  {/* Content Column */}
                  <div className={`lg:col-span-6 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    {/* Unboxed Kicker */}
                    <div className="text-xs uppercase tracking-widest font-bold text-[#cf9f4f] mb-2.5">
                      {study.category} · {study.client}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold font-serif-display text-[#f3f0e6] mb-3 group-hover:text-[#42c9a8] transition-colors">
                      {study.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#aab3ac] mb-6 leading-relaxed">
                      {study.shortSummary}
                    </p>


                    {/* Clean unboxed tags with · separator */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#6f7a74] mb-6">
                      {study.tags.map((tag, idx) => (
                        <React.Fragment key={tag}>
                          <span>{tag}</span>
                          {idx < study.tags.length - 1 && (
                            <span className="text-[#3b4540]" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Action Row */}
                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => onSelectCaseStudy(study)}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#42c9a8] hover:text-[#5ce2c0] transition-colors cursor-pointer"
                      >
                        <span>View Full Breakdown</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <span className="text-[#6f7a74] hidden sm:inline" aria-hidden="true">·</span>

                      <button
                        onClick={() => onInquire(`Project like ${study.title}`)}
                        className="text-xs text-[#aab3ac] hover:text-[#f3f0e6] underline underline-offset-4 transition-colors cursor-pointer"
                      >
                        Ask about a project like this →
                      </button>
                    </div>

                  </div>

                  {/* Visual Preview Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div 
                      onClick={() => onSelectCaseStudy(study)}
                      className="relative rounded-xl overflow-hidden bg-[#0c1411] border border-[rgba(243,240,230,0.12)] shadow-xl cursor-pointer group/preview transition-transform duration-300 hover:scale-[1.01]"
                    >
                      {/* Interactive Visual Canvas / Image Placeholder Container */}
                      <div className="relative aspect-[16/10] sm:aspect-[4/3] bg-gradient-to-br from-[#131f1a] to-[#0a100d] overflow-hidden">
                        {study.image ? (
                          <picture>
                            {study.imageWebp && (
                              <source srcSet={study.imageWebp} type="image/webp" />
                            )}
                            <img
                              src={study.image}
                              alt={`${study.title} preview`}
                              referrerPolicy="no-referrer"
                              loading="lazy"
                              decoding="async"
                              width="600"
                              height="450"
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/preview:scale-[1.03]"
                            />
                          </picture>
                        ) : (
                          <div className="h-full p-6 sm:p-8 flex flex-col justify-between">
                            {/* Background subtle geometry */}
                            <div 
                              className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-2xl opacity-20 pointer-events-none"
                              style={{ backgroundColor: study.accentColor }}
                            />

                            {/* Top tag & logo mockup */}
                            <div className="flex items-center justify-between">
                              <div className="text-base sm:text-lg font-bold font-serif-display text-[#f3f0e6]">
                                {study.title}
                              </div>
                              <span className="text-[10px] font-mono text-[#aab3ac] bg-[#14211c] px-2 py-0.5 rounded border border-[rgba(243,240,230,0.08)]">
                                Image Placeholder
                              </span>
                            </div>

                            {/* Middle UI graphic mockup */}
                            <div className="my-auto py-4">
                              <div className="p-4 rounded-lg bg-[#0e1713]/85 border border-[rgba(243,240,230,0.06)] backdrop-blur-sm">
                                <div className="text-xs text-[#cf9f4f] font-semibold mb-1">
                                  {study.category} Architecture
                                </div>
                                <div className="text-xs text-[#aab3ac] leading-relaxed line-clamp-2">
                                  {study.shortSummary}
                                </div>
                              </div>
                            </div>

                            {/* Bottom metrics strip inside preview */}
                            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[rgba(243,240,230,0.06)]">
                              {study.metrics.map((m) => (
                                <div key={m.label} className="text-center">
                                  <div className="text-xs sm:text-sm font-bold font-serif-display text-[#f3f0e6]">
                                    {m.value}
                                  </div>
                                  <div className="text-[9px] text-[#6f7a74] uppercase tracking-wider truncate">
                                    {m.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Hover overlay hint */}
                        <div className="absolute inset-0 bg-[#0a0f0d]/70 backdrop-blur-[2px] opacity-0 group-hover/preview:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <span className="px-4 py-2 rounded-lg bg-[#20332b] text-xs font-semibold text-[#f3f0e6] flex items-center gap-1.5 border border-[#42c9a8]/40 shadow-lg">
                            <span>Inspect Case Study</span>
                            <ExternalLink className="w-3.5 h-3.5 text-[#42c9a8]" />
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
