export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  location: string;
  shortSummary: string;
  challenge: string;
  solution: string;
  outcome: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  previewType: 'website' | 'ecommerce' | 'system';
  image?: string;
  imageWebp?: string;
}

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  points: string[];
  idealFor: string;
  deliverable: string;
  badge: string;
}

export interface SkillCategory {
  title: string;
  category: string;
  skills: { name: string; certified?: boolean; level: string }[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'ven-technologies',
    title: 'VEN Technologies',
    category: 'Web & E-Commerce',
    client: 'VEN Technologies & Advisory',
    location: 'Port Harcourt, Nigeria',
    shortSummary: 'High-performance business website & digital infrastructure for an engineering strategy & technology advisory firm.',
    challenge: 'VEN Technologies needed a credible, high-performing digital presence capable of clearly communicating its engineering and technology advisory services to enterprise clients and international partners without corporate fluff.',
    solution: 'Designed and engineered a custom, lightweight web platform from the ground up with bespoke service architecture, dark-mode design system, sub-second load times, and localized compliance documentation.',
    outcome: 'Delivered an authoritative digital platform with instant responsiveness, 100% mobile perfection, and automated contact routing that converted high-intent business enquiries.',
    tags: ['Custom Architecture', 'Responsive UI', 'Design System', 'Performance', 'SEO Ready'],
    metrics: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'First Load Time', value: '< 0.8s' },
      { label: 'Mobile Conversion', value: '+42%' }
    ],
    accentColor: '#2ea88a',
    previewType: 'website',
    imageWebp: `${import.meta.env.BASE_URL}images/ven-technologies.webp`,
    image: `${import.meta.env.BASE_URL}images/ven-technologies.jpg`
  },
  {
    id: 'littlenest',
    title: 'LittleNest Kids Essentials',
    category: 'Web & E-Commerce',
    client: 'LittleNest Retail Store',
    location: 'Nigeria & West Africa',
    shortSummary: 'Streamlined online storefront engineered for seamless mobile catalog browsing and effortless checkout.',
    challenge: 'An expanding children’s essentials retail brand had an unorganized catalog causing high checkout abandonment, cluttered mobile navigation, and delayed customer ordering.',
    solution: 'Restructured the product taxonomy, built a mobile-first visual catalog with lightning-fast category switching, intuitive cart flow, and direct WhatsApp order confirmation for West African shoppers.',
    outcome: 'A frictionless purchasing journey that reduced browsing drop-offs, lowered support requests, and drove immediate repeat orders across mobile devices.',
    tags: ['E-Commerce', 'Product Catalog', 'Mobile Checkout', 'WhatsApp API', 'UX Optimization'],
    metrics: [
      { label: 'Mobile Traffic Share', value: '88%' },
      { label: 'Browse to Cart', value: '+35%' },
      { label: 'Catalog Load Speed', value: '3x Faster' }
    ],
    accentColor: '#cf9f4f',
    previewType: 'ecommerce',
    imageWebp: `${import.meta.env.BASE_URL}images/littlenest-store.webp`,
    image: `${import.meta.env.BASE_URL}images/littlenest-store.jpg`
  },
  {
    id: 'founder-ops',
    title: 'Founder Inbox & Calendar OS',
    category: 'Digital Operations',
    client: 'Multitasking Executive / Founder',
    location: 'Remote',
    shortSummary: 'Centralized workflow automation connecting inbox triage, calendar scheduling, and follow-ups.',
    challenge: 'Managing over 120+ client communications, calendar invites, vendor follow-ups, and project check-ins daily was leading to missed commitments and constant context switching.',
    solution: 'Engineered an integrated triage protocol inside Google Workspace and Microsoft 365 with automated labels, rule-based calendar blockouts, automated reminders, and asynchronous briefing templates.',
    outcome: 'Reclaimed 12+ hours per week of executive time, eliminated missed client follow-ups, and established clean operational visibility.',
    tags: ['Automation', 'Google Workspace', 'Microsoft 365', 'Productivity OS', 'Triage'],
    metrics: [
      { label: 'Time Saved / Week', value: '12+ hrs' },
      { label: 'Inbox Zero Rate', value: '100%' },
      { label: 'Missed Follow-ups', value: '0' }
    ],
    accentColor: '#42c9a8',
    previewType: 'system',
    imageWebp: `${import.meta.env.BASE_URL}images/founder-inbox-os.webp`,
    image: `${import.meta.env.BASE_URL}images/founder-inbox-os.jpg`
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-ecommerce',
    num: '01',
    title: 'Web & E-Commerce',
    subtitle: 'Digital storefronts and company platforms built for speed and sales.',
    points: [
      'Custom business websites engineered for credibility',
      'High-converting e-commerce stores & product catalogs',
      'WordPress architecture & bespoke theme implementation',
      'Responsive design audited across mobile, tablet & desktop',
      'Page speed optimization, Core Web Vitals & technical SEO',
      'Maintenance, hosting setup & ongoing security hardening'
    ],
    idealFor: 'Businesses wanting a digital presence that actually converts visitors.',
    deliverable: 'Complete responsive website with documentation and handover.',
    badge: 'Core Focus'
  },
  {
    id: 'biz-tech-support',
    num: '02',
    title: 'Business Tech & Cloud Support',
    subtitle: 'The foundational tools your team needs to communicate and operate daily.',
    points: [
      'Google Workspace & Microsoft 365 tenant deployment',
      'Domain registration, DNS management & secure business email',
      'Network configuration & Cisco-certified troubleshooting',
      'Remote IT support & rapid workstation issue resolution',
      'Data backup protocols and cloud storage organisation',
      'Vendor management and software license consolidation'
    ],
    idealFor: 'Teams needing rock-solid email, tools, and technical peace of mind.',
    deliverable: 'Secure enterprise cloud setup with zero downtime migration.',
    badge: 'Infrastructure'
  },
  {
    id: 'systems-automation',
    num: '03',
    title: 'Digital Systems & Automation',
    subtitle: 'Eliminate repetitive manual tasks and connect your everyday apps.',
    points: [
      'Custom workflow automation between email, forms & spreadsheets',
      'Executive inbox triage & calendar scheduling systems',
      'Task management setups (Slack, Trello, Asana, Teams, Notion)',
      'Customer enquiry pipelines & automated auto-responders',
      'Python scripting for custom data handling and reports',
      'Process documentation and standard operating procedures'
    ],
    idealFor: 'Founders and managers drowning in admin and duplicate data entry.',
    deliverable: 'Turnkey automated workflow that saves 5–15 hours weekly.',
    badge: 'Efficiency'
  },
  {
    id: 'digital-consulting',
    num: '04',
    title: 'Digital Tech Consulting',
    subtitle: 'Practical technology advisory without jargon or unnecessary costs.',
    points: [
      'Technology stack audits for startups and growing companies',
      'Vendor and software tool evaluation before you commit money',
      'Roadmapping digital transformation on realistic budgets',
      'Security posture review and team best-practice coaching',
      'Fractional technical lead support for non-technical founders'
    ],
    idealFor: 'Leaders who need an honest expert to tell them what tech to use and what to skip.',
    deliverable: 'Actionable technology roadmap with clear steps and recommendations.',
    badge: 'Advisory'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Development & Engineering',
    category: 'Frontend & Code',
    skills: [
      { name: 'HTML5, Modern CSS3 & JavaScript', level: 'Production-ready' },
      { name: 'WordPress Core & Theme Building', level: 'Expert builder' },
      { name: 'Python Programming', certified: true, level: 'Certified' },
      { name: 'Cisco Networking & Routing', certified: true, level: 'Certified' },
      { name: 'Git & Version Control', level: 'Proficient' },
      { name: 'Responsive Web Design', certified: true, level: 'Certified' }
    ]
  },
  {
    title: 'Technical Support & Cloud',
    category: 'Infrastructure',
    skills: [
      { name: 'Google Workspace Administration', level: 'Advanced' },
      { name: 'Microsoft 365 & Exchange Online', level: 'Advanced' },
      { name: 'DNS, Domains & SSL Configuration', level: 'Production' },
      { name: 'Network Troubleshooting & Diagnostics', certified: true, level: 'Certified' },
      { name: 'Remote Technical Resolution', level: 'Rapid SLA' },
      { name: 'Data Security & Cloud Backups', level: 'Hardened' }
    ]
  },
  {
    title: 'Digital Operations & Ops',
    category: 'Workflows & Process',
    skills: [
      { name: 'Executive Virtual Assistance', certified: true, level: 'Certified' },
      { name: 'Customer Relations Management', certified: true, level: 'Certified' },
      { name: 'Technical Writing & Documentation', level: 'Clear & Thorough' },
      { name: 'Asana, Trello, Slack & Teams', level: 'System Setup' },
      { name: 'Zapier / Make Automation Logic', level: 'Workflow Builder' },
      { name: 'E-commerce Store Operations', level: 'End-to-End' }
    ]
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    lead: 'Diagnosing the real business problem',
    desc: 'We start with a straightforward call or message. We look at your current workflow, what is broken, what your goals are, and the exact constraints.'
  },
  {
    step: '02',
    title: 'Plan',
    lead: 'Selecting the right scope and tools',
    desc: 'I present a lean, practical plan detailing the recommended technology, timeline, and exact scope. No bloated features you will never use.'
  },
  {
    step: '03',
    title: 'Build',
    lead: 'Disciplined development & setup',
    desc: 'I write the code, configure the platforms, connect the integrations, and test relentlessly across mobile, tablet, and desktop environments.'
  },
  {
    step: '04',
    title: 'Launch',
    lead: 'Smooth deployment & complete handover',
    desc: 'We go live with verified DNS, SSL, and analytics. I train you and your team with concise screen recordings or written documentation.'
  },
  {
    step: '05',
    title: 'Support',
    lead: 'Long-term reliability beyond day one',
    desc: 'Technology is an ongoing asset. I remain on call for maintenance, updates, technical troubleshooting, and new iterations as your business grows.'
  }
];

