import { isEmpty } from "lodash";
import { GET_ERRORS, USER_LOADING, SET_CURRENT_USER, LOGOUT } from "./actions";

export const appInitialState = {
  isAuthenticated: false,
  firstName: "",
  lastName: "",
  email: "",
  id: "",
  loading: false,
  errors: {},
};

export function appReducer(userState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...userState,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case USER_LOADING:
      return {
        ...userState,
        loading: true,
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
        firstName: "",
        lastName: "",
        email: "",
        id: "",
        loading: false,
      };
    case GET_ERRORS:
      return action.payload;
    default:
      return userState;
  }
}
