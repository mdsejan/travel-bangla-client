import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const TourTypeCard = ({ tourType }) => {
  return (
    <Link to={`packageType/${tourType?.typeTitle}`}>
      <div className="rounded-lg overflow-hidden border border-gray-200 bg-gray-100 hover:bg-white cursor-pointer text-center shadow-sm">
        <div className="flex items-center justify-center p-5">
          <img
            src={tourType?.image}
            alt={tourType?.typeTitle}
            className="w-16 h-16 md:w-20 md:h-20 border-2 border-gray-400 rounded-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{tourType?.typeTitle}</h3>
        </div>
      </div>
    </Link>
  );
};

TourTypeCard.propTypes = {
  tourType: PropTypes.object,
};

export default TourTypeCard;
