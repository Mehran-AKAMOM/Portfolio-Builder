import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Target, User } from "lucide-react";
import profileImg from "@/assets/profile-placeholder.png";

export function AboutMe() {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img 
                src={profileImg} 
                alt="Profile" 
                className="relative z-10 w-full max-w-md mx-auto rounded-2xl border border-border shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 border border-secondary rounded-full -z-10 animate-pulse" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am an ambitious student focused on academic excellence, leadership, business, finance, and community impact. 
              Driven by a deep curiosity for how markets work and a desire to build solutions, I enjoy organizing initiatives, leading teams, and solving real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My long-term vision is to become a strong leader in business, finance, and entrepreneurship, making a tangible difference in the communities I operate within.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Card className="bg-card/50 border-border/50 hover:bg-card transition-colors">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium text-foreground">Mehran Kamani</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50 hover:bg-card transition-colors">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Mombasa, Kenya & Kinshasa, Congo</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50 hover:bg-card transition-colors">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">School</p>
                    <p className="font-medium text-foreground">Aga Khan Academy</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50 hover:bg-card transition-colors">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <Target size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Interests</p>
                    <p className="font-medium text-foreground">Finance, Tech, Soccer</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
