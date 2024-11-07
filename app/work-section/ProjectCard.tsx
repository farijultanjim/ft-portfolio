import React, { useRef } from "react";
import { ProjectProps } from "./projectDetails";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  image,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      style={{
        backgroundColor: "#222",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "relative",
      }}
      className={`relative z-10 h-[550px] w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 sm:h-[700px] sm:w-[100%] md:h-[550px] md:w-[100%] lg:h-[400px]`}
      initial="initial"
      animate="animate"
    >
      <Image
        src={image}
        alt={name}
        className={`absolute -bottom-2 w-[70%] sm:w-[85%] md:w-[60%] lg:max-w-[60%] ${id % 2 === 0 ? "right-0" : "left-0"}`}
      />

      <AnimatedTitle
        text={name}
        className={
          "lg:max-w-w[450px] lg:text-[48px lg:leading-none] max-w-[90%] text-[40px] leading-none text-white md:text-[44px] md:leading-none"
        }
        wordSpace={"mr-[0.25em]"}
        charSpace={"-mr-[0.01em]"}
      />

      <AnimatedBody
        text={description}
        className="mt-4 w-[90%] max-w-[457px] text-base font-semibold text-[#95979D]"
      />

      <div className="mt-9 flex gap-4">
        {technologies.map((tech, id) => (
          <AnimatedTitle
            text={tech}
            wordSpace={"mr-[0.25em]"}
            charSpace={"mr-[0.01em]"}
            key={id}
            className={"text-sm font-bold uppercase md:text-base lg:text-lg"}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
