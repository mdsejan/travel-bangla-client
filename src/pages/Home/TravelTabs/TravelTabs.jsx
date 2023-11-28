import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Container from "../../../components/Container";
import Overview from "./Overview/Overview";
import OurPackages from "./OurPackages/OurPackages";
import TourGuides from "./TourGuides/TourGuides";

const TravelTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="py-8 md:py-16">
      <Container>
        <div className="text-center py-12">
          <h4 className="text-xl text-[#7BAB9A] font-salsa font-semibold mb-2">
            See details about
          </h4>
          <h2 className="text-5xl font-salsa font-semibold">
            Tourism and Travel Guide
          </h2>
        </div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Our Packages</Tab>
            <Tab>Meet Our Tour Guides</Tab>
          </TabList>

          <TabPanel>
            <Overview></Overview>
          </TabPanel>

          <TabPanel>
            <OurPackages></OurPackages>
          </TabPanel>

          <TabPanel>
            <TourGuides></TourGuides>
          </TabPanel>
        </Tabs>
      </Container>
    </div>
  );
};

export default TravelTabs;
