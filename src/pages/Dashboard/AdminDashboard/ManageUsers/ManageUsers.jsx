import { useQuery } from "@tanstack/react-query";
// import { FaTrash } from "react-icons/fa6";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/user/admin/${user}`).then((res) => {
          console.log(res);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Admin Set!",
              text: "User Role has been set Admin.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleMakeTourGuide = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Tour Guide!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/user/guide/${user}`).then((res) => {
          console.log(res);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "TourGuide Set!",
              text: "User Role has been set Tour Guide.",
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
          <b>Manage Users</b>
        </h2>
        <h2 className="text-3xl">
          <b>Total Users:</b> {users.length}
        </h2>
      </div>
      <div className="overflow-x-auto max-w-screen-lg mx-auto bg-white p-6 rounded-b-lg">
        <table className="table">
          {/* head */}
          <thead className="bg-[#7BAB9A] text-lg text-white font-bold">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>

                <td>
                  <div className="font-bold">{user.name}</div>
                </td>
                <td>
                  <h3 className="font-semibold text-lg">{user.email}</h3>
                </td>
                <th>
                  <h3 className="font-semibold text-lg">{user.role}</h3>
                  {/* {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      // onClick={() => handleMakeAdmin(user._id)}
                      className="text-2xl text-[#B91C1C] hover:text-black"
                    >
                      <FaUserCheck />
                    </button>
                  )} */}
                </th>

                <th>
                  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    disabled={user.role === "admin"}
                    className={` text-white py-1 px-3 rounded text-xs mr-4 ${
                      user.role === "admin"
                        ? "bg-gray-300 hover:bg-gray-300 "
                        : "bg-orange-600 hover:bg-black"
                    }`}
                  >
                    make admin
                  </button>
                  <button
                    onClick={() => handleMakeTourGuide(user._id)}
                    disabled={
                      user.role === "admin" || user.role === "tourGuide"
                    }
                    className={` text-white py-1 px-3 rounded text-xs mr-4 ${
                      user.role === "admin" || user.role === "tourGuide"
                        ? "bg-gray-300 hover:bg-gray-300 "
                        : "bg-orange-600 hover:bg-black"
                    }`}
                  >
                    Make Tour Guide
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageUsers;
