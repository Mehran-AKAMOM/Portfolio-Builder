import { motion } from "framer-motion";
import { Users, TrendingUp, MonitorPlay, Star } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Leadership",
    icon: <Users size={20} className="text-primary" />,
    skills: ["Teamwork", "Communication", "Event planning", "Problem solving", "Public speaking", "Responsibility"]
  },
  {
    title: "Business & Finance",
    icon: <TrendingUp size={20} className="text-primary" />,
    skills: ["Budgeting", "Investment research", "Sales", "Financial tracking", "Entrepreneurship", "Market analysis"]
  },
  {
    title: "Technical",
    icon: <MonitorPlay size={20} className="text-primary" />,
    skills: ["Google Sheets", "Canva", "AI tools", "Presentation design", "Basic website planning", "Research"]
  },
  {
    title: "Personal Strengths",
    icon: <Star size={20} className="text-primary" />,
    skills: ["Discipline", "Ambition", "Consistency", "Hard work", "Strategic thinking", "Adaptability"]
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
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
