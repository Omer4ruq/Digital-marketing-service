import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LogoSlider = () => {
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
  const logos = [
    "/src/assets/logo1.png",
    "/src/assets/logo2.png",
    "/src/assets/logo3.png",
    "/src/assets/logo4.png",

    "/src/assets/logo6.png",
    "/src/assets/logo7.png",
    "/src/assets/logo8.png",
  ];
  return (
    <div className="mb-16 p-6">
      <div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants}
          className="logo-slider-container w-full overflow-hidden"
        >
          {/* Title and subtitle */}
          <motion.div className="text-center">
            <motion.p className="text-base text-yellow-400 md:text-lg lg:text-xl font-light mb-2">
              Our Awesome Clients
            </motion.p>
            <motion.h1 className="text-xl text-black md:text-3xl lg:text-5xl font-bold mb-10">
              Our Services are Trusted by
            </motion.h1>
          </motion.div>
        </motion.div>
      </div>
      <div className="logo-slider-container w-full overflow-hidden">
        <div className="logo-slider flex items-center space-x-8 animate-scroll ">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-28 w-50 bg-slate-200 transition-transform duration-300 hover:scale-110 hover:bg-white hover:shadow-md"
            />
          ))}
          {/* Duplicate the logos for infinite scroll */}
          {logos.map((logo, index) => (
            <img
              key={index + logos.length}
              src={logo}
              alt={`Logo ${index + logos.length + 1}`}
              className="h-28 w-50 bg-slate-200 transition-transform duration-300 hover:scale-110 hover:bg-white hover:shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default LogoSlider;
