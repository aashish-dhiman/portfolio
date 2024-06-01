import React from "react";
import { ArrowRight } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function Epoch() {
  const tasks = [
    {
      text: "Developed an AI-driven trading platform for streamlined stock analysis, integrating a financial chatbot and a comprehensive stock dashboard. Focused on enhancing UX with real-time data updates and interactive features. Delivered a robust, scalable solution meeting the complex needs of stock traders.",
    },
    {
      text: "Successfully migrated the codebase from pages router to app router, optimizing the UI and achieving a 20% performance increase.",
    },
    {
      text: "Led a cross-functional team of 3 members, fostering efficient collaboration and successfully guiding the team towards achieving project objectives.",
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-between gap-3 px-4 md:px-0 lg:flex-row xl:gap-5"
      >
        <div className="flex w-full flex-col space-y-3 lg:max-w-xl xl:max-w-2xl ">
          <div className="spacey-y-2 flex flex-col">
            {/* Title */}
            <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
              Full Stack Engineer Intern
            </span>
            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-heading sm:flex-row sm:items-center sm:text-base">
              {/* Company name */}
              <span>Epoch - (California-US)</span>

              {/* Date */}
              <span>Jan 2024 - Apr 2024</span>
            </div>
          </div>
          <div className="flex flex-col space-y-1 text-sm sm:text-base">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
              return (
                <div key={index} className="flex flex-row space-x-2">
                  <ArrowRight className={"h-5 w-4 flex-none"} />
                  <span>{item.text}</span>
                </div>
              );
            })}
            <div className="flex flex-row space-x-2">
              <ArrowRight className={"h-5 w-4 flex-none"} />
              <span className="font-bold text-heading">
                Technologies used: Next.js, TypeScript, Tailwind CSS, React
                Query, and Web Socket.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
