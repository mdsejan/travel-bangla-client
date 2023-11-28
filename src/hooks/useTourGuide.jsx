import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTourGuide = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isTourGuide, isPending: isTourGuideLoading } = useQuery({
    queryKey: [user?.email, "isTourGuide"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/tourguide/${user.email}`);
      console.log(res.data);
      return res.data?.tourGuide;
    },
  });
  return [isTourGuide, isTourGuideLoading];
};

export default useTourGuide;
