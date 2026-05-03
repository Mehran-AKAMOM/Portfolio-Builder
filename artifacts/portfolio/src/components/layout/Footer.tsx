import { Linkedin, Github, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <p className="text-xl font-serif font-bold text-foreground">[Your Name]</p>
          <p className="text-sm text-muted-foreground mt-2">
            Building discipline, leadership, and impact.
          </p>
        </div>

        <div className="flex space-x-6 mb-6 md:mb-0">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram size={20} />
          </a>
        </div>

        <div className="text-sm text-muted-foreground text-center md:text-right">
          &copy; {new Date().getFullYear()} [Your Name]. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
