import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, ShoppingBag, TrendingUp, HeartHandshake } from "lucide-react";

const PROJECTS = [
  {
    title: "EarthPulse",
    icon: <Leaf size={24} className="text-primary" />,
    description: "Youth-led sustainability project focused on waste management, composting, biofuel ideas, and community environmental awareness.",
    skills: ["Finance", "Budgeting", "Sustainability", "Teamwork", "Project Planning"],
    color: "from-green-500/20 to-emerald-500/5"
  },
  {
    title: "Zawadi Bazaar",
    icon: <ShoppingBag size={24} className="text-primary" />,
    description: "Fundraising & entrepreneurship project managing products, pricing, sales, and finances for local community causes.",
    skills: ["Sales", "Business Planning", "Customer Service", "Finance"],
    color: "from-blue-500/20 to-cyan-500/5"
  },
  {
    title: "Investment Club",
    icon: <TrendingUp size={24} className="text-primary" />,
    description: "Student-led investing initiative promoting financial literacy, stock markets, crypto, and long-term wealth building.",
    skills: ["Research", "Presentation", "Finance", "Analysis"],
    color: "from-purple-500/20 to-indigo-500/5"
  },
  {
    title: "Community Service / WAP Support",
    icon: <HeartHandshake size={24} className="text-primary" />,
    description: "Women empowerment, skill development, event planning, and sustainable community program building.",
    skills: ["Leadership", "Organization", "Communication", "Impact Planning"],
    color: "from-rose-500/20 to-pink-500/5"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Projects & Impact</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {PROJECTS.map((project, i) => (
            <motion.div key={i} variants={item} className="h-full">
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      {project.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-[calc(100%-8rem)]">
                  <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-auto">
                    <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">Core Skills Applied</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, j) => (
                        <span 
                          key={j} 
                          className="text-xs font-medium px-3 py-1.5 bg-background border border-border rounded-md text-foreground/80 group-hover:border-primary/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
