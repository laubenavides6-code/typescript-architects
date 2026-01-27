import { Mail, Github, Linkedin, MapPin, Send, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="contacto" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--gradient-section-contact)' }}
      />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={`section-badge ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            Contacto
          </span>
          <h2 className={`mt-4 text-3xl md:text-4xl font-bold text-foreground ${isVisible ? 'animate-fade-up stagger-1' : 'opacity-0'}`}>
            Hablemos de Arquitectura
          </h2>
          <p className={`mt-4 text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-up stagger-2' : 'opacity-0'}`}>
            ¿Tienes un desafío técnico? Me interesa escuchar sobre problemas de escalabilidad, deuda técnica o decisiones arquitectónicas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={isVisible ? 'animate-slide-right stagger-3' : 'opacity-0'}>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Conversemos sobre
            </h3>
            
            <div className="space-y-3 mb-8">
              {[
                'Arquitectura de sistemas distribuidos',
                'Migración de monolitos a microservicios',
                'Escalabilidad y performance',
                'Deuda técnica y refactoring estratégico',
                'MVPs con base sólida para escalar'
              ].map((topic, index) => (
                <div key={index} className="flex items-center gap-3 text-muted-foreground">
                  <MessageCircle size={16} className="text-primary shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <a
                href="mailto:hello@developer.com"
                className="flex items-center gap-4 p-4 glass-card hover:border-primary/30 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">hello@developer.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 glass-card">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ubicación</p>
                  <p className="text-foreground font-medium">Remoto / Global</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                También en
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={isVisible ? 'animate-slide-left stagger-4' : 'opacity-0'}>
            <form className="glass-card p-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  ¿Qué desafío técnico enfrentas?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Cuéntame sobre el problema técnico que quieres resolver..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                <Send size={18} />
                Iniciar Conversación
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
