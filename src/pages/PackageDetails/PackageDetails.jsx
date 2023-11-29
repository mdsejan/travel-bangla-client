import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import TourPlan from "./TourPlan";

const PackageDetails = () => {
  const { id } = useParams();

  const axiosPublic = useAxiosPublic();

  const { data: packages = [] } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/packages?id=${id}`);
      return res.data;
    },
  });

  const { tripTitle, gallery, aboutTour, tourPlan } = packages[0] || {};

  return (
    <div className="min-h-screen">
      <Container>
        <div className="text-center py-12">
          <h4 className="text-xl text-[#7BAB9A] font-salsa font-semibold mb-2">
            Package Details
          </h4>
          <h2 className="text-5xl font-salsa font-semibold">{tripTitle}</h2>
        </div>

        <div className="flex flex-wrap">
          {/* Left Column */}
          <div className="w-full lg:w-2/3 p-4">
            <div className="grid grid-cols-2  gap-2">
              {gallery?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className={`rounded-sm shadow-md w-full h-[8rem] md:h-[16rem] object-cover`}
                />
              ))}
            </div>

            <div className="py-10">
              <h2 className="text-xl font-medium mb-2 ">About Package:</h2>
              <p>{aboutTour}</p>
            </div>

            <h2 className="text-xl font-medium mb-2 ">Tour plan</h2>
            <TourPlan tourPlan={tourPlan}></TourPlan>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3 p-4">
            <div className="bg-gray-200 rounded-lg p-4">
              <h2 className="text-lg font-bold mb-2">Booking Information</h2>
              {/* Include booking form or details here */}
              <form>{/* Form elements */}</form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PackageDetails;
