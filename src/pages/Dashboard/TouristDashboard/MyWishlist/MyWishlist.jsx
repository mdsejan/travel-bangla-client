import { Link } from "react-router-dom";
import useWishList from "../../../../hooks/useWishList";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const MyWishlist = () => {
  const [wishlist, refetch] = useWishList();

  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delWishList/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Delete Successfully",
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
          <b>My Wishlist</b>
        </h2>
      </div>
      <div className="overflow-x-auto max-w-screen-lg mx-auto bg-white p-6 rounded-b-lg">
        <table className="table">
          {/* head */}
          <thead className="bg-[#7BAB9A] text-lg text-white font-bold">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {wishlist?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>

                <th>
                  <div className=" w-16 h-16 md:w-24 md:h-24">
                    <img
                      className="w-full h-full object-cover"
                      src={item.packageImg}
                      alt={item.packageName}
                    />
                  </div>
                </th>

                <td>
                  <div className="font-bold">{item.packageName}</div>
                </td>
                <td>
                  <h3 className="font-semibold text-lg">{item.packagePrice}</h3>
                </td>

                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className={` text-white py-2 px-4 rounded text-xs mr-4 bg-red-500 hover:bg-orange-700
                    `}
                  >
                    Delete
                  </button>
                  <Link to={`/packageDetails/${item.packageId}`}>
                    <button
                      className={` text-white py-2 px-4 rounded text-xs mr-4 bg-[#7BAB9A] hover:bg-black
                    `}
                    >
                      View Details
                    </button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyWishlist;
