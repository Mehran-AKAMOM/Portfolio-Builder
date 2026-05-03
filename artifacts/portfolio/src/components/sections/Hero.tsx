import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const PHRASES = ["Student Leader", "Finance Enthusiast", "Community Builder", "IB Diploma Candidate"];

export function Hero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${3 + Math.random() * 4}s`,
  }));

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Atmospheric Background" 
          className="w-full h-full object-cover opacity-20 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      {particles.map(p => (
        <div 
          key={p.id}
          className="absolute rounded-full bg-primary/20 animate-pulse pointer-events-none"
          style={{
            top: p.top,
            left: p.left,
            width: '3px',
            height: '3px',
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
            transform: `translateY(-20px)`,
            animation: `pulse ${p.animationDuration} cubic-bezier(0.4, 0, 0.6, 1) infinite, float ${p.animationDuration} ease-in-out infinite alternate`
          }}
        />
      ))}

      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          100% { transform: translateY(-40px); }
        }
      `}</style>

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
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent gold-glow"> Mehran Kamani </span>
            </h1>
            <p className="text-xl md:text-3xl text-primary font-medium mb-8 max-w-2xl h-10">
              {PHRASES[currentPhraseIndex]}<span className="typing-cursor">|</span>
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
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me <Mail className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-muted-foreground hover:text-primary underline underline-offset-4 bg-transparent border-0"
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