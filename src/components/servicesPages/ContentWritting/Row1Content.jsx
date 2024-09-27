import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import img1 from "./ContentImg/content-banner.png";
import ContuctUsButton from "../../ContuctUsButton";
import "./ContentWritting.css";

const Row1Content = () => {
  // Animation variants for left-to-right and right-to-left animations
  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="content grid grid-cols-1 md:grid-cols-2 cover">
      {/* Animate the first section from left */}
      <motion.section
        className="p-10 pt-32"
        initial="hidden"
        animate="visible"
        variants={leftVariants}
      >
        <h1 className="text-4xl font-bold mb-6">
          Your trusted content writing agency to captivate and engage your
          audience.
        </h1>
        <p className="text-white">
          We offer end-to-end content marketing services, from developing a
          content marketing strategy to producing well-researched and engaging
          content. Our expert writers create content that is tailored to your
          business objectives and target audience.
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
        <img src={img1} alt="Content banner" />
      </motion.section>
    </div>
  );
};

export default Row1Content;
