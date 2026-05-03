import { motion } from "framer-motion";

export function Vision() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background architectural elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-border/30 to-transparent" />
      <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-border/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-primary font-mono text-sm tracking-widest uppercase mb-8">Vision & Future Goals</h2>
          
          <blockquote className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-12">
            "To study at a top university, develop deep expertise in finance and business, and leverage that knowledge to build enterprises that create positive, lasting community impact."
          </blockquote>
          
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
      </div>
    </section>
  );
}
