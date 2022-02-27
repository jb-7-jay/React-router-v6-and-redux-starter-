import React from "react";
import { useDispatch } from "react-redux";
import authAction from "../../redux/auth/actions";

const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(authAction.login());
  };

  return (
    <div>
      Login
      <button onClick={handleLogin}>Click to Login</button>
    </div>
  );
};

export default Login;
