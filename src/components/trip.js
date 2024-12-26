import Tripdata from "./tripdata";
import "./tripstyles.css";
import trip1 from "../components/img/e.jpg";
import trip2 from "../components/img/badrachalam1.jpg";
import trip3 from "../components/img/yadagirigutta-temple.jpg";

function trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinstions using google maps</p>
      <div className="tripcard">
        <Tripdata
          image={trip1}
          heading="Trip to tanger"
          text="Tanger, située à la croisée de l'Europe et de l'Afrique, est une ville fascinante qui mêle cultures, histoire, et modernité. Bordée par l'océan Atlantique et la mer Méditerranée, elle offre des panoramas spectaculaires et un patrimoine riche.

Explorez la médina de Tanger, un dédale de ruelles pittoresques où les boutiques traditionnelles côtoient des cafés animés. Visitez la Kasbah et son musée qui retrace l'histoire de cette ville mythique. Ne manquez pas les célèbres Grottes d’Hercule, un site naturel impressionnant chargé de légendes."
        />
        <Tripdata
          image={trip2}
          heading="Trip to Bhadrachalam"
          text="Bhadrachalam can be a refreshing place to visit with a share of
        instances from the Ramayana, a glorious palace, a vibrant river and
        mystical terrain and surroundings. One of the major attractions of
        Bhadrachalam is the Sita Ramachandraswamy temple."
        />
        <Tripdata
          image={trip3}
          heading="Trip to Yadadri"
          text="Sri Lakshminarasimha Swamy Temple or Yadagirigutta is a popular Hindu Temple of Narasimha Swamy, 
        an incarnation Lord Vishnu It is situated on a hillock in the Nalgonda district, Telangana, 
        Yadagirigutta is at a distance of 6 KM from Riagir Railway station and at a distance of 13 KM from 
        Bhongir Town and 60 kilometers from the city of Hyderabad. "
        />
      </div>
    </div>
  );
}

export default trip;
