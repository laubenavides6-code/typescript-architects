import { Target, Zap, Wrench, Boxes } from 'lucide-react';
import { skillTiers, architecturePatterns } from '@/data/skills';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const iconMap: Record<string, React.ElementType> = {
  Target,
  Zap,
  Wrench,
};

export const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--gradient-section-skills)' }}
      />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={`section-badge ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            Conocimientos
          </span>
          <h2 className={`mt-4 text-3xl md:text-4xl font-bold text-foreground ${isVisible ? 'animate-fade-up stagger-1' : 'opacity-0'}`}>
            Stack Técnico por Nivel de Expertise
          </h2>
          <p className={`mt-4 text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-up stagger-2' : 'opacity-0'}`}>
            Tecnologías organizadas por profundidad de experiencia y responsabilidad técnica.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {skillTiers.map((tier, tierIndex) => {
            const Icon = iconMap[tier.icon] || Target;
            
            return (
              <div
                key={tier.id}
                className={`glass-card p-6 ${isVisible ? `animate-fade-up stagger-${tierIndex + 3}` : 'opacity-0'}`}
              >
                {/* Tier Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {tier.name}
                  </h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-5">
                  {tier.description}
                </p>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {tier.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Architecture Patterns */}
        <div className={`glass-card p-6 max-w-4xl mx-auto ${isVisible ? 'animate-fade-up stagger-6' : 'opacity-0'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-accent/10 text-accent">
              <Boxes size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Patrones Arquitectónicos
              </h3>
              <p className="text-sm text-muted-foreground">
                Patrones que he implementado y adaptado en sistemas productivos
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {architecturePatterns.map((pattern) => (
              <span key={pattern} className="skill-tag bg-accent/10 border-accent/30 text-accent">
                {pattern}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
