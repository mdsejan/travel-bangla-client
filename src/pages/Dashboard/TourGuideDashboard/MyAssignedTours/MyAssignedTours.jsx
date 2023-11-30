import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyAssignedTours = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { refetch, data: assignedTours = [] } = useQuery({
    queryKey: ["assignedTours"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/booking?guide=${user.email}`);
      return res.data;
    },
  });

  function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${date.getUTCDate()}/${
      date.getUTCMonth() + 1
    }/${date.getUTCFullYear()}`;
    return formattedDate;
  }

  const handleReject = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Rejected Now!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/booking/reject/${id}`).then((res) => {
          console.log(res);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Rejected!",
              text: "Booking Rejected ",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleAccept = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,  Accept Now!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/booking/accept/${id}`).then((res) => {
          console.log(res);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Accepted!",
              text: "Booking  Accepted Successfully",
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
          <b>My Assigned Tours</b>
        </h2>
      </div>
      <div className="overflow-x-auto max-w-screen-lg mx-auto bg-white p-6 rounded-b-lg">
        {assignedTours?.length > 0 ? (
          <table className="table">
            {/* head */}
            <thead className="bg-[#7BAB9A] text-lg text-white font-bold">
              <tr>
                <th>#</th>
                <th>Package</th>
                <th>Tourist Name</th>
                <th>Tour Date</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {assignedTours?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>

                  <td>
                    <div className="font-bold">{item.packageName}</div>
                  </td>
                  <td>
                    <h3 className="text-lg">{item.touristName}</h3>
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
                      <button
                        onClick={() => handleAccept(item._id)}
                        disabled={
                          item.status === "Accepted" ||
                          item.status === " Rejected"
                        }
                        className={` text-white py-2 px-4 rounded text-xs mr-4 ${
                          item.status === "Accepted" ||
                          item.status === " Rejected"
                            ? "bg-gray-300 hover:bg-gray-300 "
                            : "bg-[#7BAB9A] hover:bg-[#7BAB9A]"
                        }
                    `}
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleReject(item._id)}
                        disabled={
                          item.status === "Accepted" ||
                          item.status === " Rejected"
                        }
                        className={` text-white py-2 px-4 rounded text-xs mr-4 ${
                          item.status === "Accepted" ||
                          item.status === " Rejected"
                            ? "bg-gray-300 hover:bg-gray-300 "
                            : "bg-red-500 hover:bg-orange-700"
                        } 
                    `}
                      >
                        Reject
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-xl font-semibold text-red-600">
            <h2>No Tours Found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default MyAssignedTours;
