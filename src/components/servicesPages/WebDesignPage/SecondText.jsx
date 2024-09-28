import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import framer-motion
import customize from "./serviceImages/custom.png";
import responsive from "./serviceImages/responsive.png";
import userFriendly from "./serviceImages/web-design.png";

const SecondText = () => {
  // Ref and InView for triggering animations
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  // Animation variant for the benefits
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation variant for the service cards
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div ref={ref}>
      <h1 className="text-lg font-bold text-yellow-400 text-center mt-10">
        Benefits Of Our Website Development Services
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 pt-10 md:p-10">
        {[
          {
            title: "Increased visibility",
            description:
              "Attract more customers to your business with our website development services.",
          },
          {
            title: "Credibility and trust",
            description:
              "Build credibility and trust with a professionally designed website.",
          },
          {
            title: "Convenience",
            description:
              "Provide convenience to both you and your customers with a website.",
          },
          {
            title: "Cost-effective marketing",
            description:
              "Reach a wider audience with a cost-effective marketing strategy through a website.",
          },
          {
            title: "Improved customer service",
            description:
              "Improve customer service by providing a platform for easy communication and inquiries.",
          },
          {
            title: "Competitive advantage",
            description:
              "Stand out from competitors and gain a competitive advantage with a well-designed website.",
          },
        ].map((benefit, index) => (
          <motion.div
            key={index}
            className="gap-2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h1 className="text-center text-xl font-bold">{benefit.title}</h1>
            <p className="text-center text-gray-500 p-6">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="bg-white">
        <div className="pt-10 pb-4">
          <h1 className="text-center font-bold text-2xl pb-4">
            Professional Website Development And Design Company Based In Belgaum
          </h1>
          <h1 className="text-gray-400 text-center">
            Having a responsive website design is crucial for promoting your
            brand and establishing a strong digital presence in today's
            competitive marketplace.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 p-8 gap-6">
          {[
            {
              img: customize,
              title: "Customized Approach",
              description:
                "Our website designing company offers a customized approach to ensure that your website meets your specific needs and goals.",
            },
            {
              img: userFriendly,
              title: "User-Friendly Design",
              description:
                "Our website designing company offers a user-friendly design to enhance the customer experience.",
            },
            {
              img: responsive,
              title: "Responsive Design",
              description:
                "Our mobile-friendly design approach ensures that your website looks great and functions effectively on all devices.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#f5f5f5] p-10"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-16 h-16 object-cover mb-2 mx-auto"
              />
              <h1 className="font-bold text-2xl text-center mb-4">
                {service.title}
              </h1>
              <p className="text-gray-400 text-center ">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondText;
