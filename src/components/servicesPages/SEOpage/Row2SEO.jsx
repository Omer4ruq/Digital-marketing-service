import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import seoImg from "./SEOImg/seo-image-2.jpg";
import arrow from "./SEOImg/arrow.jpg";
import seo from "./SEOImg/seo.png";

const Row2SEO = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 pt-10 bg-white">
        <motion.section
          className="p-10"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-[400px] md:w-[500px] h-96 overflow-hidden rounded-[40%_10%_50%_10%]">
            <img
              src={seoImg}
              alt="Egg Shape Image"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.img
            src={arrow}
            alt=""
            className="absolute -mt-96 ml-[550px] hidden md:block"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          />
        </motion.section>
        <motion.section
          className="pl-4 md:pl-0"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <motion.h1
              className="text-2xl font-bold text-black mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            >
              Professional SEO Company Produces Impressive Results
            </motion.h1>
            <motion.p
              className="text-gray-500 mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            >
              Although search engines are becoming more advanced, SEO services
              don’t have to be complex. As a reliable SEO company in India, we
              can help you develop a clear, results-driven search engine
              optimisation strategy.
            </motion.p>
          </div>

          <div>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            >
              <img src={seo} alt="" className="w-10 h-10" />
              <div>
                <h1 className="text-lg font-bold text-black">Technical SEO</h1>
                <p className="text-gray-500">
                  This involves optimizing the technical aspects of a website,
                  such as page speed, site structure, and crawling and indexing,
                  to improve search engine rankings and user experience.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            >
              <img src={seo} alt="" className="w-10 h-10" />
              <div>
                <h1 className="text-lg font-bold text-black">On-page SEO</h1>
                <p className="text-gray-500">
                  This includes optimizing the content and HTML elements on a
                  website, such as keywords, meta tags, and internal linking, to
                  improve relevance and visibility in search results.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
            >
              <img src={seo} alt="" className="w-10 h-10" />
              <div>
                <h1 className="text-lg font-bold text-black">Off-page SEO</h1>
                <p className="text-gray-500">
                  This involves improving your website's authority and
                  credibility through external factors, such as backlinks and
                  social media, to improve search engine rankings and traffic.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Row2SEO;
