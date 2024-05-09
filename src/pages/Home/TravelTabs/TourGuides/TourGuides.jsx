import { useQuery } from "@tanstack/react-query";
import Container from "../../../../components/Container";
import TourGuideCard from "./TourGuideCard";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const TourGuides = () => {
  const axiosPublic = useAxiosPublic();

  const { data: tourGuides = [] } = useQuery({
    queryKey: ["tourGuides"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tourguide`);
      return res.data;
    },
  });
  return (
    <Container>
      <div className="text-center py-12">
        <h4 className="text-xl text-[#7BAB9A] font-salsa font-semibold mb-2">
          Meet
        </h4>
        <h2 className="text-5xl font-salsa font-semibold">Tour Guides</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-16 lg:py-10">
        {tourGuides?.slice(0, 4).map((tourGuide) => (
          <TourGuideCard
            key={tourGuide._id}
            tourGuide={tourGuide}
          ></TourGuideCard>
        ))}
        {/* <TourGuideCard></TourGuideCard>
        <TourGuideCard></TourGuideCard>
        <TourGuideCard></TourGuideCard>
        <TourGuideCard></TourGuideCard> */}
      </div>
    </Container>
  );
};

export default TourGuides;
