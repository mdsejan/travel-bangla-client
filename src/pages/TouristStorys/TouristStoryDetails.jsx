import { useQuery } from "@tanstack/react-query";
import Container from "../../components/Container";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import GoToTop from "../../components/GoToTop";

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

  //   const { story_Title, story } = tourStory[0];
  return (
    <Container>
      <div className="text-center py-12">
        <h4 className="text-xl text-[#7BAB9A] font-salsa font-semibold mb-2">
          Tourist Story
        </h4>
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-salsa font-semibold">
          {tourStory[0]?.story_Title}
        </h2>
        <div className="w-full h-[10rem] md:h-[15rem] lg:h-[25rem] rounded-md mt-9">
          <img
            src={tourStory[0]?.Feature_image}
            alt={`banner`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="min-h-[60vh] max-w-screen-lg text-justify mx-auto mb-14">
        <p className="md:text-lg">{tourStory[0]?.story}</p>
      </div>
      <GoToTop />
    </Container>
  );
};

export default TouristStoryDetails;
