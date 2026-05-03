import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Target, Award } from "lucide-react";

const IB_SUBJECTS = [
  { name: "Economics", level: "HL", grade: "—" },
  { name: "Mathematics AI", level: "HL", grade: "—" },
  { name: "Global Politics", level: "HL", grade: "—" },
  { name: "English", level: "SL", grade: "—" },
  { name: "French", level: "SL", grade: "—" },
  { name: "ESS", level: "SL", grade: "—" },
];

const TARGET_UNIS = [
  "University of Toronto",
  "University of Edinburgh",
  "King's College London",
  "McGill University",
  "[Add your target]",
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-card/20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Education</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">

          {/* IB Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative border-l border-border/50 pl-8"
          >
            <div className="absolute w-10 h-10 bg-background rounded-full border-2 border-primary -left-5 top-0 flex items-center justify-center">
              <BookOpen size={18} className="text-primary" />
            </div>

            <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-foreground mb-1">Aga Khan Academy</h3>
              <p className="text-primary font-medium mb-8">IB Diploma Programme</p>

              <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">Subject Grades</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                {IB_SUBJECTS.map((subject, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-background/50 border border-border rounded-lg px-4 py-3"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                          subject.level === "HL"
                            ? "bg-primary/15 text-primary"
                            : "bg-secondary/15 text-secondary"
                        }`}
                      >
                        {subject.level}
                      </span>
                      <span className="text-sm text-foreground/90">{subject.name}</span>
                    </div>
                    <span className="text-lg font-bold font-mono text-foreground">{subject.grade}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground italic">Update grades above once results are available.</p>
            </div>
          </motion.div>

          {/* SAT + University row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-8">

            {/* SAT Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border p-7 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-primary/10 rounded-xl">
                  <Award size={22} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">SAT Score</h3>
              </div>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-5xl font-bold font-mono text-foreground">—</span>
                <span className="text-muted-foreground mb-2">/ 1600</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-background/50 border border-border rounded-lg p-3 text-center">
                  <p className="text-xs text-muted-foreground mb-1">Math</p>
                  <p className="text-xl font-bold font-mono text-foreground">—</p>
                </div>
                <div className="bg-background/50 border border-border rounded-lg p-3 text-center">
                  <p className="text-xs text-muted-foreground mb-1">Reading & Writing</p>
                  <p className="text-xl font-bold font-mono text-foreground">—</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground italic mt-4">Update with your SAT score when ready.</p>
            </motion.div>

            {/* University Aspirations Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card border border-border p-7 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-primary/10 rounded-xl">
                  <GraduationCap size={22} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">University Aspirations</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Targeting top universities with strong programmes in Finance, Business, and Economics.
              </p>
              <ul className="space-y-2">
                {TARGET_UNIS.map((uni, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground/90">
                    <Target size={14} className="text-primary shrink-0" />
                    {uni}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
