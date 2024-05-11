import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import PackageCard from "../../components/PackageCard";
import Container from "../../components/Container";
import GoToTop from "../../components/GoToTop";

const PackageByType = () => {
  const axiosPublic = useAxiosPublic();
  const { type } = useParams();

  const { data: packages = [] } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/packages?type=${type}`);
      return res.data;
    },
  });

  return (
    <Container>
      <div className="text-center py-12">
        <h4 className="text-xl text-[#7BAB9A] font-salsa font-semibold mb-2">
          Tour Types
        </h4>
        <h2 className="text-5xl font-salsa font-semibold">{type}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-16 lg:py-12">
        {packages?.length > 0 ? (
          packages?.map((item) => (
            <PackageCard key={item._id} item={item}></PackageCard>
          ))
        ) : (
          <div className="min-h-[40vh]">
            <h2 className="text-2xl">{`No Package Found`}</h2>
          </div>
        )}
      </div>
      {/* <div className="text-center my-10">
        <button className="bg-[#7CAB9B] hover:bg-[#7CAB9B] text-white text-md font-semibold py-2 px-8 rounded">
          Show All Package
        </button>
      </div> */}
      <GoToTop />
    </Container>
  );
};

export default PackageByType;
