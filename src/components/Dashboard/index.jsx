import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authAction from "../../redux/auth/actions";

const DashBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authAction.logout());
    navigate("/login");
  };

  return (
    <>
      <h1>Main Dashboard</h1>
      <NavLink to="/customer">customer</NavLink>
      <button onClick={handleLogout}>Log out</button>
    </>
  );
};

export default DashBoard;
