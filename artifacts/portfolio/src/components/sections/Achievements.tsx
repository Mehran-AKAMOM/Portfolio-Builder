import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Trophy, Clock } from "lucide-react";

const ACHIEVEMENTS = [
  {
    title: "AKA Medal of Honour — #1 of 90 Students",
    description: "Awarded the highest academic honour at Aga Khan Academy Mombasa during the IB Middle Years Programme, ranking first in a cohort of 90 students.",
    icon: <Trophy size={24} className="text-primary-foreground" />
  },
  { 
    title: "5+ Community Initiatives Led", 
    description: "Successfully planned and executed various community-driven projects with measurable impact.",
    icon: <CheckCircle2 size={24} className="text-primary-foreground" />
  },
  { 
    title: "$15,000+ Budget Managed", 
    description: "Oversaw finances and optimized spending for school clubs, tuckshop, and events.",
    icon: <TrendingUp size={24} className="text-primary-foreground" />
  },
  { 
    title: "4 Years Sports Leadership", 
    description: "Captained sports teams, emphasizing discipline, teamwork, and consistent performance.",
    icon: <Trophy size={24} className="text-primary-foreground" />
  },
  { 
    title: "100+ Volunteer Hours", 
    description: "Dedicated time to helping local communities, supporting education and skill-building.",
    icon: <Clock size={24} className="text-primary-foreground" />
  },
];

const timelineVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Milestones & Achievements</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <motion.div 
          className="relative"
          variants={timelineVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-4 bottom-4 w-px bg-primary/40" />

          <div className="space-y-12">
            {ACHIEVEMENTS.map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="relative flex items-start gap-8">
                {/* Node */}
                <div className="absolute left-6 md:left-8 w-4 h-4 rounded-full bg-primary -translate-x-[7px] mt-6 shadow-[0_0_15px_rgba(201,168,76,0.6)]" />
                
                <div className="pl-16 md:pl-20 w-full">
                  <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
                    <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
                      <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}