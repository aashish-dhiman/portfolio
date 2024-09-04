"use client";

import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Link as ScrollLink,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Image from "next/image";
import hero from "@/assets/hero.png";

const HeroSection = () => {
  const refContent = useRef(null);
  const inViewContent = useInView(refContent, { once: true });

  return (
    <section
      className="h-full w-full pb-8 pt-16 sm:px-6 sm:pb-10 md:pt-24"
      id="intro"
    >
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-start">
        {/* intro section */}
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={
            inViewContent
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 20, scale: 0.9 }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full flex-1"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
            className="mb-4 text-4xl font-[700] text-white md:text-5xl lg:leading-normal xl:text-6xl"
          >
            Hi, I&apos;m <span className="text-heading">Aashish</span> a{" "}
            <span className="text-heading">passionate</span> Full Stack Software
            Developer.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          >
            <TypeAnimation
              // preRenderFirstString={true}
              sequence={[
                500,
                "I develop interactive UI using React.js and Next.js.",
                1000,
                "I'm a MERN stack developer.",
                1000,
                "Transforming visions into seamless user experiences.",
                1000,
                "Bringing ideas to life with creativity and code.",
                500,
              ]}
              speed={50}
              className="text-sm font-medium md:text-xl xl:text-2xl"
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
            className="mb-6 mt-3 text-base text-textPara sm:text-lg lg:text-xl"
          >
            Stick around to see some of my work.
          </motion.p>

          <div className="flex flex-col items-center gap-8 sm:gap-4 sm:flex-row ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            >
              <ScrollLink
                to="contact"
                smooth={true}
                duration={1000}
                className="duration-400 w-full cursor-pointer rounded-full bg-white px-6 py-3 text-center text-lg font-bold text-darkHover transition-all duration-500 ease-in-out hover:scale-[0.98] hover:bg-gray-300 sm:w-fit"
              >
                Hire Me
              </ScrollLink>
            </motion.div>

            {/* CV Drive Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
            >
              <a
                href="https://drive.google.com/file/d/1wEDlamry-sl0mYrE4tbxitZaHy-s7jSX/view"
                target="_blank"
                rel="noopener noreferrer"
                className="duration-400 w-full rounded-full border-2 border-white bg-transparent px-6 py-3 text-center text-lg font-medium text-white transition-all duration-500 ease-in-out hover:scale-[0.98] hover:bg-darkHover sm:w-fit"
              >
                Download CV
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero image section */}
        <motion.div
          ref={refContent}
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.8,
            filter: "blur(10px)",
          }}
          animate={
            inViewContent
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }
              : { opacity: 0, y: 20, scale: 0.8, filter: "blur(10px)" }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative mt-5 rounded-full lg:-mt-5"
        >
          <Image
            width={400}
            height={400}
            src={hero}
            alt="Karan"
            priority={true}
            className="size-[300px] rotate-2 cursor-pointer rounded-full object-cover transition-all duration-300 ease-in-out hover:scale-[1.02] sm:size-[380px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
