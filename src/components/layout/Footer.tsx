import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-1 text-muted-foreground text-xs">
            <span>© {currentYear} Made with</span>
            <Heart size={12} className="text-primary fill-primary" />
            <span>and TypeScript</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:hello@developer.com"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={14} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
