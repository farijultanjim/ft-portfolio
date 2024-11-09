import React from "react";
import ReviewCard from "./ReviewCard";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";

const ReviewGrid = () => {
  return (
    <section className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-24">
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10 text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        <AnimatedWords2
          title="Reviews"
          style={`flex max-w-[500px] flex-col items-center text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,4vw,155.04px)]`}
        />

        <AnimatedBody
          text="Access top-tier group mentoring plans and exclusive professional benefits for you team"
          className="w-[90%] text-center text-sm font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-base"
        />
      </div>
      <ReviewCard />
    </section>
  );
};

export default ReviewGrid;
