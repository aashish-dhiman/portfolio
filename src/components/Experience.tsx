"use client";
import { useState, useTransition, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ExperienceWrapper from "./experience/ExperienceWrapper";

interface Props {}

const Experience = (props: Props) => {
  const refHeading = useRef(null);
  const refContent = useRef(null);
  const inViewHeading = useInView(refHeading);
  const inViewContent = useInView(refContent, { once: true });
  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-[80px] sm:px-6" id="experience">
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <h3 className="text-3xl font-[800] text-textWhite sm:text-5xl">
          Experience
        </h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-textWhite"></div>
      </motion.div>
      <div className="mt-16 sm:mt-20 flex flex-col items-center justify-between py-6">
        {/* Experience */}
        <ExperienceWrapper />
      </div>
    </section>
  );
};

export default Experience;
