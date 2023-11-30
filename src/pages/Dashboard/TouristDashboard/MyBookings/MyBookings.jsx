import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const MyBookings = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [bookingsCount, setBookingsCount] = useState(0);

  const { width, height } = useWindowSize();

  const { refetch, data: myBookings = [] } = useQuery({
    queryKey: ["myBookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/booking?user=${user.email}`);
      return res.data;
    },
  });

  useEffect(() => {
    setBookingsCount(myBookings.length);
  }, [myBookings]);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${date.getUTCDate()}/${
      date.getUTCMonth() + 1
    }/${date.getUTCFullYear()}`;
    return formattedDate;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel Booking Now!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delbooking/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Canceled!",
              text: "Booking Canceled Successfully",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <>
      <div className="flex justify-between users-center max-w-screen-lg mx-auto p-6 bg-white rounded-t-lg">
        <h2 className="text-3xl">
          <b>My Bookings</b>
        </h2>
      </div>
      <div className="overflow-x-auto max-w-screen-lg mx-auto bg-white p-6 rounded-b-lg">
        {myBookings?.length > 0 ? (
          <table className="table">
            {/* head */}
            <thead className="bg-[#7BAB9A] text-lg text-white font-bold">
              <tr>
                <th>#</th>
                <th>Package</th>
                <th>Tour Guide</th>
                <th>Tour Date</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myBookings?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>

                  <td>
                    <div className="font-bold">{item.packageName}</div>
                  </td>
                  <td>
                    <h3 className="text-lg">{item.tourGuideName}</h3>
                  </td>

                  <td>
                    <h3 className="text-lg">{formatDate(item.tourDate)}</h3>
                  </td>
                  <td>
                    <div className="font-bold">$ {item.tourPrice}</div>
                  </td>
                  <td>
                    <h3 className="text-lg">{item.status}</h3>
                  </td>

                  <th>
                    <div className="flex justify-between md:justify-start">
                      {item.status === "inReview" && (
                        <button
                          onClick={() => handleDelete(item._id)}
                          className={` text-white py-2 px-4 rounded text-xs mr-4 bg-red-500 hover:bg-orange-700
                    `}
                        >
                          Cancel
                        </button>
                      )}
                      {item.status === "Accepted" && (
                        <button
                          className={` text-white py-2 px-4 rounded text-xs mr-4 bg-orange-500 hover:bg-orange-700
                    `}
                        >
                          Pay Now
                        </button>
                      )}

                      {bookingsCount > 3 && item.status === "Accepted" ? (
                        <button
                          className={` text-white py-2 px-4 rounded text-xs mr-4 bg-[#7BAB9A] hover:bg-black
                    `}
                        >
                          Apply
                        </button>
                      ) : (
                        <button
                          disabled
                          className=" text-white py-2 px-4 rounded text-xs mr-4 bg-gray-300 hover:bg-gray-300"
                        >
                          Apply
                        </button>
                      )}
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-xl font-semibold text-red-600">
            <h2>No Booking Found</h2>
          </div>
        )}
      </div>

      {bookingsCount > 3 && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={2000}
        />
      )}
    </>
  );
};

export default MyBookings;
