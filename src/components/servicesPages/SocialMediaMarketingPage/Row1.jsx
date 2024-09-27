import React from "react";
import "./Row1.css";
const Row1 = () => {
  return (
    <div className="row1">
      <div className="grid grid-cols-2">
        <section className="p-20">
          <h1 className="text-5xl font-bold text-black mt-16 mb-8">
            Rise Above the Noise
          </h1>
          <h1 className="text-lg font-semibold text-black mb-6">
            Make Your Brand Stand Out and Get Noticed with Our Social Media
            Marketing Services!
          </h1>
          <p className="text-gray-400">
            Our expertise lies in crafting lead-generation social media
            marketing campaigns, creative posts, and engaging content that
            empower brands to break through the clutter and connect with their
            audience.
          </p>
        </section>
        <section>
          <img
            src="https://brainsmediasolutions.com/wp-content/uploads/2023/04/img4_.png"
            alt=""
          />
        </section>
      </div>
    </div>
  );
};

export default Row1;
