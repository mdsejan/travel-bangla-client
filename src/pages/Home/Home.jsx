import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import TravelTabs from "./TravelTabs/TravelTabs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TravelBangla - Explore, Experience, Enjoy</title>
      </Helmet>
      <Banner></Banner>
      <TravelTabs></TravelTabs>
    </div>
  );
};

export default Home;
