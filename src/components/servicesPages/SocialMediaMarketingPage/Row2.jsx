import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import framer-motion
import ContuctUsButton from "../../ContuctUsButton";

const Row2 = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 mt-6" ref={ref}>
      <motion.section
        className="p-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInLeft}
      >
        <img
          src="https://brainsmediasolutions.com/wp-content/uploads/2023/05/option-2.jpg"
          alt=""
        />
      </motion.section>
      <motion.section
        className="p-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInRight}
      >
        <h1 className="text-2xl font-bold mb-6">
          Why is Social Media important in today’s thriving digital marketing
          world?
        </h1>
        <p className="text-gray-400">
          Social media is essential for any business or brand looking to succeed
          in today’s digital age. It allows companies to reach out and engage
          and build strong relationships with their customers. Social media
          platforms like Facebook, Instagram, LinkedIn, and Twitter offer an
          excellent opportunity to increase brand awareness, drive website
          traffic, generate leads, and boost sales.
        </p>
        <p className="text-gray-400 mt-4">
          This is an affordable way to promote your brand, making it the best
          marketing strategy for businesses of all sizes. In short, social media
          is not just important; it’s critical for businesses to leverage the
          power of social media and stay competitive in today’s marketplace.
        </p>
        <div className="mt-1">
          <ContuctUsButton />
        </div>
      </motion.section>
    </div>
  );
};

export default Row2;
