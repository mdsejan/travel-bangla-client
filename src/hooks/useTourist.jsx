import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useTourist = () => {
  const { user, loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: isTourist, isPending: isTouristLoading } = useQuery({
    queryKey: [user?.email, "isTourist"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/tourist/${user.email}`);
      console.log(res.data);
      return res.data?.tourist;
    },
  });
  return [isTourist, isTouristLoading];
};

export default useTourist;
