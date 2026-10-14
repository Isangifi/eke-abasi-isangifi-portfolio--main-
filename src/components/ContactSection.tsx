import React, { useState } from 'react';
import { Copy, Check, MessageSquare, ArrowUpRight, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { sendDirectInquiry } from '../utils/sendInquiry';

interface ContactSectionProps {
  onStartProject?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onStartProject }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Quick direct message form state
  const [name, setName] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [message, setMessage] = useState('');
  const [sendState, setSendState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  const email = 'eisangifi@gmail.com';
  const phone = '+234 813 386 9304';

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!name.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.trim() || !emailRegex.test(emailInput.trim())) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!message.trim()) {
      setFormError('Please enter a short message or question.');
      return;
    }

    setSendState('sending');

    const result = await sendDirectInquiry({
      name,
      email: emailInput,
      message,
      service: 'Direct Message from Contact Section',
      timeline: 'Standard',
    });

    if (result.success) {
      setSendState('success');
      setName('');
      setEmailInput('');
      setMessage('');
      setTimeout(() => setSendState('idle'), 6000);
    } else {
      setSendState('error');
      setFormError(result.message || 'Could not send message. Please reach out via WhatsApp or email directly.');
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative scroll-mt-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Card with scroll entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#121c17] via-[#101915] to-[#0a0f0d] border border-[rgba(243,240,230,0.14)] shadow-2xl overflow-hidden"
        >
          
          {/* Subtle Ambient Glow */}
          <div 
            className="absolute -bottom-24 -right-24 w-96 h-96 bg-radial from-[#cf9f4f]/15 to-transparent rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Heading, Description & Action */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-[#42c9a8] mb-3">
                <span className="w-5 h-[1.5px] bg-[#42c9a8]" aria-hidden="true" />
                <span>Contact &amp; Inquiries</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-display text-[#f3f0e6] mb-5 tracking-tight [text-wrap:balance]">
                Have a business problem technology can solve?
              </h2>

              <p className="text-base sm:text-lg text-[#aab3ac] leading-relaxed max-w-[54ch] mb-6">
                Tell me what you're trying to build, fix, improve or automate. I'll help you figure out the most practical way forward — website, e-commerce, business technology, technical support, digital systems, or ongoing maintenance.
              </p>

              {/* Direct Reachability Information */}
              <div className="space-y-4 pt-4 border-t border-[rgba(243,240,230,0.1)]">
                {/* Email Link */}
                <div className="group flex items-center justify-between pb-2 border-b border-[rgba(243,240,230,0.12)] transition-colors hover:border-[#42c9a8]">
                  <a
                    href={`mailto:${email}`}
                    className="text-base sm:text-lg font-bold text-[#f3f0e6] group-hover:text-[#42c9a8] transition-colors truncate pr-3"
                  >
                    {email}
                  </a>
                  <button
                    onClick={() => copyToClipboard(email, 'email')}
                    className="p-1.5 text-[#6f7a74] hover:text-[#42c9a8] transition-colors cursor-pointer shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#42c9a8]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Link */}
                <div className="group flex items-center justify-between pb-2 border-b border-[rgba(243,240,230,0.12)] transition-colors hover:border-[#42c9a8]">
                  <a
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="text-base sm:text-lg font-bold text-[#f3f0e6] group-hover:text-[#42c9a8] transition-colors truncate pr-3 font-mono"
                  >
                    {phone}
                  </a>
                  <button
                    onClick={() => copyToClipboard(phone, 'phone')}
                    className="p-1.5 text-[#6f7a74] hover:text-[#42c9a8] transition-colors cursor-pointer shrink-0"
                    title="Copy phone number to clipboard"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-[#42c9a8]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp Link & Availability */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <a
                    href={`https://wa.me/2348133869304?text=${encodeURIComponent('Hello Eke-Abasi, I have a project inquiry and would like to discuss it with you.')}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#aab3ac] hover:text-[#42c9a8] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#42c9a8]" />
                    <span>Message on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <div className="flex items-center gap-2 text-xs text-[#42c9a8] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#42c9a8] shadow-sm shadow-[#42c9a8] animate-pulse" />
                    <span>Available for new projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Quick Contact Form */}
            <div className="lg:col-span-6 bg-[#0e1713]/90 border border-[rgba(243,240,230,0.12)] rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
              <div className="mb-5 pb-3 border-b border-[rgba(243,240,230,0.08)]">
                <span className="text-xs uppercase tracking-widest font-bold text-[#e6b968] block mb-1">
                  Send a Direct Message
                </span>
                <p className="text-xs text-[#aab3ac]">
                </p>
              </div>

              {sendState === 'success' ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#183126] border border-[#42c9a8]/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7 text-[#42c9a8]" />
                  </div>
                  <h3 className="text-lg font-bold font-serif-display text-[#f3f0e6]">
                    Message Sent Directly!
                  </h3>
                  <p className="text-xs text-[#aab3ac] max-w-xs mx-auto">
                    Thank you! Your message has been sent directly to <span className="text-[#42c9a8]">eisangifi@gmail.com</span>. I will respond to your email within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-2.5 rounded bg-[#2a1414] border border-[#ff6b6b]/30 text-xs text-[#ff8e8e]">
                      {formError}
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#aab3ac] mb-1.5">
                      Your Name <span className="text-[#42c9a8]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a100d] border border-[rgba(243,240,230,0.12)] text-xs text-[#f3f0e6] placeholder-[#6f7a74] focus:outline-none focus:border-[#42c9a8] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#aab3ac] mb-1.5">
                      Your Email <span className="text-[#42c9a8]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a100d] border border-[rgba(243,240,230,0.12)] text-xs text-[#f3f0e6] placeholder-[#6f7a74] focus:outline-none focus:border-[#42c9a8] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#aab3ac] mb-1.5">
                      Message / Project Goal <span className="text-[#42c9a8]">*</span>
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe what you need assistance with..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a100d] border border-[rgba(243,240,230,0.12)] text-xs text-[#f3f0e6] placeholder-[#6f7a74] focus:outline-none focus:border-[#42c9a8] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sendState === 'sending'}
                    className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#2ea88a] to-[#22836b] hover:from-[#35be9c] hover:to-[#299b7f] text-xs font-bold uppercase tracking-wider text-[#050f0b] transition-all cursor-pointer shadow-md shadow-[#2ea88a]/20 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sendState === 'sending' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#050f0b]" />
                        <span>Sending Directly...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message Directly</span>
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
