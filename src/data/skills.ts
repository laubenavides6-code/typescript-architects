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
    name: 'Decisiones Técnicas',
    description: 'Tecnologías donde he liderado arquitectura y establecido estándares',
    icon: 'Target',
    skills: [
      'TypeScript',
      'Node.js',
      'React',
      'PostgreSQL',
      'Event Sourcing',
      'CQRS',
      'Microservicios',
      'API Design'
    ]
  },
  {
    id: 'production',
    name: 'Experiencia Productiva',
    description: 'Tecnologías utilizadas extensivamente en sistemas en producción',
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
    name: 'Herramientas Complementarias',
    description: 'Stack de soporte para desarrollo, testing y operaciones',
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
