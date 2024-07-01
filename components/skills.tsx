"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skills_icons, skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills 🚀</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
    {skillsData.map((skill, index) => {
      const IconComponent = skills_icons[skill.icon];
      return (
        <motion.li
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
          className="px-5 py-3 bg-white borderBlack rounded-xl dark:bg-white/10 dark:text-white/80"
        >
          {skill.skill} 
          {/* <FontAwesomeIcon className="text-red-700" icon={IconComponent} /> */}
        </motion.li>
      );
    })}
  </ul>
    </section>
  );
}
