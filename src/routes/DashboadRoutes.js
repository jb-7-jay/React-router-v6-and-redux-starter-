import React from "react";
import DashBoardLayout from "../components/DashBoardLayout";
import Login from "../components/Login";

const DashboadRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/", element: <DashBoardLayout /> },
];

export default DashboadRoutes;
