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
    <div className="my-20">
      <Container>
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
