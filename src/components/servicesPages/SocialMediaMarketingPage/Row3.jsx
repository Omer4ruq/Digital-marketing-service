import React, { useRef } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutube,
  FaTwitterSquare,
} from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaSquareGooglePlus } from "react-icons/fa6";
import { motion, useInView } from "framer-motion"; // Import framer-motion

const Row3 = () => {
  // Ref and InView for triggering animations
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  // Animation variant
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-white" ref={ref}>
      <h1 className="text-5xl font-bold text-center mt-8 pt-8">
        Social Media Marketing Services to Scale Your Business
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 p-8 gap-6">
        {[
          {
            icon: <FaFacebookSquare />,
            title: "Facebook",
            description:
              "Our social media marketing agency can help you create a strong presence on Facebook through targeted ad campaigns, engaging content, and audience interaction.",
          },
          {
            icon: <FaInstagramSquare />,
            title: "Instagram",
            description:
              "We offer services to boost your Instagram presence with visually appealing content, ad campaigns, and influencer marketing.",
          },
          {
            icon: <IoLogoLinkedin />,
            title: "LinkedIn",
            description:
              "We provide LinkedIn marketing services to help you reach the right audience, build credibility through thought leadership, and drive conversions.",
          },
          {
            icon: <FaSquareGooglePlus />,
            title: "Google My Business",
            description:
              "We can optimize your Google My Business listing to improve your online visibility, attract potential leads, and increase your website traffic.",
          },
          {
            icon: <FaYoutube />,
            title: "YouTube",
            description:
              "Our team can guide you to leverage the power of YouTube by creating compelling video content, optimizing your channel, and promoting your brand to the right audience.",
          },
          {
            icon: <FaTwitterSquare />,
            title: "Twitter",
            description:
              "Our social media marketing agency can assist you in building a strong Twitter presence through engaging content, targeted ad campaigns, and strategic community engagement.",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#f5f5f5] p-10"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div className="text-6xl ml-[150px] md:ml-[135px]">
              {service.icon}
            </div>
            <h1 className="font-bold text-2xl text-center mb-4">
              {service.title}
            </h1>
            <p className="text-gray-400 text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Row3;
