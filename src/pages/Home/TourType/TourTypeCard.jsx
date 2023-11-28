import PropTypes from "prop-types";
const TourTypeCard = ({ tourType }) => {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 bg-gray-100 hover:bg-white cursor-pointer text-center shadow-sm">
      <div className="flex items-center justify-center p-5">
        <img
          src={tourType?.image}
          alt="title"
          className="w-16 h-16 md:w-20 md:h-20 border-2 border-gray-400 rounded-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{tourType?.typeTitle}</h3>
      </div>
    </div>
  );
};

TourTypeCard.propTypes = {
  tourType: PropTypes.object,
};

export default TourTypeCard;
