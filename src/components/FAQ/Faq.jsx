import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Faq = () => {
  // Controls the animation based on scroll
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3, // Trigger animation when 30% of the section is in view
  });

  // Trigger animation when the section comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Animation variants for text and items
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textVariants}
        className="logo-slider-container w-full overflow-hidden"
      >
        {/* Title and subtitle */}
        <motion.div className="text-center">
          <motion.h1 className="text-xl text-black md:text-3xl lg:text-5xl font-bold mb-10">
            Our FAQs
          </motion.h1>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <div className="collapse collapse-arrow bg-white rounded-none mb-2">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What exactly does a digital marketing company do?
            </div>
            <div className="collapse-content">
              <p>
                The main purpose of a digital marketing company is to help
                businesses increase their online presence, reach their target
                audience, drive traffic to their website, generate leads, and
                ultimately increase sales and revenue.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white rounded-none mb-2 ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What are the most common services offered by a digital marketing
              company?
            </div>
            <div className="collapse-content">
              <p>
                Common services offered by a digital marketing company include
                SEO, Paid advertising, social media marketing, content
                marketing, and web design.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white rounded-none mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What sets a good digital marketing company apart from the rest?
            </div>
            <div className="collapse-content">
              <p>
                A good digital marketing company has a team of creative
                professionals with years of experience, good communication
                skills, and are open to listening to their clients.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="collapse collapse-arrow bg-white rounded-none mb-2">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What is SEO (Search Engine Optimization)?
            </div>
            <div className="collapse-content">
              <p>
                It is a technique of optimizing website content to improve its
                ranking in Google and other search engine results pages (SERPs).
                The goal is to increase organic traffic to a website and improve
                its online visibility, ultimately leading to more leads, sales,
                and conversions.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white rounded-none mb-2 ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How do I know if my business needs the services of a digital
              marketing company?
            </div>
            <div className="collapse-content">
              <p>
                If you are unable to grow your business through traditional
                marketing and want to increase your online presence and drive
                more sales to your business, a digital marketing company can
                help.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white rounded-none mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What kind of budget do I need to work with a digital marketing
              company?
            </div>
            <div className="collapse-content">
              <p>
                The budget needed to work with a digital marketing company can
                vary depending on the specific services you need and the scope
                of your project. However, most digital marketing companies offer
                a range of packages to suit different budgets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
