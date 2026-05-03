import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutMe } from "@/components/sections/AboutMe";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";

import { Skills } from "@/components/sections/Skills";
import { Achievements } from "@/components/sections/Achievements";
import { Sports } from "@/components/sections/Sports";
import { Vision } from "@/components/sections/Vision";
import { Resume } from "@/components/sections/Resume";
import { Gallery } from "@/components/sections/Gallery";
import { Globe } from "@/components/sections/Globe";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Achievements />
        <Globe />
        <Sports />
        <Vision />
        <Resume />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
