import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import framer-motion
import "./Row1.css";

const Row1 = () => {
  // Animation variants
  const fadeInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const fadeInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  // Ref and InView for triggering animations
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <div className="row1" ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.section
          className="p-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInLeft}
        >
          <h1 className="text-5xl font-bold text-black mt-16 mb-8">
            Rise Above the Noise
          </h1>
          <h1 className="text-lg font-semibold text-black mb-6">
            Make Your Brand Stand Out and Get Noticed with Our Social Media
            Marketing Services!
          </h1>
          <p className="text-gray-400">
            Our expertise lies in crafting lead-generation social media
            marketing campaigns, creative posts, and engaging content that
            empower brands to break through the clutter and connect with their
            audience.
          </p>
        </motion.section>
        <motion.section
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInRight}
        >
          <img
            src="https://brainsmediasolutions.com/wp-content/uploads/2023/04/img4_.png"
            alt=""
          />
        </motion.section>
      </div>
    </div>
  );
};

export default Row1;
