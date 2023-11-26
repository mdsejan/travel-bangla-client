import Banner from "./Banner/Banner";
import TravelTabs from "./TravelTabs/TravelTabs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TravelTabs></TravelTabs>
      <div className="min-h-[20vh]"></div>
    </div>
  );
};

export default Home;
