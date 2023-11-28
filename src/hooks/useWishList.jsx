import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useWishList = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { refetch, data: wishlist = [] } = useQuery({
    queryKey: ["wishList"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishList?user=${user.email}`);
      return res.data;
    },
  });
  return [wishlist, refetch];
};

export default useWishList;
