import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";

const ContactUs = () => {
  return (
    <Container>
      <Helmet>
        <title>Contact Us - TravelBangla</title>
      </Helmet>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-36 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leadi lg:text-5xl">{`Let's talk!`}</h2>
            <div className="text-gray-600">
              Vivamus in nisl metus? Phasellus.
            </div>
          </div>
          <img src="assets/svg/doodle.svg" alt="" />
        </div>
        <form className="space-y-6">
          <div>
            <label className="text-sm">Full name</label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="text-sm">Message</label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded bg-gray-100"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-[#7bab9a] text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </Container>
  );
};

export default ContactUs;
