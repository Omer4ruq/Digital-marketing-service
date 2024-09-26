import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WorkingProcess = () => {
  // Intersection observers for the process cards
  const controls = useAnimation();
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Trigger animations when in view
  useEffect(() => {
    if (inView1) controls.start("visible");
    if (inView2) controls.start("visible");
    if (inView3) controls.start("visible");
    if (inView4) controls.start("visible");
    if (inView5) controls.start("visible");
  }, [inView1, inView2, inView3, inView4, inView5, controls]);

  // Animation variants for the title (animates on scroll)
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation variants for the process cards (animate only once)
  const processVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="mb-16 p-6">
      <div>
        <div className="text-center">
          {/* Animated title that triggers on scroll every time */}
          <motion.p
            className="text-base text-[#F6C71E] md:text-lg lg:text-xl font-semibold mb-2"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // Animates every time it enters the viewport
          >
            Working Process
          </motion.p>
          <motion.h1
            className="text-xl text-black md:text-2xl lg:text-3xl font-bold mb-10"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // Animates every time it enters the viewport
          >
            OUR WINNING FORMULA FOR DIGITAL MARKETING SUCCESS
          </motion.h1>
        </div>

        <div>
          <img
            src="https://brainsmediasolutions.com/wp-content/uploads/2023/05/work-process-line-black.png"
            alt=""
            className="hidden md:block"
          />

          <div className="md:flex gap-6 justify-between">
            {/* Process 1 */}
            <motion.div
              ref={ref1}
              className=""
              variants={processVariants}
              initial="hidden"
              animate={controls}
            >
              <div className="w-16 h-16 rounded-full bg-white drop-shadow-2xl shadow-gray-800 mt-10 md:-mt-10 ml-20 ">
                <div className="w-12 h-12 rounded-full bg-[#F6C71E] ml-2 absolute mt-2"></div>
                <h1 className="font-bold text-2xl text-white absolute ml-4 mt-4">
                  01
                </h1>
              </div>
              <div className="hover:border-r-[#F6C71E]">
                <div className="w-0 h-0 border-b-[20px] border-r-[20px] border-r-[#F6C71E] border-transparent border-r-[##f5f5f5]  rotate-180 ml-8"></div>
                <div className="w-full h-full md:w-56 md:h-72 bg-white hover:bg-[#F6C71E] p-6">
                  <h4 className="text-2xl text-start font-semibold">
                    Research & Analysis
                  </h4>
                  <p className="text-gray-500 font-sans">
                    Evaluating your business, target audience, competitors, and
                    market trends to create a solid digital marketing strategy.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Process 2 */}
            <motion.div
              ref={ref2}
              className=""
              variants={processVariants}
              initial="hidden"
              animate={controls}
            >
              <div className="w-16 h-16 rounded-full bg-white mt-10 md:-mt-20 ml-20">
                <div className="w-12 h-12 rounded-full bg-[#F6C71E] ml-2 absolute mt-2"></div>
                <h1 className="font-bold text-2xl text-white absolute ml-4 mt-4">
                  02
                </h1>
              </div>
              <div className="hover:border-r-[#F6C71E]">
                <div className="w-0 h-0 border-b-[20px] border-r-[20px] border-r-[#F6C71E] border-transparent border-r-[##f5f5f5]  rotate-180  ml-8 "></div>
                <div className="w-full h-full md:w-56 md:h-72 bg-white hover:bg-[#F6C71E] p-6">
                  <h4 className="text-2xl text-start font-semibold">
                    Planning
                  </h4>
                  <p className="text-gray-500 font-sans">
                    Setting specific goals, identifying the keywords, developing
                    a budget, selecting digital marketing channels, and creating
                    a strategic plan.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Process 3 */}
            <motion.div
              ref={ref3}
              className=""
              variants={processVariants}
              initial="hidden"
              animate={controls}
            >
              <div className="w-16 h-16 rounded-full bg-white mt-10 md:-mt-10 ml-20 drop-shadow-2xl shadow-gray-800 ">
                <div className="w-12 h-12 rounded-full bg-[#F6C71E] ml-2 absolute mt-2"></div>
                <h1 className="font-bold text-2xl text-white absolute ml-4 mt-4">
                  03
                </h1>
              </div>
              <div className="hover:border-r-[#F6C71E]">
                <div className="w-0 h-0 border-b-[20px] border-r-[20px] border-r-[#F6C71E] border-transparent border-r-[##f5f5f5]  rotate-180  ml-8 "></div>
                <div className="w-full h-full md:w-56 md:h-72 bg-white hover:bg-[#F6C71E] p-6">
                  <h4 className="text-2xl text-start font-semibold">
                    Execution
                  </h4>
                  <p className="text-gray-500 font-sans">
                    Putting the plans into action. Content is created, ads are
                    launched, social media posts are scheduled, and SEO
                    techniques are implemented.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Process 4 */}
            <motion.div
              ref={ref4}
              className=""
              variants={processVariants}
              initial="hidden"
              animate={controls}
            >
              <div className="w-16 h-16 rounded-full bg-white mt-10 md:-mt-20 ml-20 drop-shadow-2xl shadow-gray-800 ">
                <div className="w-12 h-12 rounded-full bg-[#F6C71E] ml-2 absolute mt-2"></div>
                <h1 className="font-bold text-2xl text-white absolute ml-4 mt-4">
                  04
                </h1>
              </div>
              <div className="hover:border-r-[#F6C71E]">
                <div className="w-0 h-0 border-b-[20px] border-r-[20px] border-r-[#F6C71E] border-transparent border-r-[##f5f5f5]  rotate-180  ml-8"></div>
                <div className="w-full h-full md:w-56 md:h-72 bg-white hover:bg-[#F6C71E] p-6">
                  <h4 className="text-2xl text-start font-semibold">
                    Monitoring & Measuring
                  </h4>
                  <p className="text-gray-500 font-sans">
                    Analyzing the effectiveness of digital marketing efforts,
                    evaluating the results, and making necessary changes to
                    enhance performance.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Process 5 */}
            <motion.div
              ref={ref5}
              className=""
              variants={processVariants}
              initial="hidden"
              animate={controls}
            >
              <div className="w-16 h-16 rounded-full bg-white mt-10 md:-mt-10 ml-20 drop-shadow-2xl shadow-gray-800 ">
                <div className="w-12 h-12 rounded-full bg-[#F6C71E] ml-2 absolute mt-2"></div>
                <h1 className="font-bold text-2xl text-white absolute ml-4 mt-4">
                  05
                </h1>
              </div>
              <div className="hover:border-r-[#F6C71E]">
                <div className="w-0 h-0 border-b-[20px] border-r-[20px] border-r-[#F6C71E] border-transparent border-r-[##f5f5f5]  rotate-180 ml-8 "></div>
                <div className="w-full h-full md:w-56 md:h-72 bg-white hover:bg-[#F6C71E] p-6">
                  <h4 className="text-2xl text-start font-semibold">
                    Reporting & Optimization
                  </h4>
                  <p className="text-gray-500 font-sans">
                    Presenting the results and performance of the digital
                    marketing campaign to the clients. Optimizing the campaign
                    based on the feedback.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
