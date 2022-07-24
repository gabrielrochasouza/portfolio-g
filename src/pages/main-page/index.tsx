import "aos/dist/aos.css"; // You can also use <link> for styles
import { IntroSection } from "../../components/intro-section";
import AboutSection from "../../components/about-section";
import ProjectSection from "../../components/projects-section";
import ContactSection from "../../components/contact-section";
import Footer from "../../components/footer";

const MainPage = () => {
  return (
    <>
      <IntroSection/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
};
export default MainPage;
