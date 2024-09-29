import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Hero.css";
import { FaArrowRightLong } from "react-icons/fa6";
import TypingText from "./TypyingText";

import { Link } from "react-router-dom";

const Hero = () => {
  const controls = useAnimation(); // Controls the animation based on scroll
  const [ref, inView] = useInView({
    threshold: 0.3, // Trigger animation when 30% of the section is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [controls, inView]);
  const textVariants = {
    initial: {
      x: 5,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const typo =
    "If your business is not on Social Media, then you are out of the competition.";
  return (
    <div className="hero pl-4 pr-4 mb-8">
      <div className="text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <motion.h2
            variants={textVariants}
            className="text-3xl md:text-6xl lg:text-8xl font-bold mb-4 text-center"
          >
            Get your business online in less than 24 hours
          </motion.h2>
          <motion.h1 variants={textVariants}>
            <TypingText typo={typo}></TypingText>
          </motion.h1>
          <motion.div variants={textVariants} className="buttons lg:-mt-8">
            <motion.button variants={textVariants}>
              <Link
                to="work"
                smooth={true}
                duration={500}
                className="flex justify-center "
              >
                <div className="flex items-center gap-2 mt-5 md:mt-10 bg-[#F6C71E] hover:bg-zinc-500 transition-colors duration-1000 ease-in-out text-gray-900 rounded-none p-3 font-semibold text-xl ">
                  Get Started Now <FaArrowRightLong />
                </div>
              </Link>
            </motion.button>
            {/* <motion.button variants={textVariants}>
              {" "}
              <Link to="contact" smooth={true} duration={500}>
                Contact Me
              </Link>
            </motion.button> */}
          </motion.div>
          {/* <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          /> */}
        </motion.div>
        {/* <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
          Get your business online in less than 24 hours
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-mono mb-6">
          If your business is not on Social Media, then you are out of the
          competition.
          <TypingText typo={typo}></TypingText>
        </p>

        <div className="flex justify-center">
          <button className="flex items-center gap-2 bg-[#F6C71E] hover:bg-zinc-500 transition-colors duration-1000 ease-in-out text-gray-900 rounded-none p-3 font-semibold text-xl ">
            Get Started Now <FaArrowRightLong />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
