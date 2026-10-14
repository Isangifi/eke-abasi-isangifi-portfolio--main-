import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaseStudy } from '../data/portfolioData';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onInquire: (subject: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {caseStudy && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full max-w-4xl bg-[#101815] border border-[rgba(243,240,230,0.14)] rounded-2xl shadow-2xl overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(243,240,230,0.08)] bg-[#0d1411]">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#cf9f4f]">
              Case Study
            </span>
            <span className="text-xs text-[#6f7a74]">/</span>
            <span className="text-xs font-medium text-[#aab3ac]">
              {caseStudy.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#aab3ac] hover:text-[#f3f0e6] hover:bg-[#1b2722] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          
          {/* Title & Metadata */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-display text-[#f3f0e6] mb-2">
              {caseStudy.title}
            </h2>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#aab3ac]">
              <span>Client: <strong className="text-[#f3f0e6]">{caseStudy.client}</strong></span>
              <span className="text-[#6f7a74]" aria-hidden="true">·</span>
              <span>Location: {caseStudy.location}</span>
            </div>
            <p className="mt-4 text-sm sm:text-base text-[#aab3ac] leading-relaxed">
              {caseStudy.shortSummary}
            </p>
          </div>

          {/* Optional real project image if available */}
          {caseStudy.image && (
            <div className="mb-8 rounded-xl overflow-hidden border border-[rgba(243,240,230,0.12)] shadow-xl bg-[#0c1411]">
              <picture>
                {caseStudy.imageWebp && (
                  <source srcSet={caseStudy.imageWebp} type="image/webp" />
                )}
                <img
                  src={caseStudy.image}
                  alt={`${caseStudy.title} screenshot`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </picture>
            </div>
          )}


          {/* Deep-Dive Grid: Challenge, Solution, Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 rounded-xl bg-[#141f1a] border border-[rgba(243,240,230,0.06)]">
              <h3 className="text-xs uppercase tracking-wider font-bold text-[#cf9f4f] mb-2">
                01. The Challenge
              </h3>
              <p className="text-xs sm:text-sm text-[#aab3ac] leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#141f1a] border border-[rgba(243,240,230,0.06)]">
              <h3 className="text-xs uppercase tracking-wider font-bold text-[#42c9a8] mb-2">
                02. What I Implemented
              </h3>
              <p className="text-xs sm:text-sm text-[#aab3ac] leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#141f1a] border border-[rgba(243,240,230,0.06)]">
              <h3 className="text-xs uppercase tracking-wider font-bold text-[#f3f0e6] mb-2">
                03. The Result
              </h3>
              <p className="text-xs sm:text-sm text-[#aab3ac] leading-relaxed">
                {caseStudy.outcome}
              </p>
            </div>
          </div>

          {/* Technology Tags */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-wider text-[#6f7a74] font-semibold mb-2.5">
              Technologies &amp; Architecture
            </h4>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#aab3ac]">
              {caseStudy.tags.map((tag, idx) => (
                <React.Fragment key={tag}>
                  <span>{tag}</span>
                  {idx < caseStudy.tags.length - 1 && (
                    <span className="text-[#6f7a74]" aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Modal Footer Call-to-action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[rgba(243,240,230,0.08)] bg-[#0c1410] -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 sm:p-8">
            <div>
              <div className="text-sm font-bold text-[#f3f0e6]">
                Need a similar system built for your company?
              </div>
              <div className="text-xs text-[#aab3ac]">
                I can scope your requirements and provide an honest estimate.
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onInquire(`Project like ${caseStudy.title}`);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#2ea88a] to-[#1f8e73] text-[#050f0b] rounded transition-all duration-200 hover:brightness-110 shadow-md shadow-[#2ea88a]/20 whitespace-nowrap cursor-pointer"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
  );
};
