import React from "react";
import Login from "../components/Login";
import DashBoardLayout from "../components/DashBoardLayout/index";

const LayoutRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/*", element: <DashBoardLayout /> },
];

export default LayoutRoutes;
