import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const PackageCard = ({ item }) => {
  const { _id, featureImage, tripTitle, tourType, aboutTour, price } =
    item || {};

  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleWishlist = () => {
    if (user) {
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
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "please login to add to wishList",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
        }
      });
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.03 }}
      className="card bg-base-100 border shadow rounded-md relative"
    >
      <figure className="relative">
        <img
          src={featureImage}
          alt={tripTitle}
          className="w-full h-60 object-cover"
        />
        <div className="absolute top-4 right-4">
          <button onClick={handleWishlist}>
            <FaHeart className="text-red-500 text-3xl" />
          </button>
        </div>
      </figure>
      <div className="card-body">
        <div className="flex justify-between mb-4">
          <div className="badge badge-outline">{tourType}</div>
          <h2 className="text-xl font-bold text-[#21664e]">$ {price}</h2>
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
    </motion.div>
  );
};

PackageCard.propTypes = {
  item: PropTypes.object,
};

export default PackageCard;
