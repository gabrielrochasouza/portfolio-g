import "aos/dist/aos.css"; // You can also use <link> for styles
import { IntroSection } from "../../components/intro-section";
import AboutSection from "../../components/about-section";
import ProjectSection from "../../components/projects-section";
import ContactSection from "../../components/contact-section";
import React from 'react'
import Footer from "../../components/footer";

const MainPage = () => {
  return (
    <div onScroll={()=>console.log('main')}>
      <IntroSection/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};
export default MainPage;
