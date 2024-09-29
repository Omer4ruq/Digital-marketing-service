import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import framer-motion and useInView hook
import ContuctUsButton from "../../ContuctUsButton";
import content from "./ContentImg/writer.png";
import blog from "./ContentImg/blog.png";
import seo from "./ContentImg/seo.png";
import social from "./ContentImg/social-media.png";

const Row3Content = () => {
  // Animation variants
  const fadeInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const fadeInUp = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  // Ref and InView for triggering animations
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <div className="md:flex p-4 bg-white pt-8 md:pt-32" ref={ref}>
      {/* Left Section with fade-in from left */}
      <motion.section
        className="md:w-[1000px]"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInLeft}
      >
        <div className="p-4 md:p-10 md:pt-16">
          <h1 className="text-yellow-400">Who Us?</h1>
          <h1 className="mt-4 text-4xl font-bold mb-4">
            We're A Reliable & Trusted Content Marketing Agency
          </h1>
          <p className="text-gray-400">
            Our SEO content writing services improve online visibility, increase
            website traffic, and engage your target audience. As a trusted
            content marketing agency, we are committed to providing our clients
            with personalised solutions that meet their unique business goals
            and objectives.
          </p>
          <ContuctUsButton />
        </div>
      </motion.section>

      {/* Right Grid Section with fade-in from bottom */}
      <motion.section
        className="pt-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-4">
          <div className="bg-[#f5f5f5] p-10 shadow-md">
            <img
              src={content}
              alt="Website Content"
              className="w-16 h-16 object-cover mb-2 mx-auto"
            />
            <h1 className="font-bold text-2xl text-center mb-4">
              Website Content
            </h1>
            <p className="text-gray-400 text-center">
              Engage your audience and convey your brand message with our
              expertly crafted website content.
            </p>
          </div>
          <div className="bg-[#f5f5f5] p-10 shadow-md">
            <img
              src={blog}
              alt="Blog/Article Writing"
              className="w-16 h-16 object-cover mb-2 mx-auto"
            />
            <h1 className="font-bold text-2xl text-center mb-4">
              Blog/Article Writing
            </h1>
            <p className="text-gray-400 text-center">
              Establish thought leadership, drive traffic and engagement with
              our compelling blog/article writing services.
            </p>
          </div>
          <div className="bg-[#f5f5f5] p-10 shadow-md">
            <img
              src={social}
              alt="Social Media Content"
              className="w-16 h-16 object-cover mb-2 mx-auto"
            />
            <h1 className="font-bold text-2xl text-center mb-4">
              Social Media Content
            </h1>
            <p className="text-gray-400 text-center">
              Increase your social media presence and connect with your audience
              with our unique and engaging social media content.
            </p>
          </div>
          <div className="bg-[#f5f5f5] p-10 shadow-md">
            <img
              src={seo}
              alt="SEO Writing"
              className="w-16 h-16 object-cover mb-2 mx-auto"
            />
            <h1 className="font-bold text-2xl text-center mb-4">SEO Writing</h1>
            <p className="text-gray-400 text-center">
              Boost your online visibility and attract organic traffic to your
              website with our top-notch SEO writing services.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Row3Content;
