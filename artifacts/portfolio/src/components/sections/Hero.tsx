import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Atmospheric Background" 
          className="w-full h-full object-cover opacity-30 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
              Welcome
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-6 leading-tight">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"> Mehran Kamani </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 max-w-2xl leading-relaxed">
              Student Leader | Aspiring Finance & Business Professional | Community Impact Builder
            </p>
            <p className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-3xl leading-relaxed">
              I am a driven student passionate about leadership, finance, entrepreneurship, community service, and creating meaningful impact through action.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border hover:bg-muted"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me <Mail className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-muted-foreground hover:text-foreground"
                onClick={() => document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Download Resume <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
