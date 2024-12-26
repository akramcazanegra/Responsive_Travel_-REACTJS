import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import heroimg from "../components/img/x.jpg";
import Destination from "../components/destination";
import Trip from "../components/trip";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroimg={heroimg}
        title= "Journey Beyond Borders"
        text="Discover Your Favorite Getaway"
        buttonText="Travel way"
        url="/"
        btnclass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
