import { motion } from "framer-motion";
import { Users, TrendingUp, MonitorPlay, Star } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Leadership",
    icon: <Users size={20} className="text-primary" />,
    skills: [
      { name: "Teamwork", level: 95 },
      { name: "Communication", level: 90 },
      { name: "Event planning", level: 85 },
      { name: "Problem solving", level: 90 },
      { name: "Public speaking", level: 85 },
      { name: "Responsibility", level: 95 }
    ]
  },
  {
    title: "Business & Finance",
    icon: <TrendingUp size={20} className="text-primary" />,
    skills: [
      { name: "Budgeting", level: 90 },
      { name: "Investment research", level: 85 },
      { name: "Sales", level: 80 },
      { name: "Financial tracking", level: 85 },
      { name: "Entrepreneurship", level: 90 },
      { name: "Market analysis", level: 80 }
    ]
  },
  {
    title: "Technical",
    icon: <MonitorPlay size={20} className="text-primary" />,
    skills: [
      { name: "Google Sheets", level: 85 },
      { name: "Canva", level: 80 },
      { name: "AI tools", level: 85 },
      { name: "Presentation design", level: 80 },
      { name: "Basic website planning", level: 70 },
      { name: "Research", level: 85 }
    ]
  },
  {
    title: "Personal Strengths",
    icon: <Star size={20} className="text-primary" />,
    skills: [
      { name: "Discipline", level: 95 },
      { name: "Ambition", level: 95 },
      { name: "Consistency", level: 90 },
      { name: "Hard work", level: 95 },
      { name: "Strategic thinking", level: 85 },
      { name: "Adaptability", level: 90 }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Core Competencies</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SKILL_CATEGORIES.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card/50 border border-border/50 p-8 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div 
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (j * 0.1) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}