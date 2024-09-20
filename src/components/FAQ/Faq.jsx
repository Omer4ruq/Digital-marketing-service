import React from "react";

const Faq = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl text-center font-bold mt-16 mb-8">Our FAQs</h1>
      </div>
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
                skills, and are open to listening to their
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
