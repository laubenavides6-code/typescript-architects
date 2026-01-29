export interface SkillTier {
  id: string;
  name: string;
  description: string;
  icon: string;
  skills: string[];
}

export const skillTiers: SkillTier[] = [
  {
    id: 'leadership',
    name: 'Technical Decisions',
    description: 'Technologies where I led architecture and set standards',
    icon: 'Target',
    skills: [
      'TypeScript',
      'Node.js',
      'React',
      'PostgreSQL',
      'Event Sourcing',
      'CQRS',
      'Microservices',
      'API Design'
    ]
  },
  {
    id: 'production',
    name: 'Production Experience',
    description: 'Technologies used extensively in production systems',
    icon: 'Zap',
    skills: [
      'Next.js',
      'NestJS',
      'GraphQL',
      'Redis',
      'MongoDB',
      'Docker',
      'Kubernetes',
      'AWS'
    ]
  },
  {
    id: 'complementary',
    name: 'Complementary Tools',
    description: 'Support stack for development, testing and operations',
    icon: 'Wrench',
    skills: [
      'Tailwind CSS',
      'Framer Motion',
      'Vitest',
      'Playwright',
      'OpenTelemetry',
      'Grafana',
      'GitHub Actions',
      'Terraform'
    ]
  }
];

export const architecturePatterns = [
  'Domain-Driven Design',
  'Event Sourcing',
  'CQRS',
  'Hexagonal Architecture',
  'Saga Pattern',
  'Circuit Breaker',
  'API Gateway',
  'Event-Driven Architecture'
];
