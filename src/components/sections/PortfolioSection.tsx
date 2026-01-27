import { useState } from 'react';
import { ExternalLink, Github, X, ChevronRight } from 'lucide-react';
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
        Ver detalles
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
      <div className="relative glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 animate-scale-in">
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
        
        <p className="text-muted-foreground mb-6">
          {project.fullDescription}
        </p>

        <div className="space-y-6">
          {/* Problem */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-destructive" />
              Problema
            </h3>
            <p className="text-muted-foreground pl-4">{project.problem}</p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Solución
            </h3>
            <p className="text-muted-foreground pl-4">{project.solution}</p>
          </div>

          {/* Technical Decisions */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Decisiones Técnicas
            </h3>
            <ul className="space-y-2 pl-4">
              {project.technicalDecisions.map((decision, index) => (
                <li key={index} className="text-muted-foreground flex items-start gap-2">
                  <ChevronRight size={16} className="text-primary mt-1 flex-shrink-0" />
                  {decision}
                </li>
              ))}
            </ul>
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
    <section id="portafolio" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={`section-badge ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            Portafolio
          </span>
          <h2 className={`mt-4 text-3xl md:text-4xl font-bold text-foreground ${isVisible ? 'animate-fade-up stagger-1' : 'opacity-0'}`}>
            Proyectos Destacados
          </h2>
          <p className={`mt-4 text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-up stagger-2' : 'opacity-0'}`}>
            Una selección de proyectos donde la arquitectura, escalabilidad y buenas prácticas fueron fundamentales.
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
