import axios from "axios";
import { useEffect } from "react";
import { LOGOUT } from "./actions";

export const useLoginCheck = () => {
  useEffect(() => {
    axios.get("/api/user_data");
  }, []);
};

export const logout = (dispatch) => {
  // not sure what to put here?
  return axios.get("/api/logout").then(() => {
    dispatch({ type: LOGOUT });
  });
};
