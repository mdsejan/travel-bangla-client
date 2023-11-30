import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../pages/Layout/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AboutUs from "../pages/AboutUs/AboutUs";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../pages/ContactUs/ContactUs";
import AdminHome from "../pages/Dashboard/AdminDashboard/AdminHome";
import MyProfile from "../pages/Dashboard/AdminDashboard/MyProfile/MyProfile";
import AddPackage from "../pages/Dashboard/AdminDashboard/AddPackage/AddPackage";
import Dashboard from "../pages/Layout/Dashboard";
import ManageUsers from "../pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import AllPackage from "../pages/AllPackage/AllPackage";
import AdminRoute from "./AdminRoute";
import PackageDetails from "../pages/PackageDetails/PackageDetails";
import TouristProfile from "../pages/Dashboard/TouristDashboard/TouristProfile/TouristProfile";
import TourGuideProfile from "../pages/Dashboard/TourGuideDashboard/TourGuideProfile/TourGuideProfile";
import MyWishlist from "../pages/Dashboard/TouristDashboard/MyWishlist/MyWishlist";
import PackageByType from "../pages/PackageByType/PackageByType";
import MyBookings from "../pages/Dashboard/TouristDashboard/MyBookings/MyBookings";
import MyAssignedTours from "../pages/Dashboard/TourGuideDashboard/MyAssignedTours/MyAssignedTours";
import AboutTourGuide from "../pages/AboutTourGuide/AboutTourGuide";
import Error from "../pages/Shared/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },

      {
        path: "all-package",
        element: <AllPackage></AllPackage>,
      },
      {
        path: "packageType/:type",
        element: <PackageByType></PackageByType>,
      },
      {
        path: "packageDetails/:id",
        element: <PackageDetails></PackageDetails>,
      },
      {
        path: "tourGuide/:email",
        element: <AboutTourGuide></AboutTourGuide>,
      },

      {
        path: "about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "contact-us",
        element: <ContactUs></ContactUs>,
      },
    ],
  },

  {
    path: "dashboard",
    errorElement: <Error></Error>,
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      //Admin Routes
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },

      {
        path: "admin/profile",
        element: (
          <AdminRoute>
            <MyProfile></MyProfile>
          </AdminRoute>
        ),
      },
      {
        path: "addPackage",
        element: (
          <AdminRoute>
            <AddPackage></AddPackage>
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },

      // Tourist Routes
      {
        path: "tourist/profile",
        element: <TouristProfile></TouristProfile>,
      },

      {
        path: "tourist/wishlist",
        element: <MyWishlist></MyWishlist>,
      },

      {
        path: "tourist/myBookings",
        element: <MyBookings></MyBookings>,
      },

      // TourGuide Routes
      {
        path: "tourGuide/profile",
        element: <TourGuideProfile></TourGuideProfile>,
      },
      {
        path: "tourGuide/assignedTours",
        element: <MyAssignedTours></MyAssignedTours>,
      },
    ],
  },

  {
    path: "login",
    errorElement: <Error></Error>,
    element: <Login></Login>,
  },
  {
    path: "register",
    errorElement: <Error></Error>,
    element: <Register></Register>,
  },
]);

export default router;
