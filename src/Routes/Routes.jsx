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

const router = createBrowserRouter([
  {
    path: "/",
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
        path: "packageDetails/:id",
        element: <PackageDetails></PackageDetails>,
      },

      {
        path: "about-us",
        element: (
          <PrivateRoute>
            <AboutUs></AboutUs>
          </PrivateRoute>
        ),
      },
      {
        path: "contact-us",
        element: <ContactUs></ContactUs>,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },

      {
        path: "admin/myProfile",
        element: (
          <AdminRoute>
            <MyProfile></MyProfile>
          </AdminRoute>
        ),
      },
      {
        path: "addPackage",
        element: <AddPackage></AddPackage>,
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
    ],
  },

  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
]);

export default router;
