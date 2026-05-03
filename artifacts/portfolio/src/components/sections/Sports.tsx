import { motion } from "framer-motion";
import { ShieldAlert, Timer, Trophy } from "lucide-react";

const RACE_STATS = [
  {
    icon: <Trophy size={28} className="text-primary" />,
    label: "Half Marathon",
    value: "2:30:00",
    sub: "21.1 km completed"
  },
  {
    icon: <Timer size={28} className="text-primary" />,
    label: "5K Race",
    value: "24:50",
    sub: "Personal best"
  }
];

export function Sports() {
  return (
    <section className="py-24 bg-card/20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center p-8">
                <ShieldAlert size={80} className="text-primary" />
              </div>
            </div>
            
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Sports & Personal Development</h2>
              <div className="h-1 w-20 bg-primary rounded-full mb-8 mx-auto md:mx-0"></div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Playing as a defender on the football field has fundamentally shaped my approach to leadership and life. It requires constant vigilance, clear communication, and the ability to anticipate challenges before they materialize.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Beyond football, I push my limits through long-distance running — completing a half marathon and racing 5Ks. Running has deepened my discipline, mental toughness, and ability to stay composed under pressure.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {RACE_STATS.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 hover:border-primary/50 transition-colors"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">{stat.icon}</div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-foreground font-mono">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
