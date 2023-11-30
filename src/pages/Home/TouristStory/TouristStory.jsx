import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import TouristStoryCard from "../../../components/TouristStoryCard";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const TouristStory = () => {
  const axiosPublic = useAxiosPublic();

  const { data: storys = [] } = useQuery({
    queryKey: ["storys"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/touristStory`);
      return res.data;
    },
  });
  return (
    <Container>
      <div className="text-center py-12">
        <h4 className="text-xl text-[#7BAB9A] font-salsa font-semibold mb-2">
          Read
        </h4>
        <h2 className="text-5xl font-salsa font-semibold">{`Tourist Story's`}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-16 lg:py-10">
        {storys?.slice(0, 4).map((item) => (
          <TouristStoryCard key={item._id} item={item}></TouristStoryCard>
        ))}
      </div>
      <div className="text-center mt-10 mb-9">
        <Link to="/tourist-storys">
          <button className="bg-[#7CAB9B] hover:bg-[#7CAB9B] text-white text-md font-semibold py-2 px-8 rounded">
            All Storys
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default TouristStory;
