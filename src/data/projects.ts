export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  stack: string[];
  technicalDecisions: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    shortDescription: 'Plataforma de comercio electrónico escalable con arquitectura de microservicios.',
    fullDescription: 'Sistema completo de e-commerce diseñado para manejar alto tráfico con arquitectura distribuida.',
    problem: 'El cliente necesitaba una plataforma capaz de manejar picos de tráfico durante eventos promocionales sin degradar la experiencia de usuario.',
    solution: 'Implementé una arquitectura de microservicios con event sourcing, caché distribuido y auto-scaling que permite manejar 10x el tráfico normal sin intervención manual.',
    stack: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    technicalDecisions: [
      'Event sourcing para trazabilidad completa de transacciones',
      'CQRS para optimizar lecturas y escrituras por separado',
      'Circuit breaker pattern para resiliencia entre servicios'
    ],
    image: '/placeholder.svg',
    featured: true
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    shortDescription: 'Dashboard de analytics en tiempo real con visualizaciones interactivas.',
    fullDescription: 'Plataforma de analytics que procesa millones de eventos diarios y presenta insights accionables.',
    problem: 'Los usuarios necesitaban acceso a métricas en tiempo real sin latencia perceptible y con capacidad de drill-down.',
    solution: 'Diseñé un pipeline de datos con procesamiento en streaming y un frontend optimizado con virtualización para renderizar datasets masivos.',
    stack: ['TypeScript', 'Next.js', 'GraphQL', 'ClickHouse', 'Apache Kafka', 'D3.js'],
    technicalDecisions: [
      'ClickHouse para queries analíticas sub-segundo',
      'WebSockets para actualizaciones en tiempo real',
      'Virtualización de tablas para performance con 100k+ rows'
    ],
    image: '/placeholder.svg',
    featured: true
  },
  {
    id: 'api-gateway',
    title: 'API Gateway Enterprise',
    shortDescription: 'Gateway centralizado para gestión de APIs internas y externas.',
    fullDescription: 'Solución enterprise para centralizar, securizar y monitorear todas las APIs de la organización.',
    problem: 'La empresa tenía docenas de APIs sin estándares unificados, dificultando el mantenimiento y la seguridad.',
    solution: 'Desarrollé un API Gateway que centraliza autenticación, rate limiting, transformaciones y observabilidad.',
    stack: ['TypeScript', 'Node.js', 'Redis', 'OpenTelemetry', 'Prometheus', 'Grafana'],
    technicalDecisions: [
      'Plugin architecture para extensibilidad sin modificar core',
      'OpenTelemetry para distributed tracing',
      'Rate limiting basado en token bucket con Redis'
    ],
    image: '/placeholder.svg',
    featured: true
  }
];
