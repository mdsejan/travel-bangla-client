import PropTypes from "prop-types";
import { useState } from "react";

const TourPlan = ({ tourPlan }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="mt-6 border">
      {tourPlan?.map((item, index) => (
        <div key={index} className="border-b border-gray-200 p-4">
          <button
            className="flex  justify-between w-full py-3 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-semibold">{item.title}</span>
            <svg
              className={`w-5 h-5 transition-transform transform ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {activeIndex === index && (
            <div className="px-4 py-2 bg-gray-100">
              <p>{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

TourPlan.propTypes = {
  tourPlan: PropTypes.object,
};

export default TourPlan;
