import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Send, Linkedin, Github, Instagram } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Get in Touch</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            I am always open to discussing new opportunities, mentorship, or exciting projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Email</h3>
                  <a href="mailto:mehran.kamani@akamom.org" className="text-muted-foreground hover:text-primary transition-colors">
                    mehran.kamani@akamom.org
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    [Your City, Country]
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="text-lg font-bold text-foreground mb-6">Connect</h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/mehran-kamani-5b5918335/" target="_blank" rel="noopener noreferrer" className="p-3 bg-card border border-border rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-colors hover:border-primary/50">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="p-3 bg-card border border-border rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-colors hover:border-primary/50">
                    <Github size={20} />
                  </a>
                  <a href="#" className="p-3 bg-card border border-border rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-colors hover:border-primary/50">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card/50 p-8 rounded-2xl border border-border"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" className="bg-background" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email address" type="email" className="bg-background" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we work together?" 
                          className="min-h-[120px] bg-background" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
