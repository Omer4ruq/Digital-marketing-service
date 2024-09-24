import React from "react";
import Hero from "../hero/Hero";
import LogoSlider from "../logoSlider/LogoSlider";
import CompanyGoalSection from "../companyGoalSection.jsx/CompanyGoalSection";
import WhyUs from "../whyUs/WhyUs";
import WorkingProcess from "../workingProcess/WorkingProcess";
import ClientsFeedback from "../clientsFeedback/ClientsFeedback";
import Faq from "../FAQ/Faq";
import Services from "../services/Services";
import Employee from "../employee/Employee";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LogoSlider></LogoSlider>
      <CompanyGoalSection></CompanyGoalSection>
      <Services></Services>
      <WhyUs></WhyUs>
      <WorkingProcess></WorkingProcess>
      <ClientsFeedback></ClientsFeedback>
      {/* <CardSlider></CardSlider> */}
      <Employee></Employee>
      <Faq></Faq>
    </div>
  );
};

export default Home;
