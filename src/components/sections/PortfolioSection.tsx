import { useState } from 'react';
import { ExternalLink, Github, X, ChevronRight, AlertTriangle, CheckCircle, Zap, Layers } from 'lucide-react';
import { projects, type Project } from '@/data/projects';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  return (
    <article
      onClick={onClick}
      className="glass-card-hover p-6 cursor-pointer group"
    >
      <div className="aspect-video rounded-lg bg-secondary mb-4 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <span className="text-4xl font-bold gradient-text">{project.title.charAt(0)}</span>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {project.shortDescription}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.slice(0, 4).map((tech) => (
          <span key={tech} className="skill-tag text-xs">
            {tech}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="skill-tag text-xs">+{project.stack.length - 4}</span>
        )}
      </div>
      
      <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
        Ver decisiones técnicas
        <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </article>
  );
};

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>

        <div className="aspect-video rounded-lg bg-secondary mb-6 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <span className="text-6xl font-bold gradient-text">{project.title.charAt(0)}</span>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {project.title}
        </h2>
        
        <p className="text-muted-foreground mb-8">
          {project.fullDescription}
        </p>

        <div className="space-y-8">
          {/* Problem */}
          <div className="glass-card p-5 border-l-4 border-l-destructive/50">
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <AlertTriangle size={18} className="text-destructive" />
              Problema
            </h3>
            <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
          </div>

          {/* Solution */}
          <div className="glass-card p-5 border-l-4 border-l-accent/50">
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <CheckCircle size={18} className="text-accent" />
              Solución Implementada
            </h3>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>

          {/* Impact */}
          <div className="glass-card p-5 border-l-4 border-l-primary/50">
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <Zap size={18} className="text-primary" />
              Impacto Medible
            </h3>
            <ul className="space-y-2">
              {project.impact.map((item, index) => (
                <li key={index} className="text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Decisions */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Layers size={18} className="text-primary" />
              Decisiones Técnicas Clave
            </h3>
            <div className="space-y-4">
              {project.technicalDecisions.map((decision, index) => (
                <div key={index} className="glass-card p-5">
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-semibold shrink-0">
                      {index + 1}
                    </span>
                    <div className="space-y-2">
                      <p className="text-foreground font-medium">{decision.decision}</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="text-destructive/80">Alternativa descartada:</span> {decision.alternative}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <span className="text-accent">Razón:</span> {decision.reasoning}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ownership */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Mi Rol y Ownership</h3>
            <ul className="space-y-2">
              {project.ownership.map((item, index) => (
                <li key={index} className="text-muted-foreground flex items-start gap-2">
                  <ChevronRight size={16} className="text-primary mt-1 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Patterns */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Patrones Arquitectónicos</h3>
            <div className="flex flex-wrap gap-2">
              {project.patterns.map((pattern) => (
                <span key={pattern} className="skill-tag bg-primary/10 border-primary/30 text-primary">
                  {pattern}
                </span>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Stack Tecnológico</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="skill-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4 border-t border-border">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink size={18} />
                Ver Proyecto
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github size={18} />
                Código
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="portafolio" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--gradient-section-portfolio)' }}
      />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={`section-badge ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            Portafolio
          </span>
          <h2 className={`mt-4 text-3xl md:text-4xl font-bold text-foreground ${isVisible ? 'animate-fade-up stagger-1' : 'opacity-0'}`}>
            Decisiones Técnicas en Producción
          </h2>
          <p className={`mt-4 text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-up stagger-2' : 'opacity-0'}`}>
            Proyectos donde la arquitectura, trade-offs y criterio técnico fueron fundamentales para el éxito.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={isVisible ? `animate-fade-up stagger-${Math.min(index + 3, 6)}` : 'opacity-0'}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
