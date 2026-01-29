export interface TechnicalDecision {
  decision: string;
  alternative: string;
  reasoning: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  impact: string[];
  stack: string[];
  technicalDecisions: TechnicalDecision[];
  patterns: string[];
  ownership: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    shortDescription: 'Scalable e-commerce platform with microservices architecture.',
    fullDescription: 'Complete e-commerce system designed to handle high traffic with distributed architecture.',
    problem: 'The client faced frequent outages during traffic spikes in promotional events, with a monolithic system that didn\'t scale horizontally and degraded response times under load.',
    solution: 'I designed a microservices architecture with event sourcing, implementing CQRS to separate reads from writes and allowing each service to scale independently based on demand.',
    impact: [
      'Reduced p99 response time from 3.2s to 180ms',
      'Ability to handle 10x traffic without manual intervention',
      'Reduced production incidents by 85%',
      'Time-to-market for new features reduced by 60%'
    ],
    stack: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    technicalDecisions: [
      {
        decision: 'Event sourcing for the orders domain',
        alternative: 'Traditional CRUD with snapshots',
        reasoning: 'We needed complete transaction traceability for financial auditing and the ability to reconstruct state at any point in time.'
      },
      {
        decision: 'CQRS with optimized projections',
        alternative: 'Shared single model',
        reasoning: 'Reads exceeded writes 100:1. Separating allowed optimizing catalog queries without affecting transactions.'
      },
      {
        decision: 'Circuit breaker with degraded fallbacks',
        alternative: 'Simple retry with backoff',
        reasoning: 'Third-party services (payments, inventory) failed in cascade. Circuit breaker isolated failures and maintained core functionality.'
      }
    ],
    patterns: ['Event Sourcing', 'CQRS', 'Circuit Breaker', 'Saga Pattern', 'API Gateway'],
    ownership: [
      'Defined the complete distributed system architecture',
      'Designed event contracts between services',
      'Standardized resilience patterns for the team',
      'Led incremental migration from monolith'
    ],
    image: '/placeholder.svg',
    featured: true
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    shortDescription: 'Real-time analytics dashboard with interactive visualizations.',
    fullDescription: 'Analytics platform that processes millions of daily events and presents actionable insights in real-time.',
    problem: 'Users were abandoning the existing dashboard due to 8-12 second latency on complex queries. Tables with more than 10k rows crashed the browser.',
    solution: 'I redesigned the data pipeline with streaming processing and an aggressively virtualized frontend. Implemented a predictive caching system based on usage patterns.',
    impact: [
      'Analytics queries reduced from 8s to <200ms',
      'Smooth rendering of 100k+ row datasets',
      'User retention increased by 40%',
      'Main database load reduced by 70%'
    ],
    stack: ['TypeScript', 'Next.js', 'GraphQL', 'ClickHouse', 'Apache Kafka', 'D3.js'],
    technicalDecisions: [
      {
        decision: 'ClickHouse as analytical data warehouse',
        alternative: 'PostgreSQL with materialized views',
        reasoning: 'We needed sub-second OLAP queries over billions of events. ClickHouse offered 50x better performance for our columnar access patterns.'
      },
      {
        decision: 'WebSockets with delta updates',
        alternative: 'Polling with cache invalidation',
        reasoning: 'Dashboards required real-time updates. Delta updates reduced bandwidth by 95% compared to full refetch.'
      },
      {
        decision: 'Virtualization with dynamic windowing',
        alternative: 'Traditional pagination',
        reasoning: 'Users needed smooth scrolling over complete datasets without losing context. Virtualization kept DOM under 200 nodes even with 100k rows.'
      }
    ],
    patterns: ['Streaming ETL', 'CQRS', 'Materialized Views', 'Delta Sync', 'Virtual Scrolling'],
    ownership: [
      'Designed data architecture from ingestion to visualization',
      'Defined performance and monitoring standards',
      'Standardized the visual component system',
      'Participated in product decisions on data UX'
    ],
    image: '/placeholder.svg',
    featured: true
  },
  {
    id: 'api-gateway',
    title: 'Enterprise API Gateway',
    shortDescription: 'Centralized gateway for internal and external API management.',
    fullDescription: 'Enterprise solution to centralize authentication, rate limiting, transformations and observability for all organization APIs.',
    problem: 'The organization had 40+ APIs without unified standards. Each team implemented different authentication, there was no centralized visibility and breaking changes were frequent.',
    solution: 'I developed an extensible API Gateway through plugins that standardizes authentication, applies intelligent rate limiting and provides unified observability.',
    impact: [
      'New API onboarding time reduced from weeks to hours',
      'API-related security incidents reduced to zero',
      'Complete visibility of traffic and service dependencies',
      '100% team adoption within 6 months'
    ],
    stack: ['TypeScript', 'Node.js', 'Redis', 'OpenTelemetry', 'Prometheus', 'Grafana'],
    technicalDecisions: [
      {
        decision: 'Plugin architecture for extensibility',
        alternative: 'Static declarative configuration',
        reasoning: 'Each team had unique requirements. Plugins allowed customization without modifying the core, maintaining stability.'
      },
      {
        decision: 'OpenTelemetry for distributed tracing',
        alternative: 'Structured logging with manual correlation',
        reasoning: 'We needed automatic end-to-end traceability. OTel provided open standards and avoided vendor lock-in.'
      },
      {
        decision: 'Token bucket with Redis for rate limiting',
        alternative: 'Fixed window counter',
        reasoning: 'Token bucket prevents burst abuse while allowing legitimate variable traffic. Redis guarantees consistency in multi-node deployment.'
      }
    ],
    patterns: ['Plugin Architecture', 'Distributed Tracing', 'Token Bucket', 'Sidecar Pattern', 'API Versioning'],
    ownership: [
      'Defined product architecture and roadmap',
      'Designed plugin system and SDK for teams',
      'Standardized security and rate limiting policies',
      'Led progressive adoption with stakeholder teams'
    ],
    image: '/placeholder.svg',
    featured: true
  }
];
