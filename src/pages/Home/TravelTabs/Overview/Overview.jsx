import aboutimg from "../../../../assets/home/about_img.png";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdAirplaneTicket } from "react-icons/md";

const Overview = () => {
  return (
    <div className="flex flex-col lg:flex-row py-16 lg:py-10 items-center">
      <div className="lg:w-1/2 md:px-20 lg:px-0 lg:pr-20">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[1.2em]">
          We create journeys for the excited traveler
        </h2>
        <div className="flex mt-16">
          <div className="w-28">
            <div className="w-20 h-20 rounded-full shadow-lg flex justify-center items-center">
              <FaMapMarkedAlt className="text-3xl text-[#21664e]" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-3">Best of hotel</h3>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitation em ullam
              corporis suscipit laboriosam, nisi ut al
            </p>
          </div>
        </div>
        <div className="flex mt-16">
          <div className="w-28">
            <div className="w-20 h-20 rounded-full shadow-lg flex justify-center items-center">
              <MdAirplaneTicket className="text-3xl text-[#21664e]" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-3">World class travel</h3>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit asper natur aut
              oditut fugit seduia con senim ipsam tatem
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 pt-12 md:p-20">
        <img className="w-full" src={aboutimg} alt="img" />
      </div>
    </div>
  );
};

export default Overview;
