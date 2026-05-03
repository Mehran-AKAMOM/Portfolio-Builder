import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Target, User, BookOpen, Briefcase, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import profileImg from "@/assets/profile-placeholder.png";

function Counter({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(end * progress));
        if (progress < 1) animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function AboutMe() {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              
              {/* Initials Circle */}
              <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-background ring-4 ring-primary flex items-center justify-center shadow-2xl">
                 <span className="font-serif text-7xl md:text-8xl font-bold text-primary gold-glow">MK</span>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 border border-secondary rounded-full -z-10 animate-pulse" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am an ambitious student focused on academic excellence, leadership, business, finance, and community impact. 
              Driven by a deep curiosity for how markets work and a desire to build solutions, I enjoy organizing initiatives, leading teams, and solving real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My long-term vision is to become a strong leader in business, finance, and entrepreneurship, making a tangible difference in the communities I operate within.
            </p>

            <div className="flex flex-wrap gap-4 py-4">
              <div className="px-4 py-2 rounded-full border border-primary/50 text-primary font-semibold flex items-center bg-primary/5">
                <Counter end={3} duration={1.5} /> <span className="ml-1 text-sm font-medium">IB Higher Levels</span>
              </div>
              <div className="px-4 py-2 rounded-full border border-primary/50 text-primary font-semibold flex items-center bg-primary/5">
                <Counter end={4} duration={1.5} suffix="+" /> <span className="ml-1 text-sm font-medium">Projects Led</span>
              </div>
              <div className="px-4 py-2 rounded-full border border-primary/50 text-primary font-semibold flex items-center bg-primary/5">
                <Counter end={2} duration={1.5} suffix="+" /> <span className="ml-1 text-sm font-medium">Years Leadership</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Card className="bg-card/50 border-border/50 hover:bg-card transition-colors">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium text-foreground">Mehran Kamani</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50 hover:bg-card transition-colors">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Mombasa, Kenya & Kinshasa, Congo</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50 hover:bg-card transition-colors">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">School</p>
                    <p className="font-medium text-foreground">Aga Khan Academy</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50 hover:bg-card transition-colors">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <Target size={20} />
                  </div>
                  <div className="w-full">
                    <p className="text-sm text-muted-foreground mb-1">Interests</p>
                    <div className="flex flex-wrap gap-2">
                       <span className="inline-flex items-center text-xs bg-muted text-muted-foreground px-2 py-1 rounded border border-border/50"><Briefcase size={12} className="mr-1" /> Finance</span>
                       <span className="inline-flex items-center text-xs bg-muted text-muted-foreground px-2 py-1 rounded border border-border/50"><Globe size={12} className="mr-1" /> Tech</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}