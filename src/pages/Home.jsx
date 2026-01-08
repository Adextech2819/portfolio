import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Certifications from "../components/Certifications";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import BackgroundShapes from "../components/BackgroundShapes";
import HubChat from "../components/HubChat";

const Home = () => {
  return (
    <>
      <BackgroundShapes />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
      <HubChat />
    </>
  );
};

export default Home;
