import { SIGNUP_FAILURE, SIGNUP_REQ, SIGNUP_SUCCESS } from "./actionTypes";

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
    default:
      return state;
  }
};
