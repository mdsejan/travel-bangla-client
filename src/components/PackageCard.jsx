import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const PackageCard = ({ item }) => {
  const { _id, featureImage, tripTitle, tourType, aboutTour, price } =
    item || {};

  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const handleWishlist = () => {
    const toastId = toast.loading("adding ...");
    const wishPackage = {
      packageImg: featureImage,
      packageName: tripTitle,
      packagePrice: price,
      packageId: _id,
      userEmail: user.email,
    };

    axiosPublic.post("/wishList", wishPackage).then((res) => {
      if (res.data.insertedId) {
        toast.success("Package added to wishlist", {
          id: toastId,
          duration: 3000,
        });
      }
    });
  };
  return (
    <div className="card bg-base-100 border shadow rounded-md relative">
      <figure className="relative">
        <img
          src={featureImage}
          alt={tripTitle}
          className="w-full h-60 object-cover"
        />
        <div className="absolute top-4 right-4">
          <button onClick={handleWishlist}>
            <FaHeart className="text-black text-3xl" />
          </button>
        </div>
      </figure>
      <div className="card-body">
        <div className="flex justify-between mb-4">
          <div className="badge badge-outline">{tourType}</div>
          <h2 className="text-xl font-bold text-[#21664e]">{price}</h2>
        </div>
        <h2 className="card-title">{tripTitle}</h2>
        <p>{aboutTour?.slice(0, 100)}</p>
        <div className="text-center mt-10">
          <Link to={`/packageDetails/${_id}`}>
            <button className="bg-gray-900 hover:bg-[#7CAB9B] text-white text-md py-2 px-8 rounded">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

PackageCard.propTypes = {
  item: PropTypes.object,
};

export default PackageCard;
