import axios from "axios";

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
