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
    shortDescription: 'Plataforma de comercio electrónico escalable con arquitectura de microservicios.',
    fullDescription: 'Sistema completo de e-commerce diseñado para manejar alto tráfico con arquitectura distribuida.',
    problem: 'El cliente enfrentaba caídas frecuentes durante picos de tráfico en eventos promocionales, con un sistema monolítico que no escalaba horizontalmente y tiempos de respuesta degradados bajo carga.',
    solution: 'Diseñé una arquitectura de microservicios con event sourcing, implementando CQRS para separar lecturas de escrituras y permitiendo escalar cada servicio de forma independiente según demanda.',
    impact: [
      'Reducción de tiempo de respuesta p99 de 3.2s a 180ms',
      'Capacidad de manejar 10x el tráfico sin intervención manual',
      'Reducción de incidentes en producción en un 85%',
      'Time-to-market de nuevas features reducido en 60%'
    ],
    stack: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    technicalDecisions: [
      {
        decision: 'Event sourcing para el dominio de órdenes',
        alternative: 'CRUD tradicional con snapshots',
        reasoning: 'Necesitábamos trazabilidad completa de transacciones para auditoría financiera y capacidad de reconstruir estado en cualquier punto temporal.'
      },
      {
        decision: 'CQRS con proyecciones optimizadas',
        alternative: 'Modelo único compartido',
        reasoning: 'Las lecturas superaban a las escrituras 100:1. Separar permitió optimizar queries de catálogo sin afectar transacciones.'
      },
      {
        decision: 'Circuit breaker con fallbacks degradados',
        alternative: 'Retry simple con backoff',
        reasoning: 'Los servicios de terceros (pagos, inventario) fallaban en cascada. Circuit breaker aisló fallos y mantuvo funcionalidad core.'
      }
    ],
    patterns: ['Event Sourcing', 'CQRS', 'Circuit Breaker', 'Saga Pattern', 'API Gateway'],
    ownership: [
      'Definí la arquitectura completa del sistema distribuido',
      'Diseñé los contratos de eventos entre servicios',
      'Estandaricé patrones de resiliencia para el equipo',
      'Lideré la migración incremental desde el monolito'
    ],
    image: '/placeholder.svg',
    featured: true
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    shortDescription: 'Dashboard de analytics en tiempo real con visualizaciones interactivas.',
    fullDescription: 'Plataforma de analytics que procesa millones de eventos diarios y presenta insights accionables en tiempo real.',
    problem: 'Los usuarios abandonaban el dashboard existente por latencia de 8-12 segundos en queries complejos. Las tablas con más de 10k filas colapsaban el navegador.',
    solution: 'Rediseñé el pipeline de datos con procesamiento en streaming y un frontend con virtualización agresiva. Implementé un sistema de caché predictivo basado en patrones de uso.',
    impact: [
      'Queries analíticos reducidos de 8s a <200ms',
      'Renderizado fluido de datasets de 100k+ filas',
      'Retención de usuarios aumentada en 40%',
      'Reducción de carga en base de datos principal en 70%'
    ],
    stack: ['TypeScript', 'Next.js', 'GraphQL', 'ClickHouse', 'Apache Kafka', 'D3.js'],
    technicalDecisions: [
      {
        decision: 'ClickHouse como data warehouse analítico',
        alternative: 'PostgreSQL con materialized views',
        reasoning: 'Necesitábamos queries OLAP sub-segundo sobre billones de eventos. ClickHouse ofreció 50x mejor performance para nuestros patrones de acceso columnares.'
      },
      {
        decision: 'WebSockets con delta updates',
        alternative: 'Polling con invalidación de caché',
        reasoning: 'Los dashboards requerían actualización en tiempo real. Delta updates redujeron bandwidth en 95% comparado con refetch completo.'
      },
      {
        decision: 'Virtualización con windowing dinámico',
        alternative: 'Paginación tradicional',
        reasoning: 'Los usuarios necesitaban scroll fluido sobre datasets completos sin perder contexto. Virtualización mantuvo DOM bajo 200 nodos incluso con 100k filas.'
      }
    ],
    patterns: ['Streaming ETL', 'CQRS', 'Materialized Views', 'Delta Sync', 'Virtual Scrolling'],
    ownership: [
      'Diseñé la arquitectura de datos desde ingesta hasta visualización',
      'Definí estándares de performance y monitoring',
      'Estandaricé el sistema de componentes visuales',
      'Participé en decisiones de producto sobre UX de datos'
    ],
    image: '/placeholder.svg',
    featured: true
  },
  {
    id: 'api-gateway',
    title: 'API Gateway Enterprise',
    shortDescription: 'Gateway centralizado para gestión de APIs internas y externas.',
    fullDescription: 'Solución enterprise para centralizar autenticación, rate limiting, transformaciones y observabilidad de todas las APIs de la organización.',
    problem: 'La organización tenía 40+ APIs sin estándares unificados. Cada equipo implementaba autenticación diferente, no había visibilidad centralizada y los cambios breaking eran frecuentes.',
    solution: 'Desarrollé un API Gateway extensible mediante plugins que estandariza autenticación, aplica rate limiting inteligente y proporciona observabilidad unificada.',
    impact: [
      'Tiempo de onboarding de nuevas APIs reducido de semanas a horas',
      'Incidentes de seguridad relacionados a APIs reducidos a cero',
      'Visibilidad completa de tráfico y dependencias entre servicios',
      'Adopción del 100% de equipos en 6 meses'
    ],
    stack: ['TypeScript', 'Node.js', 'Redis', 'OpenTelemetry', 'Prometheus', 'Grafana'],
    technicalDecisions: [
      {
        decision: 'Arquitectura de plugins para extensibilidad',
        alternative: 'Configuración declarativa estática',
        reasoning: 'Cada equipo tenía requisitos únicos. Plugins permitieron customización sin modificar el core, manteniendo estabilidad.'
      },
      {
        decision: 'OpenTelemetry para distributed tracing',
        alternative: 'Logging estructurado con correlación manual',
        reasoning: 'Necesitábamos trazabilidad end-to-end automática. OTel proporcionó estándares abiertos y evitó vendor lock-in.'
      },
      {
        decision: 'Token bucket con Redis para rate limiting',
        alternative: 'Fixed window counter',
        reasoning: 'Token bucket previene burst abuse mientras permite tráfico legítimo variable. Redis garantiza consistencia en despliegue multi-nodo.'
      }
    ],
    patterns: ['Plugin Architecture', 'Distributed Tracing', 'Token Bucket', 'Sidecar Pattern', 'API Versioning'],
    ownership: [
      'Definí la arquitectura y roadmap del producto',
      'Diseñé el sistema de plugins y SDK para equipos',
      'Estandaricé políticas de seguridad y rate limiting',
      'Lideré la adopción progresiva con equipos stakeholders'
    ],
    image: '/placeholder.svg',
    featured: true
  }
];
