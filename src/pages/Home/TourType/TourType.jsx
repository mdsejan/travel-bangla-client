import { useQuery } from "@tanstack/react-query";
import Container from "../../../components/Container";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import TourTypeCard from "./TourTypeCard";

const TourType = () => {
  const axiosPublic = useAxiosPublic();

  const { data: tourTypes = [] } = useQuery({
    queryKey: ["tourTypes"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tourTypes`);
      return res.data;
    },
  });
  return (
    <Container>
      <div className="text-center">
        <h2 className="text-5xl font-salsa font-semibold mb-16">Tour TypesS</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pb-20">
        {tourTypes.map((tourType) => (
          <TourTypeCard key={tourType._id} tourType={tourType}></TourTypeCard>
        ))}
      </div>
    </Container>
  );
};

export default TourType;
