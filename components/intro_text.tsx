import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";

const TypewriterSequence = () => {
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  useEffect(() => {
    if (showSecond) {
      const timer = setTimeout(() => {
        setShowThird(true);
      }, 4000); // Adjust the timeout according to the length of the second Typewriter

      return () => clearTimeout(timer);
    }
  }, [showSecond]);

  return (
    <motion.h1
      className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Typewriter
        options={{
          strings: ["Hola !"],
          autoStart: true,
          delay: 75,
          deleteSpeed: 50,
          onInit: (typewriter) => {
            typewriter.callFunction(() => {
              setTimeout(() => setShowSecond(true), 2000); // Adjust the timeout according to the length of the first Typewriter
            }).start();
          },
        }}
      />
      {showSecond && (
        <Typewriter
          options={{
            strings: [
              "My Name is Parshuram Reddy Sudda",
              "Call me Ramdy",
              "May be Ram is Better, So ....",
              "I am Ram",
            ],
            autoStart: true,
            delay: 75,
            deleteSpeed: 10
          }}
          onInit={(typewriter) => {
            typewriter.typeString('Hello World!')
            typewriter.callFunction(() => {
                setTimeout(() => setShowThird(true), 2000); // Adjust the timeout according to the length of the second Typewriter
              }).start();
          }}
          
        />
      )}
      {showThird && (
        <Typewriter
          options={{
            strings: [
              "What do I do for my Tea",
              "I'm a software developer with over 4+ years of full-time experience.",
              "So What do you call me!",
              "A Full Stack Engineer ",
            ],
            autoStart: true,
            delay: 2000,
            deleteSpeed: 50,
            cursor: '', // Remove the cursor
          }}
        />
      )}
    </motion.h1>
  );
};

export default TypewriterSequence;
