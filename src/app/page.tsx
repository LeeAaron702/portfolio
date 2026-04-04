import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import CaseStudy from "@/components/CaseStudy";
import IOSShowcase from "@/components/IOSShowcase";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <CaseStudy />
      <IOSShowcase />
      <Skills />
      <Contact />
    </main>
  );
}
