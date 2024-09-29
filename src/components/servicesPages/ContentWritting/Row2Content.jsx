import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContuctUsButton from "../../ContuctUsButton";

const Row2Content = () => {
  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-16 bg-white"
      ref={ref}
    >
      {/* Left section: Animate on scroll */}
      <motion.section
        className="relative p-6 md:p-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={leftVariants}
      >
        <div className="relative">
          <img
            src="https://brainsmediasolutions.com/wp-content/uploads/2023/05/content_page.png"
            alt="High-Quality Content"
            className="rounded-2xl shadow-lg w-full h-auto"
          />
          <div className="absolute inset-x-0 top-[80%] md:top-[60%] w-[80%] md:w-[450px] bg-[#F6C71E] rounded-2xl shadow-xl mx-auto md:ml-16">
            <div className="p-2 md:p-8 text-center md:text-left">
              <h1 className="text-black font-bold mb-2 md:mb-4 text-xl md:text-2xl">
                High-Quality Content
              </h1>
              <p className="text-white text-sm md:text-base">
                Powerful content is crucial to online purchasing. It’s the
                driving force behind all marketing elements, from web pages to
                reviews and search results. Effective content marketing connects
                with your target audience and converts prospects into customers.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Right section: Animate on scroll */}
      <motion.section
        className="p-6 pt-56 md:p-10 flex flex-col justify-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={rightVariants}
      >
        <div>
          <h1 className="text-yellow-400 text-lg md:text-xl">Who We Are</h1>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold mb-4">
            We Provide The Best Content Writing Service for You
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Brains Media is your one-stop platform for all your content needs,
            including website content, blog content, Instagram captions,
            LinkedIn posts, and product descriptions. We prioritize delivering
            quality content that meets and exceeds your expectations, helping
            you drive engagement, foster brand loyalty, and, ultimately, grow
            your business.
          </p>
          <p className="text-gray-500 mt-4 text-sm md:text-base">
            Having worked with some of India’s leading brands over the past 8
            years, and with over 15 Lakh words written for various digital
            platforms, we earned a reputation for being the most trusted content
            writing agencies in India.
          </p>
          <ContuctUsButton />
        </div>
      </motion.section>
    </div>
  );
};

export default Row2Content;
