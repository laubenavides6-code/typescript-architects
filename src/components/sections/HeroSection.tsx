import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--gradient-section-hero)' }}
      />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <span className="section-badge">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Disponible para nuevos proyectos
            </span>
          </div>

          {/* Main Heading */}
          <h1 className={`mt-8 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight ${isVisible ? 'animate-fade-up stagger-1' : 'opacity-0'}`}>
            Fullstack Developer
            <br />
            <span className="gradient-text">TypeScript Expert</span>
          </h1>

          {/* Description */}
          <p className={`mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-up stagger-2' : 'opacity-0'}`}>
            Construyo soluciones robustas y escalables con enfoque en{' '}
            <span className="text-foreground font-medium">arquitectura limpia</span>,{' '}
            <span className="text-foreground font-medium">buenas prácticas</span> y{' '}
            <span className="text-foreground font-medium">pensamiento sistémico</span>.
          </p>

          {/* CTA Buttons */}
          <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 ${isVisible ? 'animate-fade-up stagger-3' : 'opacity-0'}`}>
            <a href="#portafolio" className="btn-primary">
              Ver Decisiones Técnicas
              <ArrowDown size={18} />
            </a>
            <a href="#contacto" className="btn-secondary">
              Hablemos de arquitectura
            </a>
          </div>

          {/* Social Links */}
          <div className={`mt-12 flex items-center justify-center gap-6 ${isVisible ? 'animate-fade-up stagger-4' : 'opacity-0'}`}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:hello@developer.com"
              className="p-3 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${isVisible ? 'animate-fade-up stagger-5' : 'opacity-0'}`}>
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
              <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
