import {
  LOGIN_FAILURE,
  LOGIN_REQ,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQ,
  SIGNUP_SUCCESS,
} from "./actionTypes";

const initialState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  name: "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQ:
      return { ...state, isLoading: true, isError: false };
    case SIGNUP_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    case SIGNUP_FAILURE:
      return { ...state, isError: true };
    case LOGIN_REQ:
      return { ...state, isLoading: true, isError: false };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isError: false,isAuth:true, name: payload };
    case LOGIN_FAILURE:
      return { ...state, isLoading: true, isError: false };

    default:
      return state;
  }
};
