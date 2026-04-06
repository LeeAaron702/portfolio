import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import CaseStudy from "@/components/CaseStudy";
import ClientWork from "@/components/ClientWork";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <CaseStudy />
        <ClientWork />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
