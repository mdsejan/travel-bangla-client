import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PackageCard = ({ item }) => {
  console.log(item);
  const { _id, featureImage, tripTitle, tourType, aboutTour, price } =
    item || {};

  return (
    <div className="card bg-base-100 border shadow rounded-md">
      <figure>
        <img
          src={featureImage}
          alt={tripTitle}
          className="w-full h-60 object-cover"
        />
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
            <button className="bg-[#7CAB9B] hover:bg-[#7CAB9B] text-white text-md py-2 px-8 rounded">
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
