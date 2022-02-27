import axios from "axios";
import { setHeadersWithAccessToken } from "../index";

const API_BASE = process.env.REACT_APP_APIBASE;

export const userLogin = (data) => {
  return axios
    .post(`${API_BASE}/api/auth`, data)
    .then((e) => e)
    .catch((e) => e);
};

export const userRegister = (auth, data) => {
  setHeadersWithAccessToken(auth);
  return axios
    .post(`${API_BASE}/api/auth/register`, data)
    .then((e) => e)
    .catch((e) => e);
};
