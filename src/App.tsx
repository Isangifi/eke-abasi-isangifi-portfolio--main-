import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CertificationsStrip } from './components/CertificationsStrip';
import { AboutSection } from './components/AboutSection';
import { WorkSection } from './components/WorkSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { WhoIWorkWith } from './components/WhoIWorkWith';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ProjectScopeModal } from './components/ProjectScopeModal';
import { CaseStudy } from './data/portfolioData';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isScopeModalOpen, setIsScopeModalOpen] = useState<boolean>(false);
  const [selectedScopeService, setSelectedScopeService] = useState<string>('');

  const handleOpenScope = (service?: string) => {
    setSelectedScopeService(service || '');
    setIsScopeModalOpen(true);
  };

  const scrollToWork = () => {
    const workEl = document.getElementById('work');
    if (workEl) {
      workEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[#0a0f0d] text-[#f3f0e6] font-sans-body selection:bg-[#2ea88a] selection:text-[#08110d] flex flex-col justify-between">
      {/* Primary Top Bar */}
      <Navbar onStartProject={() => handleOpenScope()} />

      {/* Main Content Area arranged in user's exact requested order */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero 
          onStartProject={() => handleOpenScope()} 
          onViewWork={scrollToWork} 
        />

        {/* 2. Horizontal Strip holding 6 Professional Certifications */}
        <CertificationsStrip />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Selected Client Work with Image Placeholders */}
        <WorkSection 
          onSelectCaseStudy={(study) => setSelectedCaseStudy(study)} 
          onInquire={(service) => handleOpenScope(service)} 
        />

        {/* 5. Skills & Certifications Section */}
        <SkillsSection />

        {/* 6. Services Pillars */}
        <ServicesSection 
          onInquire={(service) => handleOpenScope(service)} 
        />

        {/* 7. How It Works / Process (Simple Design) */}
        <ProcessSection />

        {/* 8. Who I Work With (Simple Design) */}
        <WhoIWorkWith />

        {/* 9. Standalone Contact Section */}
        <ContactSection onStartProject={() => handleOpenScope()} />
      </main>

      {/* Site Footer with requested horizontal layout */}
      <Footer />

      {/* Case Study Full Breakdown Lightbox Modal */}
      <CaseStudyModal 
        caseStudy={selectedCaseStudy} 
        onClose={() => setSelectedCaseStudy(null)} 
        onInquire={(service) => handleOpenScope(service)} 
      />

      {/* Standalone Project Scope & Inquiry Builder Modal */}
      <ProjectScopeModal 
        isOpen={isScopeModalOpen} 
        onClose={() => setIsScopeModalOpen(false)} 
        initialService={selectedScopeService} 
      />
    </div>
  );
}
