import { ArrowRight } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const LeftView = ({ id, name, description, img, tech, source, demo }: any) => {
  const refContent = useRef(null);
  const inViewContent = useInView(refContent);

  return (
    <div className="mt-[80px] grid grid-cols-1 md:px-10 xl:mt-[120px] xl:grid-cols-12">
      <motion.div
        ref={refContent}
        initial={{ opacity: 0, x: -50 }}
        animate={inViewContent && { opacity: 1, x: 0 }}
        viewport={{
          once: true,
          amount: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="relative order-2 col-span-5 flex w-full flex-col items-start xl:order-1"
      >
        {/* project tagline */}
        <div
          className={`w-full px-3 py-2 text-left text-3xl font-[600] transition-all duration-300 ease-in-out lg:py-0`}
        >
          <h3 className="font-bold text-heading">{name}</h3>
        </div>
        {/* description absolute */}
        <div className="group left-0 top-[40px] z-10 mt-1 w-full rounded-lg bg-bgDark p-2 shadow-sm shadow-slate-800 lg:absolute lg:w-[500px]">
          {description.map((item: any, i: number) => (
            <div key={i} className="flex items-start gap-1 sm:gap-2">
              <ArrowRight className={" h-5 w-4 flex-none"} />
              <div className="text-sm text-textWhite">
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>
        {/* tech stack */}
        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-heading md:gap-3 md:text-sm lg:mt-[200px] ">
          {tech?.map((item: any, i: number) => {
            return <span key={i}>{item}</span>;
          })}
        </div>
        {/* links */}
        <div className="mt-5 flex w-full items-center justify-start gap-10 text-sm font-[500] ">
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noreferrer"
              className="group relative flex animate-bounce cursor-pointer flex-col items-center gap-1"
            >
              <GitHubIcon />
              <span className="absolute left-[50%] top-[150%] w-[90px] translate-x-[-50%] translate-y-[-50%] whitespace-nowrap px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                Source Code
              </span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="group relative flex animate-bounce cursor-pointer flex-col items-center gap-1"
            >
              <LaunchIcon />
              <span className="absolute left-[50%] top-[150%] w-fit translate-x-[-50%] translate-y-[-50%] px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                Demo
              </span>
            </a>
          )}
        </div>
      </motion.div>
      {/* project image */}
      <motion.div
        ref={refContent}
        initial={{ opacity: 0, filter: "blur(6px)" }}
        animate={
          inViewContent
            ? { opacity: 1, filter: "blur(0px)" }
            : { opacity: 1, filter: "blur(6px) " }
        }
        transition={{ duration: 1 }}
        className="order-1 col-span-7 flex justify-end transition-all duration-700 ease-in-out hover:z-20 hover:scale-[1.05] xl:order-2 xl:self-start xl:justify-self-end"
      >
        <a
          href={demo}
          target="_blank"
          className="mx-auto flex w-fit items-center justify-center lg:mx-0 lg:justify-end "
        >
          <Image
            width={500}
            height={300}
            src={img}
            alt={name}
            priority={true}
            className="cursor-pointer rounded-md object-contain "
          />
        </a>
      </motion.div>
    </div>
  );
};

export default LeftView;
