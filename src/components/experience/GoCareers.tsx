import React from "react";
import { ArrowRight } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function GoCareers() {
  const tasks = [
    {
      text: "Developed a job board platform using Next.js, TypeScript, Redux, Shadcn UI, and Tailwind CSS, leading to a 60% increase in user engagement and integrated Google Ads to boost ad revenue by 20%.",
    },
    {
      text: "Led a migration from React.js to Next.js, improving performance by 30%, reducing load times by 50% with SSR, and handling 100k+ monthly traffic.",
    },
    {
      text: "Enhanced SEO with Open Graph meta tags, and developed an admin panel and blog section, boosting content management efficiency by 40% and increasing user engagement by 60% in three months.",
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
              <span>Apr 2024 - July 2024</span>
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
