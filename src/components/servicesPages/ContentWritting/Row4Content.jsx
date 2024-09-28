import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import framer-motion
import "./Row4Content.css";
import content from "./ContentImg/writer.png";
import blog from "./ContentImg/blog.png";
import seo from "./ContentImg/seo.png";
import social from "./ContentImg/social-media.png";

const Row4Content = () => {
  // Variants for animations
  const fadeInUp = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  // Ref and InView hook to trigger animation when in view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <div className="row4content pt-10" ref={ref}>
      <motion.div
        className="text-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <h1 className="text-2xl font-bold text-black mb-4">Our Commitments</h1>
        <p className="text-black">
          Content writing is not just about putting words together but about
          creating a compelling message for your audience.
        </p>
      </motion.div>

      {/* Grid Section with fade-in animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-4">
        <motion.div
          className="p-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <img
            src={content}
            alt="Website Content"
            className="w-16 h-16 object-cover mb-2 mx-auto"
          />
          <h1 className="font-bold text-2xl text-center mb-4 text-[#F6C71E]">
            Website Content
          </h1>
          <p className="text-black text-center">
            Engage your audience and convey your brand message with our expertly
            crafted website content.
          </p>
        </motion.div>

        <motion.div
          className="p-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <img
            src={blog}
            alt="Blog/Article Writing"
            className="w-16 h-16 object-cover mb-2 mx-auto"
          />
          <h1 className="font-bold text-2xl text-center mb-4 text-[#F6C71E]">
            Blog/Article Writing
          </h1>
          <p className="text-black text-center">
            Establish thought leadership, drive traffic and engagement with our
            compelling blog/article writing services.
          </p>
        </motion.div>

        <motion.div
          className="p-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <img
            src={social}
            alt="Social Media Content"
            className="w-16 h-16 object-cover mb-2 mx-auto"
          />
          <h1 className="font-bold text-2xl text-center mb-4 text-[#F6C71E]">
            Social Media Content
          </h1>
          <p className="text-black text-center">
            Increase your social media presence and connect with your audience
            with our unique and engaging social media content.
          </p>
        </motion.div>

        <motion.div
          className="p-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <img
            src={seo}
            alt="SEO Writing"
            className="w-16 h-16 object-cover mb-2 mx-auto"
          />
          <h1 className="font-bold text-2xl text-center mb-4 text-[#F6C71E]">
            SEO Writing
          </h1>
          <p className="text-black text-center">
            Boost your online visibility and attract organic traffic to your
            website with our top-notch SEO writing services.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Row4Content;
