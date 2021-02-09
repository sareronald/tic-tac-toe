import React, { createContext, useReducer, useContext, useEffect } from "react";
import axios from "axios";
import { appReducer, appInitialState } from "./appStore";
import { SET_CURRENT_USER } from "../utils/actions";

const AppContext = createContext([appInitialState, function dispatch() {}]);

const { Provider } = AppContext;

export const AppContextProvider = ({ children, ...props }) => {
  const [appState, appDispatch] = useReducer(appReducer, appInitialState);

  useEffect(() => {
    const res = axios.get("/api/user_data");
    appDispatch({ type: SET_CURRENT_USER, payload: res.data });
  }, []);

  return (
    <Provider value={[appState, appDispatch]} {...props}>
      {children}
    </Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
