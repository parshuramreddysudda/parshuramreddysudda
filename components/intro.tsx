"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "../components/magicui/terminal";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] pt-10" // Added pt-24 for spacing
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 100 }} // Smoother animation
          >
            <Image
              src="https://via.placeholder.com/192" // Replace with your image URL
              alt="Your Name portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl" // Increased size
            />
          </motion.div>

          {/* Removed the wave emoji, it's a bit cliché */}
        </div>
      </div>

      <motion.div // Wrapped heading in motion.div for animation
        className="mt-6" // Added margin top for spacing
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Terminal className="max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl"> {/* Centered terminal */}
          <TypingAnimation>&gt; Hola!</TypingAnimation>

          <AnimatedSpan delay={1000} className="text-green-500">
            <span>✔ I'm Ramdy, a Full Stack Engineer with 4+ years of experience.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2000} className="text-green-500">
            <span>✔ I build robust and scalable web applications.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={3000} className="text-green-500">
            <span>✔ My expertise includes .NET, React, and more.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={4000} className="text-green-500">
            <span>✔ Currently, I'm contributing to the CareerOneStop project.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={5000} className="text-green-500">
            <span>✔ Previously, I honed my skills at Mastercard.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={6000} className="text-green-500">
            <span>✔ Let's connect and discuss your project!</span>
          </AnimatedSpan>
        </Terminal>
      </motion.div>


      <motion.div
        className="flex flex-col items-center justify-center gap-4 px-4 mt-10 text-lg font-medium sm:flex-row" // Increased margin-top
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full px-7 hover:bg-gray-950 focus:scale-105 hover:scale-105 active:scale-100" // Adjusted scale
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me <BsArrowRight className="opacity-70 group-hover:translate-x-1" />
        </Link>

        <a
          className="flex items-center gap-2 py-3 transition bg-white rounded-full px-7 hover:scale-105 focus:scale-105 active:scale-100 borderBlack dark:bg-white/10" // Adjusted scale
          href="/CV.pdf"
          download
        >
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1" />
        </a>

        <a
          className="flex items-center justify-center p-4 transition bg-white rounded-full hover:scale-105 focus:scale-105 active:scale-100 borderBlack dark:bg-white/10" // Adjusted scale, centered icon
          href="https://www.linkedin.com/in/parshuramreddy/"
          target="_blank"
          aria-label="LinkedIn" // Added aria-label for accessibility
        >
          <BsLinkedin className="text-gray-700 hover:text-gray-950 dark:text-white/60 dark:hover:text-white" /> {/* Improved dark mode styling */}
        </a>

        <a
          className="flex items-center justify-center p-4 transition bg-white rounded-full hover:scale-105 focus:scale-105 active:scale-100 borderBlack dark:bg-white/10" // Adjusted scale, centered icon
          href="https://github.com/parshuramreddysudda"
          target="_blank"
          aria-label="GitHub" // Added aria-label for accessibility
        >
          <FaGithubSquare className="text-gray-700 hover:text-gray-950 dark:text-white/60 dark:hover:text-white" /> {/* Improved dark mode styling */}
        </a>
      </motion.div>
    </section>
  );
}