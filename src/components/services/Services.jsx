import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import social from "../../assets/social-media.png";
import web from "../../assets/development.png";
import content from "../../assets/content.png";
import seo from "../../assets/seo.png";
import ppc from "../../assets/pay-per-click.png";
import { Link } from "react-router-dom";

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3, // Trigger when 30% of the section is in view
    triggerOnce: true, // Animation occurs only once
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const titleVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  const itemVariantLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.3 },
    },
  };

  const itemVariantRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.3 },
    },
  };

  return (
    <div ref={ref} className="mb-16">
      {/* Title animation */}
      <div className="text-center">
        <motion.h1
          className="text-4xl font-bold mb-10"
          variants={titleVariant}
          initial="hidden"
          animate={controls}
        >
          Digital Marketing Services Under One Roof
        </motion.h1>
      </div>

      {/* First Row */}
      <div className="flex justify-between pl-1 md:pl-10 pr-1 md:pr-10 mb-10">
        <motion.div
          className="bg-white w-40 h-36 drop-shadow-xl text-center flex flex-col items-center justify-center p-4 md:w-48 md:h-40 lg:w-[370px] lg:h-56 hover:cursor-pointer hover:bg-yellow-400 transition-colors duration-1000 ease-in-out"
          variants={itemVariantLeft}
          initial="hidden"
          animate={controls}
        >
          <Link to="social-marketing">
            <img
              src={social}
              alt="Social Media Marketing"
              className="w-16 h-16 object-cover mb-2 mx-auto"
            />
            <h1 className="text-sm font-semibold md:text-base lg:text-lg">
              Social Media Marketing
            </h1>
          </Link>
        </motion.div>

        <motion.div
          className="bg-white w-40 h-36 drop-shadow-xl text-center flex flex-col items-center justify-center p-4 md:w-48 md:h-40 lg:w-[370px] lg:h-56 hover:cursor-pointer hover:bg-yellow-400 transition-colors duration-1000 ease-in-out"
          variants={itemVariantRight}
          initial="hidden"
          animate={controls}
        >
          <Link to="web-design">
            <img
              src={web}
              alt="Website Design"
              className="w-16 h-16 object-cover mb-2 mx-auto"
            />
            <h1 className="text-sm font-semibold md:text-base lg:text-lg">
              Website Design
            </h1>
          </Link>
        </motion.div>

        <motion.div
          className="bg-white w-40 h-36 drop-shadow-xl text-center flex flex-col items-center justify-center p-4 md:w-48 md:h-40 lg:w-[370px] lg:h-56 hover:cursor-pointer hover:bg-yellow-400 transition-colors duration-1000 ease-in-out"
          variants={itemVariantLeft}
          initial="hidden"
          animate={controls}
        >
          <Link to="content-writting">
            <img
              src={content}
              alt="Content Writing"
              className="w-16 h-16 object-cover mb-2 mx-auto"
            />
            <h1 className="text-sm font-semibold md:text-base lg:text-lg">
              Content Writing
            </h1>
          </Link>
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="flex justify-center pl-10 pr-10 gap-4">
        <motion.div
          className="bg-white w-40 h-36 drop-shadow-xl text-center flex flex-col items-center justify-center p-4 md:w-48 md:h-40 lg:w-[400px] lg:h-56 hover:cursor-pointer hover:bg-yellow-400 transition-colors duration-1000 ease-in-out"
          variants={itemVariantRight}
          initial="hidden"
          animate={controls}
        >
          <Link to="seo">
            <img
              src={seo}
              alt="SEO"
              className="w-16 h-16 object-cover mb-2 mx-auto"
            />
            <h1 className="text-sm font-semibold md:text-base lg:text-lg">
              SEO
            </h1>
          </Link>
        </motion.div>

        <motion.div
          className="bg-white w-40 h-36 drop-shadow-xl text-center flex flex-col items-center justify-center p-4 md:w-48 md:h-40 lg:w-[400px] lg:h-56 hover:cursor-pointer hover:bg-yellow-400 transition-colors duration-1000 ease-in-out"
          variants={itemVariantLeft}
          initial="hidden"
          animate={controls}
        >
          <img
            src={ppc}
            alt="PPC"
            className="w-16 h-16 object-cover mb-2 mx-auto"
          />
          <h1 className="text-sm font-semibold md:text-base lg:text-lg">PPC</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
