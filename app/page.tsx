"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import { Scroll } from "@/components/scroll-bar";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import SocialBar from "@/components/socialbar";
import Testimonial from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Scroll />
      <main className="flex flex-col items-center px-4 backdrop-blur-[0.2rem]">
        <Intro />
        <SectionDivider />
        <About />
        <Skills />
        <Experience />
        {/* <Testimonial /> */}
        <Projects />
        <Contact />
        <SocialBar />
      </main>
    </>
  );
}
