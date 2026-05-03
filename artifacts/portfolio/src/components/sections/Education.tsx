import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

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

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative border-l border-border/50 pl-8 pb-12"
          >
            <div className="absolute w-10 h-10 bg-background rounded-full border-2 border-primary -left-5 top-0 flex items-center justify-center">
              <BookOpen size={18} className="text-primary" />
            </div>
            
            <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-foreground mb-2">[Your School Name]</h3>
              <p className="text-primary font-medium mb-6">IB Diploma Programme</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">Subjects</h4>
                  <ul className="space-y-2">
                    {["Economics", "Mathematics", "Physics", "English", "French", "Global Politics"].map((subject, i) => (
                      <li key={i} className="flex items-center text-foreground/90">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">Goal</h4>
                  <p className="text-foreground/90 leading-relaxed">
                    Maintaining high academic performance to ensure strong university preparation, while developing a multidisciplinary understanding of global systems.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
