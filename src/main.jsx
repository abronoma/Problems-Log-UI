import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrimaryPageLayout from "./layouts/PrimaryPageLayout";
import Home from "./pages/HomePage/Home";
import ListOfBurdens from "./pages/ListBurdenPage/Index";
import ShareBurden from "./pages/ShareBurden";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryPageLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/burdens",
        element: <ListOfBurdens />,
      },

      {
        path: "/yourBurden",
        element: < ShareBurden/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
