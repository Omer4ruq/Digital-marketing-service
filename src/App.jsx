import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import LogoSlider from "./components/logoSlider/LogoSlider";
import CompanyGoalSection from "./components/companyGoalSection.jsx/CompanyGoalSection";
import Services from "./components/services/Services";
import WhyUs from "./components/whyUs/WhyUs";
import Faq from "./components/FAQ/Faq";
import Employee from "./components/employee/Employee";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <LogoSlider></LogoSlider>
      <CompanyGoalSection></CompanyGoalSection>
      <Services></Services>
      <WhyUs></WhyUs>
      <Faq></Faq>
      <Employee></Employee>
    </>
  );
}

export default App;
