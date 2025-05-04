"use client";

import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"]
const SECTION_IDS: SectionName[] =  links.map(link => link.name)

export default function useSectionObserver() {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry && Date.now() - timeOfLastClick > 500) {
          setActiveSection(visibleEntry.target.id as SectionName);
        }
      },
      { threshold: 0.5} // Section must be at least 50% visible to trigger
    );

    SECTION_IDS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [setActiveSection, timeOfLastClick]);
}
