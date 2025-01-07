import React from "react";
import { ArrowRight } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function TribeLink() {
  const tasks = [
    {
      text: "Developed and implemented a scalable frontend architecture from scratch for a stealth-mode platform aimed at enhancing the creator economy, transforming Figma designs into pixel-perfect & responsive UI.",
    },
    {
      text: "Collaborated closely with the design and product teams to ensure seamless integration of features, optimizing user experience for content-creators-focused platform.",
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
            <div className="flex items-center justify-between">
              <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
                Frontend Engineer
              </span>
              <span className="text-sm">Remote</span>
            </div>
            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-heading sm:flex-row sm:items-center sm:text-base">
              {/* Company name */}
              <span>TribeLink</span>

              {/* Date */}
              <span>Sep 2024 - Nov 2024</span>
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
                Technologies used: Next.js, TypeScript, Tailwind CSS, React
                Query, and Shadcn UI.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
