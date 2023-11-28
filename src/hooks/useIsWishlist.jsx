import { useState } from "react";
import useWishList from "./useWishList";
import { useEffect } from "react";

const useIsWishlist = () => {
  const [wishlist] = useWishList();
  const [isWishlist, setIsWishlist] = useState(false);

  useEffect(() => {
    const findItem = wishlist.find(
      (item) => item.packageId == "6565f5fc9008de6d3a3efb1a"
    );

    console.log(findItem);

    if (findItem) {
      setIsWishlist(true);
    }
  }, [wishlist]);

  return { isWishlist };
};

export default useIsWishlist;
