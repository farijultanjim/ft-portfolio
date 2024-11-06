import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type AnimatedTitleProps = {
  text: string;
  className: string;
  wordSpace: string;
  charSpace: string;
  delay?: number;
};

export default function AnimatedTitle({
  text,
  className,
  wordSpace,
  charSpace,
}: AnimatedTitleProps) {
  const ctrls = useAnimation();

  const { ref, inView } useInView{{
    threshold: 0.1,
    triggerOnce: true,
  }
}
  
useEffect (() => {
  if (inView) { 
    ctrls.start("visible");
  }
  if (!inView) {
    ctrls.start("hidden");
  }
}, [ctrls, inView]);

const wordAnimation = {
  hidden: {

  },
  visible: {
    
  }
}

  return (
    <h2>
      {
        text.split(" ").map((word, index) => {
          return (
            
            <motion.span>
              {word.split("").map((character, index) => {
                return (
                  <motion.span>
                    {character}
                  </motion.span>
                )
              })}
            </motion.span>
          )
        })
      }
    </h2>
  )
}