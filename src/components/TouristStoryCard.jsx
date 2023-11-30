import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TouristStoryCard = ({ item }) => {
  const {
    _id,
    story_Title,
    Feature_image,
    story,
    tourist_name,
    tourist_image,
  } = item || {};
  return (
    <div className="rounded overflow-hidden shadow border flex flex-col">
      <Link to={`/touristStory/${_id}`}>
        <div>
          <img
            className="w-full h-[13rem] object-cover"
            src={Feature_image}
            alt={story_Title}
          />
          <div className="px-6 py-4 mb-auto">
            <h2 className="font-semibold font-salsa text-lg mb-2">
              {story_Title}
            </h2>
            <p className="text-gray-500 text-sm">{story?.slice(0, 100)}</p>
          </div>
          <div className="flex items-center px-6 pb-4">
            <img
              className="w-12 h-12 rounded-full mr-2 object-cover"
              src={tourist_image}
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <h4 className="text-gray-900 font-medium leading-none ">
                {tourist_name}
              </h4>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

TouristStoryCard.propTypes = {
  item: PropTypes.object,
};

export default TouristStoryCard;
