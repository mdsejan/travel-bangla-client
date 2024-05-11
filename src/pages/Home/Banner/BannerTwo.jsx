import bannerImg from "../../../../src/assets/home/bannerbg.jpg";
import { motion } from "framer-motion";

const BannerTwo = () => {
  const bannerText = "Explore with Travel Bangla".split(" ");
  return (
    <>
      <div
        className="max-w-[2560px] mx-auto bg-cover bg-center h-[23vh] md:h-[24vh] lg:h-[35vh] 2xl:h-[80vh] banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="bg-overlay"></div>
        <div className="content flex justify-center items-center">
          <div className="text-white text-center ">
            <h2 className="text-xl md:text-4xl lg:text-6xl 2xl:text-8xl font-bold mb-4 lg:mb-8 htitle">
              {bannerText.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 4,
                    delay: i / 4,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.5,
              }}
              className="text-xs lg:text-2xl text-slate-200"
            >
              {`Unveiling Bangladesh's Rich Tapestry of Adventures and Culture!`}
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerTwo;
