"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import { Scroll } from "@/components/scroll-bar";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { useScroll, useSpring, motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Scroll/>
      <Intro />
      <SectionDivider />
      <About />
      <Projects/>
      <Skills />
      <Experience />
      <Contact />
      
    </main>
  );
}
