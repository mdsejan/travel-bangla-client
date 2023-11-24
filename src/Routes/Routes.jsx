import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../pages/Layout/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AboutUs from "../pages/AboutUs/AboutUs";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../pages/ContactUs/ContactUs";

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
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
]);

export default router;
