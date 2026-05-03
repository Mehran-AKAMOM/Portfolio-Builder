import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Resume() {
  return (
    <section id="resume" className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <FileText size={32} className="text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Curriculum Vitae</h2>
          <p className="text-lg text-muted-foreground mb-10">
            For a comprehensive overview of my academic background, leadership roles, and project experience, please download my resume.
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8"
            onClick={() => window.open('#', '_blank')} // Placeholder link
          >
            Download Resume <Download className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
