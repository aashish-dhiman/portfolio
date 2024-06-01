import React from "react";
import { motion } from "framer-motion";
import SkillCardBlock from "./SkillCardBlock";

interface Props {
  title: string;
  skills: {
    icon: any;
    name: string;
  }[];
}

const SkillCard = ({ title, skills }: Props) => {
  return (
    <div className="flex h-full w-[100%] flex-col items-center sm:items-start justify-center gap-3 rounded-[5px] bg-darkHover p-[20px]">
      <div className="text-lg sm:text-2xl font-bold">{title}</div>
      <div className="grid grid-cols-2 place-items-center items-start flex-row flex-wrap sm:items-center justify-start gap-3 sm:flex md:gap-5">
        {skills?.map((skill, i) => (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 1,
            }}
            transition={{
              duration: 0.5,
              delay: i / 10,
            }}
            key={i}
          >
            <SkillCardBlock icon={skill.icon} name={skill.name} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
