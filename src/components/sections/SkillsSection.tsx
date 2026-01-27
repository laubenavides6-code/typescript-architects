import { Monitor, Server, Blocks } from 'lucide-react';
import { skillCategories } from '@/data/skills';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Blocks,
};

export const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="skills" className="py-24 md:py-32 bg-card/30">
      <div ref={ref} className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={`section-badge ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            Conocimientos
          </span>
          <h2 className={`mt-4 text-3xl md:text-4xl font-bold text-foreground ${isVisible ? 'animate-fade-up stagger-1' : 'opacity-0'}`}>
            Stack Técnico
          </h2>
          <p className={`mt-4 text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-up stagger-2' : 'opacity-0'}`}>
            Herramientas y tecnologías que utilizo para construir soluciones robustas y escalables.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon] || Monitor;
            
            return (
              <div
                key={category.id}
                className={`glass-card p-6 ${isVisible ? `animate-fade-up stagger-${catIndex + 3}` : 'opacity-0'}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.name}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
