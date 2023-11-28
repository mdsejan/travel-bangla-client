import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTourist = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isTourist, isPending: isTouristLoading } = useQuery({
    queryKey: [user?.email, "isTourist"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/tourist/${user.email}`);
      return res.data?.tourist;
    },
  });
  return [isTourist, isTouristLoading];
};

export default useTourist;
