import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../components/Container";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import TourPlan from "./TourPlan";
import useAuth from "../../hooks/useAuth";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PackageDetails = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { data: packages = [] } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/packages?id=${id}`);
      return res.data;
    },
  });

  const { data: tourGuides = [] } = useQuery({
    queryKey: ["tourGuides"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tourguide`);
      return res.data;
    },
  });

  const { _id, tripTitle, gallery, aboutTour, tourPlan, price } =
    packages[0] || {};

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log("see data", data);

    if (user) {
      const guide = tourGuides.find((guide) => guide.email === data.tourGuide);
      const bookItem = {
        packageName: tripTitle,
        packageId: _id,
        touristName: data.userName,
        touristEmail: data.userEmail,
        touristImg: data.userImage,
        tourPrice: price,
        tourDate: selectedDate,
        tourGuideEmail: data.tourGuide,
        tourGuideName: guide.name,
        status: "inReview",
      };

      console.log(bookItem);

      const menuRes = await axiosSecure.post("/booking", bookItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        // show sucsess
        Swal.fire({
          title: "Confirm your Booking",
          html: `Your booking for <strong>${tripTitle}</strong> has been confirmed.<br/>`,
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "My Bookings",
          cancelButtonText: "Close",
        }).then((result) => {
          if (result.isConfirmed) {
            // Redirect to the My Bookings page
            navigate("/dashboard/tourist/myBookings");
          }
        });
      }
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
        }
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Container>
        <div className="text-center py-12">
          <h4 className="text-xl text-[#7BAB9A] font-salsa font-semibold mb-2">
            Package Details
          </h4>
          <h2 className="text-5xl font-salsa font-semibold">{tripTitle}</h2>
        </div>

        <div className="flex flex-wrap">
          {/* Left Column */}
          <div className="w-full lg:w-2/3 p-4">
            <div className="grid grid-cols-2  gap-2">
              {gallery?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className={`rounded-sm shadow-md w-full h-[8rem] md:h-[16rem] object-cover`}
                />
              ))}
            </div>

            <div className="py-10">
              <h2 className="text-xl font-medium mb-2 ">About Package:</h2>
              <p>{aboutTour}</p>
            </div>

            <h2 className="text-xl font-medium mb-2 ">Tour plan</h2>
            <TourPlan tourPlan={tourPlan}></TourPlan>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3 p-4">
            <div className="bg-gray-100 rounded-lg p-4">
              <h2 className="text-lg font-bold mb-2">Booking Information</h2>
              {/* Include booking form or details here */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap pb-3">
                  <div className="w-full  px-4">
                    <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                      Your Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                      {...register("userName", { required: true })}
                      name="userName"
                      type="text"
                      placeholder="Name"
                      defaultValue={user?.displayName}
                    />
                    {errors.userName && (
                      <span className="text-red-600 mt-2">
                        Your Name is required
                      </span>
                    )}
                  </div>

                  <div className="w-full  px-4">
                    <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                      Your Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      {...register("userEmail", { required: true })}
                      name="userEmail"
                      type="email"
                      defaultValue={user?.email}
                    />
                    {errors.userEmail && (
                      <span className="text-red-600 mt-2">
                        Your Email is required
                      </span>
                    )}
                  </div>

                  <div className="w-full  px-4">
                    <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                      Your Image Url
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      {...register("userImage", { required: true })}
                      name="userImage"
                      type="text"
                      defaultValue={user?.photoURL}
                    />
                    {errors.userImage && (
                      <span className="text-red-600 mt-2">
                        Your Image is required
                      </span>
                    )}
                  </div>

                  <div className="w-full px-4">
                    <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                      Price
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      {...register("price")}
                      name="price"
                      type="text"
                      value={price}
                      disabled
                    />
                  </div>

                  <div className="w-full px-4">
                    <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                      Tour guide
                    </label>
                    <select
                      {...register("tourGuide", { required: true })}
                      name="tourGuide"
                      className="border border-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full p-2.5 "
                    >
                      <option value="">Choose a Tour Guide</option>
                      {tourGuides?.map((guide) => (
                        <option key={guide._id} value={guide.email}>
                          {guide.name}
                        </option>
                      ))}
                    </select>
                    {errors.tourGuide && (
                      <span className="text-red-600 mt-2">
                        Tour guide is required
                      </span>
                    )}
                  </div>

                  <div className="w-full px-4">
                    <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                      Booking Date
                    </label>
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholderText="Select a date"
                      required
                    />
                  </div>

                  <div className="flex justify-center w-full px-4 mt-12 mb-12 md:mb-0">
                    <button
                      className="bg-[#7BAB9A] hover:bg-gray-800 text-white font-bold w-2/3 py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PackageDetails;
