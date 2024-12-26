import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutimg from "../components/img/night.jpg";
import Footer from "../components/footer";
import AboutUs from "../components/aboutus";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroimg={aboutimg} title="About" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
