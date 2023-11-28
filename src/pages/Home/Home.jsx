import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import TravelTabs from "./TravelTabs/TravelTabs";
import TourType from "./TourType/TourType";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TravelBangla - Explore, Experience, Enjoy</title>
      </Helmet>
      <Banner></Banner>
      <TravelTabs></TravelTabs>
      <TourType></TourType>
    </div>
  );
};

export default Home;
