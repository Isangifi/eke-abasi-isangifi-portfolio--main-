import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Layers, 
  Clock, 
  Loader2, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendDirectInquiry } from '../utils/sendInquiry';

interface ProjectScopeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ProjectScopeModal: React.FC<ProjectScopeModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const projectTypes = [
    'Websites & E-Commerce',
    'Business Tech & Cloud Support',
    'Digital Systems & Automation',
    'Technical Support & Diagnostics',
    'General Technology Consultation',
  ];

  const timelines = [
    'Urgent (< 2 weeks)',
    '2 – 4 weeks',
    '1 – 2 months',
    'Flexible timeline',
  ];

  const [selectedType, setSelectedType] = useState<string>(
    initialService || projectTypes[0]
  );
  const [selectedTimeline, setSelectedTimeline] = useState<string>(timelines[1]);
  const [projectDescription, setProjectDescription] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [validationError, setValidationError] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (initialService) {
      const match = projectTypes.find((t) =>
        t.toLowerCase().includes(initialService.toLowerCase())
      );
      if (match) setSelectedType(match);
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const generateBriefText = () => {
    const lines = [
      `--- PROJECT SCOPE & INQUIRY BRIEF ---`,
      `Service / Category: ${selectedType}`,
      `Preferred Timeline: ${selectedTimeline}`,
    ];
    if (clientName.trim()) lines.push(`Client Name: ${clientName.trim()}`);
    if (clientEmail.trim()) lines.push(`Client Email: ${clientEmail.trim()}`);
    if (clientPhone.trim()) lines.push(`Client Phone/WhatsApp: ${clientPhone.trim()}`);
    if (projectDescription.trim()) {
      lines.push(`\nProject Details & Objectives:\n${projectDescription.trim()}`);
    } else {
      lines.push(`\nProject Details: Looking to discuss requirements and get a project recommendation.`);
    }
    return lines.join('\n');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateBriefText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(generateBriefText());
    window.open(`https://wa.me/2348133869304?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setValidationError('');
    setErrorMessage('');

    // Validation
    if (!clientName.trim()) {
      setValidationError('Please enter your name or company name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!clientEmail.trim() || !emailRegex.test(clientEmail.trim())) {
      setValidationError('Please enter a valid email address so I can reply.');
      return;
    }

    setStatus('submitting');

    const result = await sendDirectInquiry({
      name: clientName,
      email: clientEmail,
      phone: clientPhone,
      service: selectedType,
      timeline: selectedTimeline,
      message: projectDescription.trim() || 'Client requested direct scoping and consultation.',
    });

    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage(result.message || 'Unable to connect to the mail delivery service.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setValidationError('');
    setErrorMessage('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full max-w-2xl bg-[#111915] border border-[rgba(243,240,230,0.15)] rounded-2xl shadow-2xl overflow-hidden my-auto p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 mb-6 border-b border-[rgba(243,240,230,0.08)]">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#42c9a8] mb-1">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Project Scope &amp; Direct Inquiry</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-serif-display text-[#f3f0e6]">
                  Start a Project
                </h2>
                <p className="text-xs sm:text-sm text-[#aab3ac] mt-1">
                  Define what you're looking to build, fix, improve, or automate.
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-[#aab3ac] hover:text-[#f3f0e6] hover:bg-[#192520] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Switch: Success Screen vs Form */}
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="py-4 space-y-6 text-center"
              >
                {/* Success Icon */}
                <div className="w-16 h-16 rounded-full bg-[#183126] border border-[#42c9a8]/40 flex items-center justify-center mx-auto shadow-lg shadow-[#42c9a8]/15">
                  <CheckCircle2 className="w-9 h-9 text-[#42c9a8]" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-serif-display text-[#f3f0e6] mb-2">
                    Inquiry Sent Directly!
                  </h3>
                  <p className="text-sm text-[#aab3ac] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#f3f0e6]">{clientName}</strong>. Your project brief has been sent directly to Eke-Abasi Isangifi (<span className="text-[#42c9a8]">eisangifi@gmail.com</span>).
                  </p>
                </div>

                {/* Submission Receipt Card */}
                <div className="bg-[#0e1613] border border-[rgba(243,240,230,0.1)] rounded-xl p-4.5 text-left text-xs space-y-2 max-w-lg mx-auto">
                  <div className="flex justify-between border-b border-[rgba(243,240,230,0.06)] pb-1.5">
                    <span className="text-[#6f7a74] uppercase tracking-wider font-semibold">Service:</span>
                    <span className="text-[#f3f0e6] font-medium">{selectedType}</span>
                  </div>
                  <div className="flex justify-between border-b border-[rgba(243,240,230,0.06)] pb-1.5">
                    <span className="text-[#6f7a74] uppercase tracking-wider font-semibold">Timeline:</span>
                    <span className="text-[#e6b968] font-medium">{selectedTimeline}</span>
                  </div>
                  <div className="flex justify-between border-b border-[rgba(243,240,230,0.06)] pb-1.5">
                    <span className="text-[#6f7a74] uppercase tracking-wider font-semibold">Contact:</span>
                    <span className="text-[#42c9a8] font-medium">{clientEmail}</span>
                  </div>
                  {projectDescription.trim() && (
                    <div className="pt-1">
                      <span className="text-[#6f7a74] uppercase tracking-wider font-semibold block mb-1">Details:</span>
                      <p className="text-[#aab3ac] italic line-clamp-3 leading-relaxed">
                        "{projectDescription.trim()}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Next Steps Reassurance */}
                <p className="text-xs text-[#6f7a74] max-w-md mx-auto">
                  I review every project brief personally and will respond within 24 hours with practical recommendations and next steps.
                </p>

                {/* Actions */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#1a2922] hover:bg-[#20342b] border border-[rgba(243,240,230,0.14)] text-xs font-semibold text-[#f3f0e6] transition-colors cursor-pointer"
                  >
                    Done &amp; Close
                  </button>

                  <button
                    onClick={handleWhatsApp}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#2ea88a] to-[#22836b] hover:from-[#35be9c] hover:to-[#299b7f] text-xs font-bold uppercase tracking-wider text-[#050f0b] transition-all cursor-pointer shadow-md shadow-[#2ea88a]/20"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Also Message on WhatsApp</span>
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="text-[11px] text-[#6f7a74] hover:text-[#aab3ac] underline transition-colors cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form Body */}
                <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-1">
                  
                  {/* Validation Error Banner */}
                  {validationError && (
                    <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#2a1414] border border-[#ff6b6b]/30 text-xs text-[#ff8e8e]">
                      <AlertCircle className="w-4 h-4 shrink-0 text-[#ff6b6b]" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  {/* Submission Error Banner with instant Fallbacks */}
                  {status === 'error' && (
                    <div className="p-3.5 rounded-lg bg-[#241712] border border-[#e6a23c]/40 text-xs text-[#e6b968] space-y-2">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 text-[#e6a23c]" />
                        <span className="font-semibold">Notice:</span>
                        <span>{errorMessage || 'Direct send did not complete.'}</span>
                      </div>
                      <p className="text-[11px] text-[#aab3ac]">
                        You can retry, or send directly via WhatsApp or copy your brief below so you don't lose any project details:
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => handleSubmit()}
                          className="px-3 py-1 rounded bg-[#2f1f17] hover:bg-[#3d291e] border border-[#e6b968]/30 text-xs font-semibold text-[#f3f0e6] transition-colors cursor-pointer"
                        >
                          Retry Sending
                        </button>
                        <button
                          type="button"
                          onClick={handleWhatsApp}
                          className="px-3 py-1 rounded bg-[#183126] hover:bg-[#1e3e30] border border-[#42c9a8]/30 text-xs font-semibold text-[#42c9a8] transition-colors cursor-pointer"
                        >
                          Send via WhatsApp
                        </button>
                        <button
                          type="button"
                          onClick={handleCopy}
                          className="px-3 py-1 rounded bg-[#16211c] hover:bg-[#1e2c25] border border-[rgba(243,240,230,0.12)] text-xs text-[#aab3ac] transition-colors cursor-pointer"
                        >
                          {copied ? 'Copied!' : 'Copy Brief'}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* 1. Project Type */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#e6b968] mb-2.5">
                      1. What type of work do you need?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedType(type)}
                          className={`text-left p-2.5 rounded-lg border text-xs transition-all cursor-pointer ${
                            selectedType === type
                              ? 'bg-[#182a22] border-[#42c9a8] text-[#f3f0e6] font-semibold shadow-sm shadow-[#42c9a8]/10'
                              : 'bg-[#121c17] border-[rgba(243,240,230,0.08)] text-[#aab3ac] hover:text-[#f3f0e6] hover:border-[rgba(243,240,230,0.18)]'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. Timeline */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#e6b968] mb-2.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>2. Estimated Timeline</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {timelines.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTimeline(time)}
                          className={`p-2 rounded-lg border text-xs text-center transition-all cursor-pointer ${
                            selectedTimeline === time
                              ? 'bg-[#182a22] border-[#42c9a8] text-[#f3f0e6] font-semibold'
                              : 'bg-[#121c17] border-[rgba(243,240,230,0.08)] text-[#aab3ac] hover:text-[#f3f0e6]'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 3. Project Description */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#e6b968] mb-2">
                      3. Project Details &amp; Objectives
                    </label>
                    <textarea
                      rows={3}
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      placeholder="Tell me what you're trying to build, fix, improve, or automate. Any specific platforms or challenges?"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1613] border border-[rgba(243,240,230,0.12)] text-[#f3f0e6] placeholder-[#6f7a74] text-xs focus:outline-none focus:border-[#42c9a8] transition-colors resize-none"
                    />
                  </div>

                  {/* 4. Client Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#aab3ac] mb-1.5">
                        Your Name <span className="text-[#42c9a8]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="John Doe / Company"
                        className="w-full px-3 py-2 rounded-lg bg-[#0e1613] border border-[rgba(243,240,230,0.12)] text-[#f3f0e6] placeholder-[#6f7a74] text-xs focus:outline-none focus:border-[#42c9a8]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#aab3ac] mb-1.5">
                        Your Email <span className="text-[#42c9a8]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-3 py-2 rounded-lg bg-[#0e1613] border border-[rgba(243,240,230,0.12)] text-[#f3f0e6] placeholder-[#6f7a74] text-xs focus:outline-none focus:border-[#42c9a8]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#aab3ac] mb-1.5">
                        Phone / WhatsApp <span className="text-[#6f7a74]">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="+234 ... or local"
                        className="w-full px-3 py-2 rounded-lg bg-[#0e1613] border border-[rgba(243,240,230,0.12)] text-[#f3f0e6] placeholder-[#6f7a74] text-xs focus:outline-none focus:border-[#42c9a8]"
                      />
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="mt-6 pt-4 border-t border-[rgba(243,240,230,0.08)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#14211c] hover:bg-[#1b2b24] border border-[rgba(243,240,230,0.12)] text-xs text-[#aab3ac] hover:text-[#f3f0e6] transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#42c9a8]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied Brief!' : 'Copy Scope Brief'}</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#183126] hover:bg-[#1e3e30] border border-[#2ea88a]/30 text-xs font-semibold text-[#42c9a8] transition-colors cursor-pointer"
                      title="Direct message on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#2ea88a] to-[#22836b] hover:from-[#35be9c] hover:to-[#299b7f] text-xs font-bold uppercase tracking-wider text-[#050f0b] transition-all cursor-pointer shadow-md shadow-[#2ea88a]/20 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#050f0b]" />
                          <span>Sending Directly...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Project Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
