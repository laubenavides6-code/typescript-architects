export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'Monitor',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Zustand',
      'React Query',
      'Testing Library'
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: 'Server',
    skills: [
      'Node.js',
      'Express',
      'NestJS',
      'GraphQL',
      'REST APIs',
      'PostgreSQL',
      'MongoDB',
      'Redis'
    ]
  },
  {
    id: 'architecture',
    name: 'Arquitectura & Tooling',
    icon: 'Blocks',
    skills: [
      'Microservicios',
      'Event Sourcing',
      'CQRS',
      'Domain-Driven Design',
      'CI/CD',
      'Docker',
      'Kubernetes',
      'AWS / GCP'
    ]
  }
];
