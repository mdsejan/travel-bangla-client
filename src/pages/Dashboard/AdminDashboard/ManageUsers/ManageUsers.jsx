const ManageUsers = () => {
  return (
    <>
      <div className="flex justify-between users-center max-w-screen-lg mx-auto p-10 bg-white rounded-t-lg">
        <h2 className="text-3xl">
          <b>Manage Users</b>
        </h2>
        <h2 className="text-3xl">{/* <b>Total Users:</b> {users.length} */}</h2>
      </div>
      <div className="overflow-x-auto max-w-screen-lg mx-auto bg-white p-10 rounded-b-lg">
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
          {/* <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>

                <td>
                  <div className="font-bold">{user.name}</div>
                </td>
                <td>
                  <h3 className="font-semibold text-xl">{user.email}</h3>
                </td>
                <th>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="text-2xl text-[#B91C1C] hover:text-black"
                    >
                      <FaUserCheck />
                    </button>
                  )}
                </th>

                <th>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="text-2xl text-[#B91C1C] hover:text-black"
                  >
                    <FaTrash />
                  </button>
                </th>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </>
  );
};

export default ManageUsers;
