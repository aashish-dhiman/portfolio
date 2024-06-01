import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="bg-bgDark text-textWhite relative mx-auto max-w-screen-xl">
      <Navbar />
      <main className="overflow-hidden px-3 md:px-4">
        <HeroSection />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </main>
  );
}
