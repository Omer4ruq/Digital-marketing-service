import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import framer-motion and useInView hook
import ContuctUsButton from "../../ContuctUsButton";
import content from "./SEOImg/writer.png";
import blog from "./SEOImg/blog.png";
import seo from "./SEOImg/seo.png";
import social from "./SEOImg/social-media.png";

const Row3SEO = () => {
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
    <div className=" p-4  pt-8 md:pt-16 " ref={ref}>
      {/* Left Section with fade-in from left */}
      <motion.section
        className="md:w-[1000px] text-center md:ml-44"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInLeft}
      >
        <div className="p-10 md:pt-16">
          <h1 className="mt-4 text-4xl font-bold mb-4">
            Why is SEO a smart investment for your business?
          </h1>
          <p className="text-gray-400">
            With our professional SEO services, your business can become the
            preferred choice for numerous potential customers searching for the
            products/services you offer.
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
          <div className="bg-white p-10 shadow-md">
            <img
              src={content}
              alt="Website Content"
              className="w-16 h-16 object-cover mb-2 mx-auto"
            />
            <h1 className="font-bold text-2xl text-center mb-4">
              Increased Website Traffic
            </h1>
            <p className="text-gray-400 text-center">
              SEO helps improve website visibility and ranking in search
              results, leading to increased organic traffic to your
              website.Engage your audience and convey your brand message with
              our expertly crafted website content.
            </p>
          </div>
          <div className="bg-white p-10 shadow-md">
            <img
              src={blog}
              alt="Blog/Article Writing"
              className="w-16 h-16 object-cover mb-2 mx-auto"
            />
            <h1 className="font-bold text-2xl text-center mb-4">
              Improved User Experience
            </h1>
            <p className="text-gray-400 text-center">
              SEO involves optimizing various technical and on-page elements,
              such as page speed, mobile-friendliness, and site structure, to
              enhance user experience and satisfaction.
            </p>
          </div>
          <div className="bg-white p-10 shadow-md">
            <img
              src={social}
              alt="Social Media Content"
              className="w-16 h-16 object-cover mb-2 mx-auto"
            />
            <h1 className="font-bold text-2xl text-center mb-4">Better ROI</h1>
            <p className="text-gray-400 text-center">
              SEO delivers a high ROI by targeting online users who are actively
              looking for products or services similar to what you offer.
            </p>
          </div>
          <div className="bg-white p-10 shadow-md">
            <img
              src={seo}
              alt="SEO Writing"
              className="w-16 h-16 object-cover mb-2 mx-auto"
            />
            <h1 className="font-bold text-2xl text-center mb-4">
              Long-Term Results
            </h1>
            <p className="text-gray-400 text-center">
              SEO is an effective long-term strategy that can provide consistent
              results over time and can help establish a powerful online
              presence for your brand.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Row3SEO;