export const WORKING_GUARANTEES = [
  {
    title: 'Zero Vendor Lock-in',
    desc: 'You own 100% of your domains, code, accounts, and credentials. Full admin access is handed over upon project completion with zero proprietary hold.'
  },
  {
    title: 'Thorough Documentation',
    desc: 'No mysterious black boxes. You get clear instructions, video walkthroughs, and simple guidelines so anyone on your team can manage the setup.'
  },
  {
    title: 'Mobile-First Scaling',
    desc: 'Every layout is tested on real mobile viewports, orientations, and low-bandwidth connections. Nothing clips, overflows, or breaks on small screens.'
  },
  {
    title: 'Business-First Advice',
    desc: 'If a free or simpler tool can solve your problem better than an expensive custom build, I will tell you directly. Practicality always comes first.'
  }
];

export const TARGET_CLIENTS = [
  {
    title: 'Startups & Founders',
    role: 'New Ventures',
    desc: 'Establish a credible digital presence and clean communication infrastructure from day one.'
  },
  {
    title: 'Growing Businesses',
    role: 'SMEs & Agencies',
    desc: 'Upgrade messy tools, fix unreliable websites, and automate internal operational bottlenecks.'
  },
  {
    title: 'Independent Professionals',
    role: 'Consultants & Experts',
    desc: 'Stand out with an authoritative portfolio, custom email domain, and automated booking.'
  },
  {
    title: 'E-commerce Brands',
    role: 'Retail & Consumer',
    desc: 'Speed up product catalogs, reduce mobile cart abandonment, and streamline customer order flows.'
  },
  {
    title: 'Distributed Teams',
    role: 'Organizations',
    desc: 'Standardize Google Workspace or Microsoft 365 setups, team permissions, and remote tech support.'
  }
];

export interface CertificationItem {
  id: string;
  name: string;
  credential: string;
  category: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
  { id: 'python', name: 'Python Programming', credential: 'Certified', category: 'Programming' },
  { id: 'cisco', name: 'Cisco Networking & Routing', credential: 'Certified', category: 'Infrastructure' },
  { id: 'web-design', name: 'Responsive Web Design', credential: 'Certified', category: 'Frontend' },
  { id: 'network', name: 'Network Troubleshooting & Diagnostics', credential: 'Certified', category: 'Support' },
  { id: 'va', name: 'Executive Virtual Assistance', credential: 'Certified', category: 'Operations' },
  { id: 'crm', name: 'Customer Relations Management', credential: 'Certified', category: 'Client Success' },
];
