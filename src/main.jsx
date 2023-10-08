import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AuthProvider from "./Components/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute";
import Evocation from "./Components/Pages/Evocation";
import Dresses from "./Components/Pages/Dresses";
import Services from "./Components/Services";
import Pricing from "./Components/Pricing/Pricing";
import ErrorPage from "./Components/Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
      },
      {
        path: "/pricing",
        element: (
          <PrivateRoute>
            <Pricing></Pricing>
          </PrivateRoute>
        ),
      },
      {
        path: "/evocation",
        element: (
          <PrivateRoute>
            <Evocation></Evocation>
          </PrivateRoute>
        ),
      },

      {
        path: "/wedding-dresses",
        element: (
          <PrivateRoute>
            <Dresses></Dresses>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
