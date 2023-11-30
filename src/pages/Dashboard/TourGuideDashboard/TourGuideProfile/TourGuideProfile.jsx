import useAuth from "../../../../hooks/useAuth";
import { FaBriefcase, FaUserGraduate } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const TourGuideProfile = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: tourGuide = [] } = useQuery({
    queryKey: ["tourGuide"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/find/tourguide/${user.email}`);
      return res.data;
    },
  });

  const {
    name,
    profileImg,
    coverImg,
    about,
    contact_details,
    education,
    skills,
    work_experience,
  } = tourGuide || {};

  return (
    <div className="bg-white md:mx-auto rounded shadow w-full lg:w-[80%] overflow-hidden">
      <div
        className="h-48 bg-gradient-to-r from-cyan-500 to-blue-500 bg-center bg-cover"
        style={{
          backgroundImage: `url("${coverImg}")`,
        }}
      />

      <div className="px-5 py-2 flex flex-col gap-3 pb-6">
        <div className="h-[90px] shadow-md w-[90px] rounded-full border-4 overflow-hidden -mt-14 border-white">
          <img
            src={
              profileImg
                ? profileImg
                : "https://i.pinimg.com/564x/2c/bb/0e/2cbb0ee6c1c55b1041642128c902dadd.jpg"
            }
            className="w-full h-full rounded-full object-center object-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between md:items-end">
          <div className="lg:w-1/2">
            <h3 className="text-xl text-slate-900 relative font-bold leading-6">
              {name}
            </h3>
            <p className="text-sm text-gray-600 my-2">
              {contact_details?.ContactEmail}
            </p>
          </div>
          <div className="lg:w-1/2">
            <p className="text-sm text-gray-600 my-2">
              <strong>Phone:</strong> {contact_details?.phone}
            </p>
            <p className="text-sm text-gray-600 my-2">
              <strong>Address:</strong> {contact_details?.address}
            </p>
          </div>
        </div>

        <h4 className="text-md font-medium leading-3 my-3">Skills</h4>
        <div className="flex gap-3 flex-wrap">
          {skills?.map((skill, index) => (
            <span
              key={index}
              className="rounded-sm bg-green-100 px-3 py-1 text-xs font-medium text-green-800"
            >
              {skill}
            </span>
          ))}
        </div>

        <h4 className="text-md font-medium leading-3 my-6">About</h4>
        <p className="text-sm text-stone-500">{about && about}</p>

        <h4 className="text-md font-medium leading-3 mt-5 mb-2">Education</h4>

        <div className="flex flex-col gap-3">
          {education?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row flex-wrap items-center justify-start gap-4 px-2 py-3 bg-white rounded border w-full "
            >
              <div className="bg-[#D7F0E7] p-3 rounded-full text-2xl text-[#23664F]">
                <FaUserGraduate />
              </div>
              <div className="leading-3">
                <p className=" text-sm font-bold text-slate-700">
                  {item?.degree}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 self-start ml-auto">
                  {item?.school}
                </p>
              </div>

              <div className="flex justify-end flex-1">
                <p className="text-sm text-slate-500 self-start ml-auto">
                  <strong>Year: &nbsp;</strong> {item?.year}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h4 className="text-md font-medium leading-3 mt-5 mb-2">Experiences</h4>

        <div className="flex flex-col gap-3">
          {work_experience?.map((experience, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row flex-wrap items-center justify-start gap-4 px-2 py-3 bg-white rounded border w-full "
            >
              <div className="bg-[#D7F0E7] p-3 rounded-full text-2xl text-[#23664F]">
                <FaBriefcase />
              </div>
              <div className="leading-3">
                <p className=" text-md font-bold text-slate-700">
                  {experience?.position}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 self-start ml-auto">
                  {experience?.company}
                </p>
              </div>

              <div className="flex justify-end flex-1">
                <p className="text-sm text-slate-500 self-start ml-auto">
                  <strong>Year: &nbsp;</strong> {experience?.years}
                </p>
              </div>
            </div>
          ))}
          {/* <div className="flex flex-col md:flex-row flex-wrap items-center justify-around gap-3 px-2 py-3 bg-white rounded border w-full ">
            <div className="bg-[#D7F0E7] p-3 rounded-full text-2xl text-[#23664F]">
              <FaBriefcase />
            </div>
            <div className="leading-3">
              <p className=" text-sm font-bold text-slate-700">
                Lead Tour Guide
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-500 self-start ml-auto">
                Discover Bangladesh Tours
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500 self-start ml-auto">
                2016 - Present
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TourGuideProfile;
