import { FaGear, FaHouse } from "react-icons/fa6";
import { MdAddToPhotos, MdOutlineLogout } from "react-icons/md";
import { RiMenuSearchFill } from "react-icons/ri";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import useTourist from "../../hooks/useTourist";
import useTourGuide from "../../hooks/useTourGuide";

const Dashboard = () => {
  const { logOut, user } = useAuth();

  const [isAdmin] = useAdmin();
  const [isTourist] = useTourist();
  const [isTourGuide] = useTourGuide();

  const handleLogOut = () => {
    logOut().then();
  };

  const navLink = isAdmin ? (
    <>
      <li>
        <NavLink to="/dashboard/admin/profile">
          <FaHouse /> My Profile
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/dashboard/myProfile">
          <MdAddToPhotos /> myProfile
        </NavLink>
      </li> */}
      <li>
        <NavLink to="/dashboard/addPackage">
          <MdAddToPhotos /> Add Package
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manageUsers">
          <FaGear /> Manage Users
        </NavLink>
      </li>
    </>
  ) : isTourist ? (
    <>
      <li>
        <NavLink to="/dashboard/tourist/profile">
          <FaHouse /> My Profile
        </NavLink>
      </li>
    </>
  ) : isTourGuide ? (
    <>
      <li>
        <NavLink to="/dashboard/tourGuide/profile">
          <FaHouse /> My Profile
        </NavLink>
      </li>
    </>
  ) : (
    ""
  );

  const mainSiteLinks = (
    <>
      <li>
        <NavLink to="/">
          <FaHouse /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-package">
          <RiMenuSearchFill /> All Package
        </NavLink>
      </li>
      <li>
        <button onClick={handleLogOut}>
          <MdOutlineLogout /> Logout
        </button>
      </li>
    </>
  );

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-64 min-h-screen bg-gray-200 py-10 px-5 shadow-sm hidden lg:block">
        <div className="flex items-center bg-white rounded-3xl shadow-sm mb-8">
          <label className="btn btn-ghost btn-circle avatar m-1">
            <div className="w-14 rounded-full ">
              {user && (
                <img
                  alt={user?.displayName}
                  src={user?.photoURL}
                  className="w-full object-cover"
                />
              )}
            </div>
          </label>
          <span className="ml-2 text-sm font-semibold">
            {user?.displayName}
          </span>
        </div>
        <ul className="menu gap-4">{navLink}</ul>

        {/* Shared Navlinks */}
        <div className="divider my-10">Main Site</div>

        <ul className="menu">{mainSiteLinks}</ul>
      </div>

      {/* for Mobile and tablet */}
      <div className="navbar bg-base-100 sticky top-0 border-b z-30 lg:hidden">
        <div className="navbar-start">
          <Link
            to="/"
            rel="noopener noreferrer"
            className="flex justify-center lg:justify-start"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-full ">
              {/* <FaEarthAsia className="text-white text-2xl bg-[#e9a55c]" /> */}
              <img src="https://i.ibb.co/1LkKBCY/tourism.png" alt="logo" />
            </div>
            <span className="self-center text-2xl font-semibold ml-2 site-title">
              TravelBangla
            </span>
          </Link>
        </div>
        <div className="navbar-end">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-14 rounded-full ">
              {user && (
                <img
                  alt={user?.displayName}
                  src={user?.photoURL}
                  className="w-full object-cover"
                />
              )}
            </div>
          </label>
          <div className="dropdown dropdown-end">
            <label tabIndex={1} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={1}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}

              {/* Shared Navlinks */}
              <div className="divider my-5">Main Site</div>

              {mainSiteLinks}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-1 p-10 bg-gray-100 min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
