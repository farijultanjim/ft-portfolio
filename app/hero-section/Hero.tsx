import React from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { bodyAnimation, imageAnimation } from "../animations/animations";

import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";
import { monaSans } from "../fonts/monaSans";
import AnimatedWords from "../animations/AnimatedWords";

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
            <motion.button
              className="hidden rounded-full border-2 border-[#e4ded7] py-2 px-4 font-semibold text-[#e4ded7] sm:block md:text-base"
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
            <motion.p variants={bodyAnimation}>
              <AiFillGithub size={24} />
            </motion.p>
          </Link>
          <Link
            href={"https://youtube.com/"}
            target="_blank"
            aria-label="View Youtube website"
          >
            <motion.p variants={bodyAnimation}>
              <AiFillYoutube size={24} />
            </motion.p>
          </Link>
          <Link
            href={"https://x.com/"}
            target="_blank"
            aria-label="View Github website"
          >
            <motion.p variants={bodyAnimation}>
              <AiFillTwitterCircle size={24} />
            </motion.p>
          </Link>
          <Link
            href={"https://instagram.com/"}
            target="_blank"
            aria-label="View Github website"
          >
            <motion.p variants={bodyAnimation}>
              <AiFillInstagram size={24} />
            </motion.p>
          </Link>
        </div>
      </div>

      <div className="-mt-36 flex flex-col items-center justify-center">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}`}
        >
          <AnimatedWords
            title="Farijul Tanzil"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />
          <motion.div
            className="absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-190px]"
            variants={imageAnimation}
          >
            <Image
              src="/ft.jpg"
              priority
              alt="Profile"
              data-blobity-tooltip="Farijul Tanzil"
              data-blobity-invert="false"
              width={150}
              height={150}
              className="rounded-full grayscale transition-all hover:grayscale-0 md:w-[200px] lg:w-[245px]"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 flex items-center justify-center md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between">
        <motion.div className="max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
        variants={bodyAnimation}
        >
          <p className="z-50 text-center text-base font-medium text-[#e4ded7] md:text-xl lg:text-left">
            Creative Developer, Web Designer, Freelancer, Frontend Developer.
          </p>
        </motion.div>

        <motion.div className="max-w-[500px] hidden lg:block lg:max-w-[400px]"
        variants={bodyAnimation}
        >
          <p className="text-right text-base font-semibold text-[#e4ded7] md:text-xl">
            With 2 years experience as a professional web developer.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
