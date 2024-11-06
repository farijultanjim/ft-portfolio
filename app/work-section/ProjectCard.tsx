import React from "react";
import { ProjectProps } from "./projectDetails";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  image,
}: ProjectProps) => {
  return (
    <motion.div
      style={{
        backgroundColor: "#222",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "relative",
      }}
      className="relative z-10 h-[550px] w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 sm:h-[700px] sm:w-[100%] md:h-[550px] md:w-[100%] lg:h-[400px] "
    >
      <Image src={image} alt={name} />
      <div>
        <div>
          {technologies.map((tech, id) => (
            <div key={id}></div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
