import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Mail, Phone } from 'lucide-react';

interface NavbarProps {
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Who I Work With', href: '#who', id: 'who' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'work', 'skills', 'services', 'process', 'who', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('top');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0f0d]/90 backdrop-blur-md border-b border-[rgba(243,240,230,0.08)] py-3.5 shadow-lg shadow-black/20'
            : 'bg-[#0a0f0d]/60 backdrop-blur-sm border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Wordmark Brand */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-1 text-xl font-bold tracking-tight text-[#f3f0e6] font-serif-display whitespace-nowrap shrink-0 hover:text-white transition-colors"
          >
            <span>Isangifi</span>
            <span className="text-[#42c9a8] transition-transform duration-300 group-hover:scale-125">.</span>
          </a>

          {/* Zone 2: Navigation Links (Ordered: About, Work, Skills, Services, Process, Who I Work With, Contact) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#aab3ac]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 text-xs sm:text-sm ${
                    isActive ? 'text-[#f3f0e6] font-semibold' : 'hover:text-[#f3f0e6]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#42c9a8] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Start a Project opens the Project Scope & Inquiry Builder */}
            <button
              onClick={onStartProject}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-wide uppercase bg-gradient-to-r from-[#2ea88a] to-[#22836b] hover:from-[#35be9c] hover:to-[#299b7f] text-[#07130f] rounded transition-all duration-200 shadow-md shadow-[#2ea88a]/20 hover:shadow-lg hover:shadow-[#2ea88a]/30 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center p-2 rounded text-[#aab3ac] hover:text-[#f3f0e6] hover:bg-[#141f1a] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden fixed inset-x-0 bottom-0 z-50 bg-[#0a0f0d]/98 backdrop-blur-xl border-b border-[rgba(243,240,230,0.12)] flex flex-col gap-6 p-6 overflow-y-auto animate-in fade-in duration-200 ${scrolled ? 'top-[68px]' : 'top-20'}`}>
          <div className="flex flex-col gap-1.5">
            <div className="text-xs uppercase tracking-widest text-[#cf9f4f] font-semibold mb-2 px-3">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`flex items-center justify-between py-2.5 px-3.5 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#15231e] text-[#42c9a8] font-semibold'
                    : 'text-[#f3f0e6] hover:bg-[#121c18]'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#6f7a74]">→</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[rgba(243,240,230,0.08)] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#2ea88a] to-[#22836b] text-[#07130f] rounded-lg shadow-lg shadow-[#2ea88a]/20 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2 mt-1">
              <a
                href="mailto:eisangifi@gmail.com"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded text-xs font-semibold text-[#aab3ac] hover:text-[#f3f0e6] bg-[#121c18] border border-[rgba(243,240,230,0.08)]"
              >
                <Mail className="w-3.5 h-3.5 text-[#42c9a8]" />
                <span>Email</span>
              </a>
              <a
                href="tel:+2348133869304"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded text-xs font-semibold text-[#aab3ac] hover:text-[#f3f0e6] bg-[#121c18] border border-[rgba(243,240,230,0.08)]"
              >
                <Phone className="w-3.5 h-3.5 text-[#cf9f4f]" />
                <span>Call</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
