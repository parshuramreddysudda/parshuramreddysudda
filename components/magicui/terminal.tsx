"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedSpanProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  // Add other MotionProps as needed, e.g., initial, animate, transition
  initial?: any;
  animate?: any;
  transition?: any;
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  initial,
  animate,
  transition,
  ...props
}: AnimatedSpanProps) => (
  <motion.div
    initial={initial || { opacity: 0, y: -5 }} // Provide default values
    animate={animate || { opacity: 1, y: 0 }}
    transition={transition || { duration: 0.3, delay: delay / 1000 }}
    className={cn("grid text-sm font-normal tracking-tight", className)}
    {...props}
  >
    {children}
  </motion.div>
);

interface TypingAnimationProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  // Add other MotionProps as needed
  initial?: any;
  animate?: any;
  transition?: any;
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  initial,
  animate,
  transition,
  ...props
}: TypingAnimationProps) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string. Received:");
  }

  const MotionComponent = motion(Component);

  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => clearInterval(typingEffect);
  }, [children, duration, started]);

  return (
    <MotionComponent
      className={cn("text-sm font-normal tracking-tight", className)}
      initial={initial} // Apply MotionProps here
      animate={animate}
      transition={transition}
      {...props} // Spread the rest of the props
    >
      {displayedText}
    </MotionComponent>
  );
};

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
  width?: string;
}

export const Terminal = ({
  children,
  className,
  width = "max-w-lg",
}: TerminalProps) => {
  const responsiveWidth =
    width || "max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl";
  return (
    <div
      className={cn(
        "z-0 h-full max-h-[600px] w-full max-w-lg rounded-xl border border-border bg-background",
        responsiveWidth,
        className
      )}
    >
      <div className="flex flex-col p-4 border-b gap-y-2 border-border">
        <div className="flex flex-row gap-x-2">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <pre className="p-4 whitespace-pre-wrap overflow-y-auto max-h-[400px]">
        <code className="grid gap-y-1 overflow-break">{children}</code>
      </pre>
    </div>
  );
};
