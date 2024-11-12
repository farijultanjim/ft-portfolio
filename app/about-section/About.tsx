import Image from "next/image";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";

const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 w-full items-center justify-center overflow-hidden  bg-[#fff]  bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
    >
      <Image
        src={"/bg_blur-min.png"}
        alt="bg"
        width={1920}
        height={1080}
        className="absolute top-0 left-0  h-full w-full bg-cover"
      />

      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "Uncover Our Journey: Together, We are Shaping a Promising Future."
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
          className="mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#333] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
        />

        <div className="mx-auto flex w-full flex-col">
          <div className="mb-10 flex w-full flex-col gap-4 text-lg font-medium leading-relaxed tracking-wide text-[#333] md:mb-16 md:gap-6 md:text-xl lg:mb-16 lg:text-2xl">
            <AnimatedBody
              text={
                "Hello there! I'm Farijul Tanzil, a native Bangladeshi driven by innovation and a passion for creative expression. My journey into the digital realm began in the heart of the bustling street of Dhaka city Growing up surrounded by the dynamic energy of the city, I developed a keen interest in harnessing technology to improve out digital lives."
              }
            />
            <AnimatedBody
              text={
                "My career path is a tapestry woven with threads of dedication and dreams, each role a verse in the poem of my professional life."
              }
            />
            <AnimatedBody
              text={
                "Educated in the halls of knowledge, where wisdom flows like a river, I gathered the skills to navigate the ever-changing seas of technology."
              }
            />

            <AnimatedBody
              text={
                "Art and technology, two realms where my heart finds solace, intertwine in a dance of creativity and innovation. The beauty of tech that surrounds me is a constant source of amazement."
              }
            />
            <AnimatedBody
              text={
                "Beyond the digital world, I find joy in the culinary arts, where flavors blend like notes in a symphony, creating dishes that delight the senses."
              }
            />
          </div>

          <div className="mb-24 flex justify-between items-start w-full flex-row gap-4 text-lg font-normal leading-relaxed tracking-wide text-[#333]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-base md:leading-normal lg:mt-0 lg:mb-16 lg:text-lg">
            
            <div className="flex flex-col gap-4 md:gap-3 w-1/3">
              <AnimatedTitle
                text={"Frontend Tools"}
                className="text-2xl text-[#333] md:text-3xl lg:text-xl"
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />

              <AnimatedBody
                text={
                  "Next.js, React.js, TypeScript, JavaScript, Vite, HTML5, GitHub, NextAuth, Formik."
                }
              />
            </div>

            <div className="flex flex-col gap-4 md:gap-3 w-1/3">
              <AnimatedTitle
                text={"UI Libraries"}
                className="text-2xl text-[#333] md:text-3xl lg:text-xl"
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />

              <AnimatedBody
                text={
                  "Framer Motion, React Awesome Reveal, CSS3/SCSS/SASS, Tailwind CSS, Material UI, GSAP, Bootstrap, Chart.js."
                }
              />
            </div>
            
            <div className="flex flex-col gap-4 md:gap-3 w-1/3">
              <AnimatedTitle
                text={"Digital Tools"}
                className="text-2xl text-[#333] md:text-3xl lg:text-xl"
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />

              <AnimatedBody
                text={
                  "Adobe Illustrator, Figma, Framer, FigJam, Adobe XD, ProtoPie, Prototyping."
                }
              />
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
