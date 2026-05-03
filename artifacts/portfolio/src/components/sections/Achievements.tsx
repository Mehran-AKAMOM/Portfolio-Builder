import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

function Counter({ end, duration = 2 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

const ACHIEVEMENTS = [
  { value: 5, label: "Community Initiatives Led", suffix: "+" },
  { value: 15000, label: "Budget Managed", prefix: "$", suffix: "+" },
  { value: 4, label: "Years Sports Leadership", suffix: "" },
  { value: 100, label: "Volunteer Hours", suffix: "+" },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="bg-background/10 border-none text-center h-full backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
                    {item.prefix && <span>{item.prefix}</span>}
                    <Counter end={item.value} />
                    {item.suffix && <span>{item.suffix}</span>}
                  </div>
                  <p className="text-primary-foreground/80 font-medium">{item.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
