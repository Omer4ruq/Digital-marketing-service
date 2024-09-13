import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import LogoSlider from "./components/logoSlider/LogoSlider";
import CompanyGoalSection from "./components/companyGoalSection.jsx/CompanyGoalSection";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <LogoSlider></LogoSlider>
      <CompanyGoalSection></CompanyGoalSection>
    </>
  );
}

export default App;
