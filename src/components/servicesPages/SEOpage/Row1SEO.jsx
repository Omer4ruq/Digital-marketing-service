import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import ContuctUsButton from "../../ContuctUsButton";
import "./SEOservice.css";

const Row1SEO = () => {
  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };
  return (
    <div>
      <div className="seo grid grid-cols-1 md:grid-cols-2 cover">
        {/* Animate the first section from left */}
        <motion.section
          className="p-10 pt-32"
          initial="hidden"
          animate="visible"
          variants={leftVariants}
        >
          <h1 className="text-xl font-bold mb-6">
            Drive organic traffic to your
          </h1>
          <h1 className="text-4xl font-bold mb-6">
            Website and grow your business exponentially
          </h1>
          <p className="text-white">
            At Brains Media, we offer top-notch SEO services that can help your
            business generate more leads, traffic, and revenue.
          </p>
          <ContuctUsButton />
        </motion.section>

        {/* Animate the second section from right */}
        <motion.section
          className="md:w-[100%] p-10 md:pt-32 md:pl-20"
          initial="hidden"
          animate="visible"
          variants={rightVariants}
        >
          <img src="" alt="Content banner" />
        </motion.section>
      </div>
    </div>
  );
};

export default Row1SEO;
