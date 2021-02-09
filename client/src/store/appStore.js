import { isEmpty } from "lodash";
import {
  GET_ERRORS,
  USER_LOADING,
  SET_CURRENT_USER,
  LOGOUT,
} from "../utils/actions";

export const appInitialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  errors: {},
};

export function appReducer(state, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
        isAuthenticated: false,
      };
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
}
