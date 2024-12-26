import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import serviceimg from "../components/img/2.jpg";
import Footer from "../components/footer";
import Trip from "../components/trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroimg={serviceimg} title="Service" />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
