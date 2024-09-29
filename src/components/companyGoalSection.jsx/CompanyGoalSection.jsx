import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img1 from "../../assets/about1.jpg";
import img2 from "../../assets/about2.jpg";

const CompanyGoalSection = () => {
  // Controls for animation
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const controlsText = useAnimation();

  // useInView to trigger animations
  const [ref, inView] = useInView({
    threshold: 0.3, // Trigger when 30% of the section is in view
  });

  useEffect(() => {
    if (inView) {
      controlsLeft.start("visible");
      controlsRight.start("visible");
      controlsText.start("visible");
    } else {
      controlsLeft.start("hidden");
      controlsRight.start("hidden");
      controlsText.start("hidden");
    }
  }, [inView, controlsLeft, controlsRight, controlsText]);

  // Animation variants
  const leftSlideVariant = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const rightSlideVariant = {
    hidden: { x: 5, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const textVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 p-4 mb-16 md:grid-cols-2 md:p-10"
    >
      {/* Left section with sliding in from the left */}
      <section className="pr-1 mt-6 md:mt-12 mb-8">
        <h1 className="text-4xl font-semibold mb-4">
          Digital Marketing Company in Chittagong, Bangladesh
        </h1>
        <div className="pr-8">
          <p className="pb-4 text-gray-500 font-sans">
            Bros Media Solutions is the number one digital marketing service
            provider, located near Chittagong. We are known for delivering
            exceptional quality and efficient work to our clients and increasing
            their online presence across all social media platforms, such as
            Facebook, Instagram, and LinkedIn.
          </p>
          <p className="text-gray-500 font-sans">
            As one of the most experienced digital marketing service providers,
            we plan and execute various digital marketing strategies like
            Website Designing, Search Engine Optimization (SEO), Google Ads,
            Social Media Marketing, etc., for our clients. Our extensive
            experience has made us one of the best digital marketing agencies in
            Chittagong, Bangladesh. We have a team of professional digital
            marketers, content writers, and creative designers who work
            dedicatedly to deliver impeccable results within specified
            timelines.
          </p>
          <button className="flex items-center gap-2 mt-6 bg-[#F6C71E] hover:bg-zinc-500 transition-colors duration-1000 ease-in-out text-white rounded-none p-3 font-semibold text-base ">
            Learn More
          </button>
        </div>
      </section>

      {/* Right section with sliding in from the right */}
      <section className="pl-0 md:p-4 relative">
        <div>
          <img src={img1} alt="About 1" className="md:absolute h-[420px]" />
        </div>
        <div>
          <img
            src={img2}
            alt="About 2"
            className="md:absolute -mt-40 md:mt-60  ml-4 md:ml-10 h-[320px]"
          />
        </div>
      </section>
    </div>
  );
};

export default CompanyGoalSection;
