"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { motion, useInView } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.5 }); // Adjust threshold if needed
  const { setActiveSection } = useActiveSectionContext();

  // Update active section when this section comes into view
  useEffect(() => {
    if (inView) {
      console.log("📌 Projects section is in view!");
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section
      ref={ref}
      className="leading-8 text-center mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="projects"
    >
      <SectionHeading>🚀 Projects I’m Proud Of </SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
