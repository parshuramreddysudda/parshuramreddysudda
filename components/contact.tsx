"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import toast from "react-hot-toast";
import { useForm } from '@formspree/react';
import SubmitBtn from "./submit-btn";
import { stat } from "fs";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [state, handleSubmit] = useForm("xnqlorbo");

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    if (state.succeeded) {
      toast.success("Email sent successfully! 🚀");
      // Optionally reset the form after successful submission
      e.target.reset(); // This will reset the form fields
    } else if (state.errors) {
      toast.error("Something went wrong");
    }
  };
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me ✉️</SectionHeading>

      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Feel free to reach out to me directly at{" "}
        <a className="underline" href="mailto:parshuramsudda@gmail.com">
        parshuramsudda@gmail.com
        </a>{" "}
        or simply use the form below.
      </p>

      <form
        className="flex flex-col mt-10 dark:text-black"
        onSubmit={onSubmit} // Use the onSubmit handler
      >
        <input
          className="px-4 transition-all rounded-lg h-14 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email 📧"
        />
        <textarea
          className="p-4 my-3 transition-all rounded-lg h-52 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          name="message"
          placeholder="Your message ✏️"
          required
          maxLength={5000}
        />
         <SubmitBtn submitting={state.submitting} /> 
      </form>
    </motion.section>
  );
}