import herovideo from "../../../assets/video/hero.mp4";

const Banner = () => {
  return (
    <div
      className="w-[97%] mx-auto bg-cover bg-center h-[23vh] md:h-[28vh] lg:h-[80vh] rounded-md my-3 md:my-7 banner"
      // style={{
      //   backgroundImage: "url(https://i.ibb.co/MSNvY3B/tour1.jpg)",
      // }}
    >
      <video src={herovideo} autoPlay loop muted></video>
      <div className="bg-overlay"></div>
      <div className="content flex justify-center items-center">
        <div className="text-white text-center hidden md:block">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4 lg:mb-8 htitle">
            Explore with Travel Bangla
          </h2>
          <p className="lg:text-xl">{`Unveiling Bangladesh's Rich Tapestry of Adventures and Culture!`}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// const Banner = () => {

//   return (
//     <div
//       className="w-[97%] mx-auto bg-cover bg-center h-[30vh] lg:h-[70vh] rounded-md my-3 md:my-7"
//       style={{
//         backgroundImage: "url(https://i.ibb.co/MSNvY3B/tour1.jpg)",
//       }}
//     >
//       <h2>.</h2>
//     </div>
//   );
// };

// export default Banner;
