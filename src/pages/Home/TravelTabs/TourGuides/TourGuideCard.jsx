import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TourGuideCard = ({ tourGuide }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.03 }}
      className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-md border rounded-lg text-gray-900"
    >
      <div className="rounded-t-lg h-36 overflow-hidden">
        <img
          className="object-cover object-bottom w-full"
          src={
            tourGuide?.coverImg
              ? tourGuide?.coverImg
              : "https://i.pinimg.com/564x/b9/f4/e2/b9f4e2e402fe32ec295b00cedc1e71dc.jpg"
          }
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 bg-slate-100 border-white rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src={
            tourGuide?.profileImg
              ? tourGuide?.profileImg
              : "https://i.pinimg.com/564x/2c/bb/0e/2cbb0ee6c1c55b1041642128c902dadd.jpg"
          }
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">{tourGuide.name}</h2>
        <p className="text-gray-500">Tour Guide</p>
      </div>

      <div className="border-t px-2  py-7 mt-8">
        <Link to={`/tourGuide/${tourGuide.email}`}>
          <button className="w-2/3 block mx-auto rounded bg-gray-900 hover:bg-[#7CAB9B] font-semibold text-white px-6 py-2">
            Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

TourGuideCard.propTypes = {
  tourGuide: PropTypes.object,
};

export default TourGuideCard;
