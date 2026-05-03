import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, TrendingUp, Award, Shield, Trophy, Microscope, Theater } from "lucide-react";

const ROLES = [
  {
    title: "Tuckshop — CEO & Founder",
    icon: <Briefcase size={24} className="text-primary" />,
    tier: "Tier 1",
    highlights: ["7-figure revenue", "2,000+ orders", "25-person team"],
    description:
      "Built and ran the school tuckshop as a full student enterprise — managing a 25-person team, supplier relationships, pricing strategy, and operations. Generated 7-figure revenue with 2,000+ orders fulfilled.",
    skills: ["Entrepreneurship", "Operations", "P&L Management", "Team Leadership"],
  },
  {
    title: "EarthPulse — Finance Executive",
    icon: <TrendingUp size={24} className="text-primary" />,
    tier: "Tier 1",
    highlights: ["$2,500 IB Grant", "Biofuel research", "Social impact"],
    description:
      "Managed finances for a youth sustainability project, securing a $2,500 IB grant. Connected finance expertise to technical STEM research in biofuel and waste management, driving credible environmental impact.",
    skills: ["Grant Management", "Budgeting", "Sustainability", "STEM Finance"],
  },
  {
    title: "Investment Club — Founder",
    icon: <Trophy size={24} className="text-primary" />,
    tier: "Tier 2",
    highlights: ["Peer leadership", "Financial literacy", "Weekly sessions"],
    description:
      "Founded the school Investment Club to build financial literacy among peers. Ran weekly sessions covering stock markets, portfolio strategy, crypto, and economic analysis.",
    skills: ["Financial Analysis", "Public Speaking", "Peer Education", "Research"],
  },
  {
    title: "Duke of Edinburgh — Gold Award",
    icon: <Award size={24} className="text-primary" />,
    tier: "Tier 2",
    highlights: ["Gold level", "4-day expedition", "Residential project"],
    description:
      "Completed the rigorous Gold DofE programme including a 4-day wilderness expedition and a self-led residential project — demonstrating sustained discipline, maturity, and high-output leadership.",
    skills: ["Resilience", "Discipline", "Leadership", "Community Service"],
  },
  {
    title: "Independent Finance Research",
    icon: <Microscope size={24} className="text-primary" />,
    tier: "Tier 1",
    highlights: ["Self-directed", "Financial models", "Analytical tools"],
    description:
      "Independently studying financial markets, building models, and developing analytical tools — demonstrating intellectual curiosity that goes beyond classroom requirements and academic box-ticking.",
    skills: ["Financial Modelling", "Data Analysis", "Economics", "Self-Learning"],
  },
  {
    title: "Football — Open Team Defender",
    icon: <Shield size={24} className="text-primary" />,
    tier: "Tier 3",
    highlights: ["Starter defender", "Team communication", "Strategic positioning"],
    description:
      "Played as defender on the school open football team, developing strategic awareness, clear communication under pressure, and the discipline to perform consistently in competitive environments.",
    skills: ["Discipline", "Communication", "Strategy", "Resilience"],
  },
  {
    title: "Marathon & Distance Running",
    icon: <Trophy size={24} className="text-primary" />,
    tier: "Tier 3",
    highlights: ["Half marathon: 2:30:00", "5K personal best: 24:50"],
    description:
      "Completed a half marathon (2:30:00) and a 5K race (24:50), demonstrating the long-term discipline and mental toughness required to train consistently alongside a demanding academic and leadership schedule.",
    skills: ["Mental Toughness", "Goal Setting", "Consistency", "Endurance"],
  },
  {
    title: "DP-1 School Play",
    icon: <Theater size={24} className="text-primary" />,
    tier: "Tier 3",
    highlights: ["Stage performance", "Public speaking", "Emotional intelligence"],
    description:
      "Performed in the school's DP-1 production, memorising lines and performing for a live audience. Demonstrates emotional intelligence, public speaking confidence, and the ability to collaborate creatively under pressure.",
    skills: ["Public Speaking", "Emotional Intelligence", "Creativity", "Teamwork"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      {role.icon}
                    </div>
                    <span className="text-xs font-bold px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-md">
                      {role.tier}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-bold leading-snug">{role.title}</CardTitle>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {role.highlights.map((h, j) => (
                      <span key={j} className="text-xs font-semibold px-2 py-0.5 bg-background border border-border rounded text-foreground/70">
                        {h}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {role.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
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
