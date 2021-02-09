import axios from "axios";
import { LOGOUT } from "./actions";

export const signupUser = (userData) => {
  // console.log(userData);
  return axios.post("/api/signup", {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    password: userData.password,
    userType: userData.userType,
  });
};

export const loginUser = (userData) => {
  // console.log(userData);
  return axios.post("/api/login", {
    email: userData.email,
    password: userData.password,
  });
};

export const getUsers = () => {
  return axios.get("/api/displayusers").then((res) => res.data);
};

export const logout = (dispatch) => {
  return axios.get("/api/logout").then(() => {
    dispatch({ type: LOGOUT });
  });
};
