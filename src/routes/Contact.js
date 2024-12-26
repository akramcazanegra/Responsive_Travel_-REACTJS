import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import contactimg from "../components/img/3.jpg";
import Contactform from "../components/contactform";
import Footer from "../components/footer";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroimg={contactimg} title="Contact" />
      <Contactform />
      <Footer />
    </>
  );
}

export default Contact;
