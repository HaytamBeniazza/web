import type { Project } from '../types/index';

export const projectsData: Project[] = [
  {
    title: 'AFTAS (Fishing Competitions)',
    desc: 'Platform to manage competitions with real‑time scoring and analytics.',
    stack: ['Spring Boot', 'Angular', 'MySQL', 'Docker'],
    github: 'https://github.com/HaytamBeniazza/AFTAS',
  },
  {
    title: 'Abris (Property Management)',
    desc: 'Modern property system with advanced search and user dashboard.',
    stack: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS'],
    github: 'https://github.com/HaytamBeniazza/abris',
  },
  {
    title: 'Artisan Cake Studio',
    desc: 'Elegant site with gallery, animations, and responsive design.',
    stack: ['React', 'CSS3'],
  },
  {
    title: 'Restaurant Showcase',
    desc: 'Professional template with menu, reservations, and gallery.',
    stack: ['React', 'JavaScript', 'CSS3'],
  },
  {
    title: 'Auction Platform',
    desc: 'Real‑time bidding, user auth, and comprehensive admin panel.',
    stack: ['Symfony', 'Twig', 'MySQL', 'JavaScript'],
    github: 'https://github.com/HaytamBeniazza/auction-bid',
  },
  {
    title: 'Choco Drip Dreams Cakes',
    desc: 'Elegant cake ordering platform with custom design tools and delivery tracking.',
    stack: ['Laravel', 'Vue.js', 'Tailwind', 'MySQL'],
          github: 'https://github.com/HaytamBeniazza/choco-drip-dreams-cakes',
    },
];

// Professional Experience Data - REAL EXPERIENCE
export const experienceData = [
  {
    id: 1,
    role: 'Full-Stack Developer',
    company: 'Somo Solutions',
    period: 'July 2024 - Present',
    duration: '11 months',
    location: 'Morocco',
    type: 'Full-time',
    achievements: [
      'Architected and developed a complex 65+ table CRM system managing multi-million DH e-commerce operations with 2,000+ monthly orders',
      'Management and mentoring of a junior developer with task assignment, code review, and technical guidance',
      'Developed sophisticated automation workflows for order processing, customer management, real-time analytics, and automated reporting',
      'Training and supervision of 25+ employees across multiple departments with technical documentation and user guides creation',
      'Deployment and configuration of n8n automation platform on company VPS with complex business workflow implementations',
      'Performance optimization of the system with 40% response time improvement and error reduction'
    ],
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'n8n', 'API Development', 'VPS Management', 'Team Leadership'],
    highlights: {
      scale: '65+ database tables',
      revenue: 'Multi-million DH operations',
      orders: '2,000+ monthly orders',
      performance: '40% response improvement'
    }
  },
  {
    id: 2,
    role: 'Salesforce Developer (Internship)',
    company: 'Soft-Innovation',
    period: 'May 2023 - July 2023',
    duration: '3 months',
    location: 'Morocco',
    type: 'Internship',
    achievements: [
      'Developed custom Lightning Web Components and advanced Apex solutions for financial sector enterprise clients',
      'Created complex Omnistudio flows and implemented API integrations with external systems',
      'Close collaboration with functional teams to analyze business requirements and propose innovative technical solutions',
      'Active participation in code reviews and continuous improvement of development practices'
    ],
    technologies: ['Apex', 'Lightning Web Components', 'SOQL', 'Omnistudio', 'API Integration', 'Financial Services'],
    highlights: {
      sector: 'Financial Services',
      components: 'Custom LWC Development',
      integration: 'External API Systems',
      collaboration: 'Cross-functional Teams'
    }
  }
];

// Skills by category for experience section
export const skillCategories = [
  {
    category: 'Backend Development',
    skills: ['Laravel', 'PHP', 'Apex', 'RESTful APIs', 'Database Design', 'VPS Management'],
    icon: '⚙️'
  },
  {
    category: 'Frontend Development',
    skills: ['Vue.js', 'Lightning Web Components', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    icon: '🎨'
  },
  {
    category: 'Database & Storage',
    skills: ['MySQL', 'SOQL', 'Database Architecture', 'Query Optimization', 'Complex Relationships'],
    icon: '🗄️'
  },
  {
    category: 'Automation & Integration',
    skills: ['n8n Workflows', 'API Integration', 'Omnistudio', 'Business Process Automation', 'External Systems'],
    icon: '🔄'
  },
  {
    category: 'Leadership & Management',
    skills: ['Team Leadership', 'Mentoring', 'Code Review', 'Technical Documentation', 'Training'],
    icon: '👥'
  },
  {
    category: 'Cloud & Infrastructure',
    skills: ['VPS Management', 'System Deployment', 'Performance Optimization', 'Server Configuration'],
    icon: '☁️'
  }
];

// Overall experience metrics - REAL METRICS
export const experienceMetrics = [
  { label: 'Years of Experience', value: '1.5+', icon: '📅' },
  { label: 'Monthly Orders Managed', value: '2,000+', icon: '📦' },
  { label: 'Database Tables Built', value: '65+', icon: '🗄️' },
  { label: 'Team Members Trained', value: '25+', icon: '👥' }
]; 