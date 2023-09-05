import React, { useEffect } from "react";
import Browse from "../pages/Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
