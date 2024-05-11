import { Helmet } from "react-helmet-async";
// import Banner from "./Banner/Banner";
// import TravelTabs from "./TravelTabs/TravelTabs";
import TourType from "./TourType/TourType";
import TouristStory from "./TouristStory/TouristStory";
import Overview from "./TravelTabs/Overview/Overview";
import OurPackages from "./TravelTabs/OurPackages/OurPackages";
import TourGuides from "./TravelTabs/TourGuides/TourGuides";
import BannerTwo from "./Banner/BannerTwo";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TravelBangla - Explore, Experience, Enjoy</title>
      </Helmet>
      <BannerTwo />
      <Overview></Overview>
      <OurPackages></OurPackages>
      <TourGuides></TourGuides>
      {/* <TravelTabs></TravelTabs> */}
      <TourType></TourType>
      <TouristStory></TouristStory>
    </div>
  );
};

export default Home;
