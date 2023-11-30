import { useQuery } from "@tanstack/react-query";
import Container from "../../components/Container";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";

const TouristStoryDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

  const { data: tourStory = [] } = useQuery({
    queryKey: ["touristStory"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/touristStory?storyId=${id}`);
      return res.data;
    },
  });
  console.log(tourStory[0]);

  //   const { story_Title, story } = tourStory[0];
  return (
    <Container>
      <div className="text-center py-12">
        <h4 className="text-xl text-[#7BAB9A] font-salsa font-semibold mb-2">
          Story
        </h4>
        {/* <h2 className="text-5xl font-salsa font-semibold">{story_Title}</h2> */}
      </div>
      <div className="min-h-[60vh] max-w-screen-md mx-auto mb-14">
        {/* <p className="text-lg">{story}</p> */}
      </div>
    </Container>
  );
};

export default TouristStoryDetails;
