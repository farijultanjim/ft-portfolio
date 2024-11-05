import React from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { bodyAnimation } from "../animations/animations";

import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-screen w-full items-stretch justify-center bg-[url('.//../public/heros.jpg')] bg-cover bg-center py-0"
      id="home"
      initial="initial"
      animate="animate"
    >
      {/* checked background  */}
      <Image
        src={"/background.png"}
        alt="BG"
        width={1920}
        height={1080}
        className="absolute left-0 top-0 h-full w-full bg-cover bg-center"
      />

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        {/* Content Button  */}

        <div>
          <Link href="#">
            <motion.button className="hidden rounded-full border-2 border-[#e4ded7] py-2 px-4 font-semibold text-[#e4ded7] sm:block md:text-base"
            variants={bodyAnimation}
            >
              Let&apos;s Connect
            </motion.button>
          </Link>
        </div>

        {/* Social Icons  */}
        <div className="flex gap-10 text-[#e4ded7] sm:gap-6 md:gap-8 lg:gap-8">
          <Link
            href={"https://github.com/"}
            target="_blank"
            aria-label="View Github website"
          >
            <motion.p
            variants={bodyAnimation}
            >
              <AiFillGithub size={24} />
            </motion.p>
          </Link>
          <Link
            href={"https://youtube.com/"}
            target="_blank"
            aria-label="View Youtube website"
          >
            <motion.p
            variants={bodyAnimation}>
              <AiFillYoutube size={24} />
            </motion.p>
          </Link>
          <Link
            href={"https://x.com/"}
            target="_blank"
            aria-label="View Github website"
          >
            <motion.p
            variants={bodyAnimation}>
              <AiFillTwitterCircle size={24} />
            </motion.p>
          </Link>
          <Link
            href={"https://instagram.com/"}
            target="_blank"
            aria-label="View Github website"
          >
            <motion.p
            variants={bodyAnimation}>
              <AiFillInstagram size={24} />
            </motion.p>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
