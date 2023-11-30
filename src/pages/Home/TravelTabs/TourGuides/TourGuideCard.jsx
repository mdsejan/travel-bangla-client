import PropTypes from "prop-types";

const TourGuideCard = ({ tourGuide }) => {
  console.log(tourGuide);
  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-md border rounded-lg text-gray-900">
      <div className="rounded-t-lg h-36 overflow-hidden">
        <img
          className="object-cover object-bottom w-full"
          src={
            tourGuide?.coverImg
              ? tourGuide?.coverImg
              : "https://i.pinimg.com/564x/ef/2c/9f/ef2c9f322d8f4680f1a5392b7d19053f.jpg"
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
      <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li className="flex flex-col items-center justify-around">
          <svg
            className="w-4 fill-current text-blue-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <div>2k</div>
        </li>
        <li className="flex flex-col items-center justify-between">
          <svg
            className="w-4 fill-current text-blue-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
          </svg>
          <div>10k</div>
        </li>
        <li className="flex flex-col items-center justify-around">
          <svg
            className="w-4 fill-current text-blue-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
          </svg>
          <div>15</div>
        </li>
      </ul>
      <div className="p-4 border-t mx-8 mt-2">
        <button className="w-1/2 block mx-auto rounded bg-gray-900 hover:bg-[#7CAB9B] font-semibold text-white px-6 py-2">
          Details
        </button>
      </div>
    </div>
  );
};

TourGuideCard.propTypes = {
  tourGuide: PropTypes.object,
};

export default TourGuideCard;
