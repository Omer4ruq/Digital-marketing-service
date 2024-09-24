import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import LogoSlider from "./components/logoSlider/LogoSlider";
import CompanyGoalSection from "./components/companyGoalSection.jsx/CompanyGoalSection";
import Services from "./components/services/Services";
import WhyUs from "./components/whyUs/WhyUs";
import Faq from "./components/FAQ/Faq";
import Employee from "./components/employee/Employee";
import Footer from "./components/footer/Footer";
import Op from "./components/footer/op";
import WorkingProcess from "./components/workingProcess/WorkingProcess";
import ClientsFeedback from "./components/clientsFeedback/ClientsFeedback";
import CardSlider from "./components/clientsFeedback/CardSlider";

function App() {
  return (
    <>
      <Navbar></Navbar>
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
      <Op></Op>
      <Footer></Footer>
    </>
  );
}

export default App;
