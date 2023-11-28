import Container from "../../../../components/Container";
import TourGuideCard from "./TourGuideCard";

const TourGuides = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-16 lg:py-10">
        <TourGuideCard></TourGuideCard>
        <TourGuideCard></TourGuideCard>
        <TourGuideCard></TourGuideCard>
        <TourGuideCard></TourGuideCard>
      </div>
    </Container>
  );
};

export default TourGuides;
