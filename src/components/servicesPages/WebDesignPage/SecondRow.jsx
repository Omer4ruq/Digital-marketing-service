import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SecondRow = () => {
  const controls = useAnimation(); // Controls the animation based on scroll
  const [ref, inView] = useInView({
    threshold: 0.3, // Trigger animation when 30% of the section is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div>
      <Parallax
        bgImage="https://brainsmediasolutions.com/wp-content/uploads/2023/04/web-designers-working-at-the-office-2021-09-17-18-17-04-utc-min.jpg"
        bgImageAlt="the cat"
        strength={300}
        className="relative h-screen"
      >
        <div className="flex items-center justify-center absolute min-h-screen w-full bg-[linear-gradient(rgba(8,0,58,0.7),rgba(8,0,58,0.7))] bg-cover bg-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textVariants}
            className="logo-slider-container w-full overflow-hidden"
          >
            {/* Title and subtitle */}
            <motion.div className="text-center">
              {/* <motion.p className="text-base text-yellow-400 md:text-lg lg:text-xl font-light mb-2">
                Website Development and Digital Marketing Company
              </motion.p> */}
              <motion.h1 className="text-xl text-white md:text-3xl lg:text-5xl font-bold mb-10">
                Get the most out of your marketing efforts with our ROI-driven
                design services.
              </motion.h1>
            </motion.div>
          </motion.div>
        </div>
      </Parallax>
    </div>
  );
};

export default SecondRow;
