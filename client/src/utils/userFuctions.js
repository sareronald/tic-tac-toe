import axios from "axios";

export const signupUser = (userData) => {
  // console.log(userData);
  return axios.post("http://localhost:3001/api/signup", {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    password: userData.password,
    userType: userData.userType,
  });
};

export const loginUser = (userData) => {
  // console.log(userData);
  return axios.post("http://localhost:3001/api/login", {
    email: userData.email,
    password: userData.password,
  });
};

export const getUsers = () => {
  return axios
    .get("http://localhost:3001/api/displayusers")
    .then((res) => res.data);
};
