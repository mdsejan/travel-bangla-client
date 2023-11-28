import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useTourGuide = () => {
  const { user, loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: isTourGuide, isPending: isTourGuideLoading } = useQuery({
    queryKey: [user?.email, "isTourGuide"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/tourguide/${user.email}`);
      console.log(res.data);
      return res.data?.tourGuide;
    },
  });
  return [isTourGuide, isTourGuideLoading];
};

export default useTourGuide;
