import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut().then();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="mr-2">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-us" className="mr-2">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact-us" className="mr-2">
          Contact Us
        </NavLink>
      </li>
      {!user && (
        <li>
          <NavLink to="/login" className="mr-2">
            Login
          </NavLink>
        </li>
      )}

      {/* {!user ? (
        <li>
          <NavLink to="/login" className="mr-2">
            Login
          </NavLink>
        </li>
      ) : (
        <>
          <li>
            <button
              onClick={handleLogOut}
              className="hover:bg-transparent text-red-800 hover:text-red-600 font-semibold hover:font-bold"
            >
              Logout
            </button>
          </li>
          <li tabIndex={0}>
            <details className="font-semibold">
              <summary>Dashboard</summary>
              <ul className="p-1 w-36">
                <li>
                  <NavLink to="/add-swap" className="mr-2">
                    Add Swap
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my-swaps" className="mr-2">
                    My Swaps
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my-schedule" className="mr-2">
                    My Schedules
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
        </>
      )} */}
    </>
  );
  return (
    <div className="bg-base-100  sticky top-0 border-b z-30">
      <div className="navbar justify-between max-w-screen-2xl mx-auto px-4">
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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
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
            {user && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <span className="justify-between">{user?.displayName}</span>
                </li>
                <li>
                  <span>{user?.email}</span>
                </li>
                <li>
                  <NavLink to="/dashboard" className="mr-2">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            )}
          </div>
        </div>
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
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
