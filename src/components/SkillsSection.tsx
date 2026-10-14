import React from 'react';
import { motion } from 'framer-motion';

export const SkillsSection: React.FC = () => {
  const skillGroups = [
    {
      title: 'Development',
      skills: [
        { name: 'HTML5, CSS3 & JavaScript', certified: false },
        { name: 'WordPress site building', certified: false },
        { name: 'Python Programming', certified: true },
        { name: 'Cisco Networking', certified: true },
      ],
    },
    {
      title: 'Technical Support',
      skills: [
        { name: 'Network & infrastructure troubleshooting', certified: false },
        { name: 'Tool & platform support', certified: false },
        { name: 'Remote issue resolution', certified: false },
        { name: 'Ongoing technical maintenance', certified: false },
      ],
    },
    {
      title: 'Digital Operations',
      skills: [
        { name: 'Web Design', certified: true },
        { name: 'Virtual Assistance', certified: true },
        { name: 'Customer Relations', certified: true },
        { name: 'Teams, Slack, Trello, Asana, Meet', certified: false },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#0d1411] border-b border-[rgba(243,240,230,0.08)] relative scroll-mt-20 overflow-hidden">
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
            <span>Skills &amp; certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-display text-[#f3f0e6] tracking-tight">
            What I bring to a project.
          </h2>
        </motion.div>

        {/* 3-Column Skill Groups with staggered scroll animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {skillGroups.map((group, groupIdx) => (
            <motion.div 
              key={group.title} 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: groupIdx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col p-6 rounded-2xl bg-[#121c17]/60 border border-[rgba(243,240,230,0.06)]"
            >
              <h3 className="text-lg font-bold font-serif-display text-[#e6b968] mb-5 pb-3 border-b border-[rgba(243,240,230,0.08)]">
                {group.title}
              </h3>

              <ul className="space-y-4">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="relative pl-5 text-sm sm:text-base text-[#aab3ac] flex items-center justify-between">
                    <span 
                      className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-[#42c9a8]" 
                      aria-hidden="true" 
                    />
                    <span>{skill.name}</span>
                    {skill.certified && (
                      <span className="text-[10px] font-mono uppercase text-[#e6b968] bg-[#1d261e] px-2 py-0.5 rounded border border-[#e6b968]/30 shrink-0 ml-2">
                        Certified
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
