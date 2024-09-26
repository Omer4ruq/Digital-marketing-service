import React, { useEffect } from "react";
import bg from "../../assets/project-bg.jpg";
import creativity from "../../assets/creativity.png";
import { SiFramework } from "react-icons/si";
import { IoIosTimer } from "react-icons/io";
import { FcIdea } from "react-icons/fc";
import { GrMoney } from "react-icons/gr";
import { SiExpertsexchange } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WhyUSContent from "./WhyUSContent";

const WhyUs = () => {
  const controls = useAnimation();
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView1) {
      controls.start("visible");
    }
  }, [controls, inView1]);

  useEffect(() => {
    if (inView2) {
      controls.start("visible");
    }
  }, [controls, inView2]);

  useEffect(() => {
    if (inView3) {
      controls.start("visible");
    }
  }, [controls, inView3]);

  const variant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div>
      <div>
        <img src={bg} alt="" />
      </div>
      <div className="md:absolute md:-mt-72">
        <WhyUSContent />
      </div>
      <div className="bg-[#555558] pt-40">
        <div className="md:pt-20 pl-4 md:pl-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          <h1 className="text-white text-xl font-bold md:w-80">
            TOGETHER WE CAN GROW AND MARKET YOUR BUSINESS!
          </h1>
          <div className="flex gap-4">
            <div>
              <SiFramework className="text-6xl text-yellow-400" />
            </div>
            <div className="md:w-80 ">
              <h1 className="text-yellow-400 text-2xl">Quality Work</h1>
              <p className="text-white">
                For the past 8 years we have been delivering quality content
                writing services like blogs, articles and property descriptions
                to one of India's top real estate portals.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <IoIosTimer className="text-6xl text-yellow-400" />
            </div>
            <div className="md:w-80">
              <h1 className="text-yellow-400 text-2xl">Timely Response</h1>
              <p className="text-white">
                On average, we design and deliver approximately 12 to 15
                high-quality posts per day, ensuring that we meet the social
                media requirements of our clients promptly and effectively.
              </p>
            </div>
          </div>
        </div>
        {/* Last Three Divs with Animations */}
        <div className="pt-20 pl-4 md:pl-10 grid grid-cols-2 md:grid-cols-3 gap-4 pb-10">
          <motion.div
            ref={ref1}
            className="flex gap-4"
            variants={variant}
            initial="hidden"
            animate={controls}
          >
            <FcIdea className="text-6xl text-yellow-400" />
            <div className="w-80">
              <h1 className="text-yellow-400 text-2xl">Creative Minds</h1>
              <p className="text-white">
                With expertise in using tools such as Canva, Photoshop, and
                other design software, our designers create eye-catching and
                engaging posts that leave a lasting impression.
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={ref2}
            className="flex gap-4"
            variants={variant}
            initial="hidden"
            animate={controls}
          >
            <GrMoney className="text-6xl text-yellow-400" />
            <div className="w-80">
              <h1 className="text-yellow-400 text-2xl">Affordable Pricing</h1>
              <p className="text-white">
                Our pricing structure is transparent and tailored to suit the
                unique requirements of each client, making our digital marketing
                services accessible and affordable.
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={ref3}
            className="flex gap-4"
            variants={variant}
            initial="hidden"
            animate={controls}
          >
            <SiExpertsexchange className="text-5xl text-yellow-400" />
            <div className="w-80">
              <h1 className="text-yellow-400 text-2xl">Proven Track Record</h1>
              <p className="text-white">
                We have clients who return after a gap of 6 months or more,
                showcasing the proven track record of our effectiveness and the
                trust they place in our digital marketing services.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
