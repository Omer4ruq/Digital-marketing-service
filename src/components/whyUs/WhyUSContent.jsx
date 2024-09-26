import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img1 from "../../assets/about3.jpg";

const WhyUSContent = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3, // Start animation when 30% of the section is in view
    triggerOnce: true, // Animation happens only once
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.2 },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.4 },
    },
  };

  return (
    <div ref={ref} className="bg-white w-10/12 mx-auto">
      <div className="grid grid-cols-1 p-4 md:mb-16 md:grid-cols-2 md:pl-14">
        <motion.section
          className="pr-1 mt-6 md:mt-6 mb-6"
          variants={textVariant}
          initial="hidden"
          animate={controls}
        >
          <h1 className="text-2xl font-semibold mb-4">
            Why Choose Bros Media for Digital Marketing in Bangladesh
          </h1>
          <div className="pr-8 ">
            <p className="pb-4 text-gray-500 font-sans">
              Bros Media Solutions is the number one digital marketing service
              provider, located near Chittagong. We are known for delivering
              exceptional quality and efficient work.
            </p>
            <p className="text-gray-500 font-sans">
              As one of the most experienced digital marketing service
              providers, we plan and execute various digital marketing
              strategies like Website Designing, Search Engine Optimization
              (SEO), Google Ads, Social Media Marketing, etc., for our clients.
              Our extensive experience has made us one of the best digital
              marketing agencies.
            </p>
            <button className="flex items-center gap-2 mt-6 bg-[#F6C71E] hover:bg-zinc-500 transition-colors duration-1000 ease-in-out text-white rounded-none p-3 font-semibold text-base ">
              Learn More
            </button>
          </div>
        </motion.section>

        <motion.section
          className="pl-0 md:pr-10"
          variants={imageVariant}
          initial="hidden"
          animate={controls}
        >
          <div className="md:mt-24">
            <img src={img1} alt="sdf" className="md:absolute w-[420px]" />
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default WhyUSContent;
