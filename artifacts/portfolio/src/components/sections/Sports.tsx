import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

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
                Playing as a defender on the football field has fundamentally shaped my approach to leadership and life. It's a role that requires constant vigilance, clear communication, and the ability to anticipate challenges before they materialize.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sports have built my discipline, resilience, and mental toughness. The field is where I learned that teamwork isn't just about scoring goals, but about having your team's back when the pressure is on.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
