import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, TrendingUp, Award, HeartHandshake, Microscope, BarChart3 } from "lucide-react";

const PROJECTS = [
  {
    title: "Tuckshop — Student CEO",
    icon: <BarChart3 size={24} className="text-primary" />,
    tier: "Tier 1",
    stats: ["7-figure revenue", "2,000+ orders fulfilled", "25-person team managed"],
    description:
      "Founded and scaled the school tuckshop into a fully operational student-run business. Led a 25-person team, managed supplier negotiations, designed pricing strategy, and drove 7-figure revenue with over 2,000 orders — demonstrating real startup traction and applied business intelligence.",
    skills: ["Entrepreneurship", "Operations", "P&L Management", "Team Leadership", "Supply Chain"],
    color: "from-amber-500/30 to-yellow-500/5",
  },
  {
    title: "EarthPulse — Finance Executive",
    icon: <Leaf size={24} className="text-primary" />,
    tier: "Tier 1",
    stats: ["$2,500 IB Grant awarded", "Biofuel research", "Cross-disciplinary impact"],
    description:
      "Served as Finance Executive for EarthPulse, a youth-led sustainability initiative focused on waste management, composting, and biofuel research. Secured a $2,500 grant from the International Baccalaureate, providing external validation of the project's academic and social credibility.",
    skills: ["Grant Writing", "Budgeting", "Sustainability Finance", "STEM Integration", "Project Planning"],
    color: "from-green-500/20 to-emerald-500/5",
  },
  {
    title: "Investment Club — Founder",
    icon: <TrendingUp size={24} className="text-primary" />,
    tier: "Tier 2",
    stats: ["Peer-led financial literacy", "Stock & crypto analysis", "School-wide initiative"],
    description:
      "Founded the school Investment Club to build financial literacy among peers. Facilitated weekly sessions on stock markets, cryptocurrency, portfolio management, and long-term wealth strategies — developing strong research, presentation, and peer leadership skills.",
    skills: ["Financial Analysis", "Public Speaking", "Research", "Peer Education", "Market Research"],
    color: "from-purple-500/20 to-indigo-500/5",
  },
  {
    title: "Duke of Edinburgh — Gold Award",
    icon: <Award size={24} className="text-primary" />,
    tier: "Tier 2",
    stats: ["Gold level completed", "4-day expedition", "Residential leadership project"],
    description:
      "Completed the Duke of Edinburgh Gold Award, including a demanding 4-day wilderness expedition and an independently led residential project. Demonstrated sustained commitment, physical discipline, and maturity far beyond standard school programmes.",
    skills: ["Leadership", "Resilience", "Self-Management", "Planning", "Community Service"],
    color: "from-yellow-500/20 to-orange-500/5",
  },
  {
    title: "Independent Finance Research",
    icon: <Microscope size={24} className="text-primary" />,
    tier: "Tier 1",
    stats: ["Self-directed learning", "Financial modelling", "Deployable tools"],
    description:
      "Pursuing independent research in finance and economics — building financial models, studying market behaviour, and developing deployable analytical tools. This self-driven intellectual curiosity differentiates genuine passion from credential-collection.",
    skills: ["Financial Modelling", "Data Analysis", "Economics", "Critical Thinking", "Research"],
    color: "from-blue-500/20 to-cyan-500/5",
  },
  {
    title: "Community Service — WAP Support",
    icon: <HeartHandshake size={24} className="text-primary" />,
    tier: "Tier 2",
    stats: ["Women empowerment", "Skill development programs", "Event organisation"],
    description:
      "Contributed to women empowerment and community development programs — supporting skill-building workshops, organising events, and coordinating outreach initiatives that created measurable social impact in the local community.",
    skills: ["Leadership", "Organisation", "Communication", "Impact Planning", "Community Development"],
    color: "from-rose-500/20 to-pink-500/5",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
            <motion.div key={i} variants={item} className="h-full" style={{ perspective: 1000 }}>
              <motion.div whileHover={{ rotateX: 2, rotateY: -2 }} transition={{ duration: 0.3 }}>
                <Card className="h-full glass-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group flex flex-col">
                  <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        {project.icon}
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 rounded-md">
                        {project.tier}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    {/* Key stats */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.stats.map((stat, j) => (
                        <span
                          key={j}
                          className="text-xs font-semibold px-2.5 py-1 bg-background border border-border rounded-md text-foreground/70"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <div className="mt-auto">
                      <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
                        Core Skills
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.skills.map((skill, j) => (
                          <span
                            key={j}
                            className="text-xs font-medium px-3 py-1.5 bg-background border border-border rounded-md text-foreground/80 group-hover:border-primary/30 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 pt-4 border-t border-border/50">
                        <a href="#" data-testid={`btn-project-details-${i}`} className="text-xs font-medium px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md transition-colors">
                          Details
                        </a>
                        <a href="#" data-testid={`btn-project-demo-${i}`} className="text-xs font-medium px-4 py-2 text-muted-foreground hover:text-primary transition-colors">
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
