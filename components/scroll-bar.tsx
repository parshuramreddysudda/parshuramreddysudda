import { motion, useScroll, useSpring } from "framer-motion"

export function Scroll() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 z-50 h-1 origin-left bg-blue-400"
      style={{ scaleX }}
    />
  );
}