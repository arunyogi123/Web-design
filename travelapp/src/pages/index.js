import TouristDestination from "./TouristDestination";
import Header from "./Header";
import Footer from "./Footer";
import Data from "./Data";

export default function Home() {
  const Destinations = Data.map(function (destination) {
    return(
    <TouristDestination
      image={destination.img}
      name={destination.name}
      date={destination.date}
      desc={destination.description}
      country={destination.country}
      link={destination.link}
    />
    );
  });

  return (
    <>
      <Header />

      {Destinations}
      <Footer />
    </>
  );
}
