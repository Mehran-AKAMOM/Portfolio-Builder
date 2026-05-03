import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, TrendingUp, Presentation, Shield, Trophy } from "lucide-react";

const ROLES = [
  {
    title: "Tuckshop CEO",
    icon: <Briefcase size={24} className="text-primary" />,
    description: "Founded and led the school tuckshop as CEO, overseeing operations, pricing, supplier relations, and team management to run a profitable student-run business.",
    skills: ["Entrepreneurship", "Operations", "Financial Management"]
  },
  {
    title: "CAS / Community Project Leader",
    icon: <Users size={24} className="text-primary" />,
    description: "Spearheaded community initiatives, managing teams and coordinating resources to drive local impact.",
    skills: ["Leadership", "Project Management", "Coordination"]
  },
  {
    title: "Finance Manager",
    icon: <TrendingUp size={24} className="text-primary" />,
    description: "Oversaw budgeting and financial tracking for student initiatives, ensuring efficient allocation of funds.",
    skills: ["Budgeting", "Financial Tracking", "Resource Allocation"]
  },
  {
    title: "Event Organizer",
    icon: <Presentation size={24} className="text-primary" />,
    description: "Planned and executed school-wide events, handling logistics, marketing, and execution.",
    skills: ["Event Planning", "Logistics", "Marketing"]
  },
  {
    title: "Student Initiative Member",
    icon: <Briefcase size={24} className="text-primary" />,
    description: "Active contributor to various student-led projects focused on school improvement and student life.",
    skills: ["Teamwork", "Problem Solving", "Adaptability"]
  },
  {
    title: "Sports Team Member / Defender",
    icon: <Shield size={24} className="text-primary" />,
    description: "Played as a defender, demonstrating resilience, strategic thinking, and strong communication on the field.",
    skills: ["Discipline", "Resilience", "Strategic Thinking"]
  },
  {
    title: "Investment Club Leader",
    icon: <Trophy size={24} className="text-primary" />,
    description: "Led discussions on market trends, financial literacy, and investment strategies among peers.",
    skills: ["Financial Analysis", "Public Speaking", "Research"]
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

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Leadership & Experience</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ROLES.map((role, i) => (
            <motion.div key={i} variants={item}>
              <Card className="h-full bg-card border-border/50 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {role.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{role.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {role.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {role.skills.map((skill, j) => (
                      <span 
                        key={j} 
                        className="text-xs font-medium px-2.5 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
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
