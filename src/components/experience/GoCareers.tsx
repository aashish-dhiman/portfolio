import React from "react";
import { ArrowRight } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function GoCareers() {
  const tasks = [
    {
      text: "Single-handedly driving the development of a cutting-edge job board platform with a major focus on enhancing UX, resulting in a 40% increase in user engagement.",
    },
    {
      text: "Engineered a complete codebase migration from React.js to Next.js, enhancing optimization and performance metrics by a notable 30%, revolutionizing user experience and website speed for 100k+ monthly traffic.",
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
        <div className="flex w-full flex-col space-y-3 ">
          <div className="spacey-y-2 flex flex-col">
            {/* Title */}
            <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
              SDE Intern
            </span>
            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-heading sm:flex-row sm:items-center sm:text-base">
              {/* Company name */}
              <span>Go Careers</span>

              {/* Date */}
              <span>Apr 2024 - Present</span>
            </div>
          </div>
          <div className="flex flex-col space-y-1 text-sm sm:text-base">
            {/* Tasks Description 1 */}
            {tasks?.map((item, index) => {
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
                Technologies used: React.js, Next.js, Redux, React Query,
                TypeScript, Tailwind CSS, and Shadcn UI.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
