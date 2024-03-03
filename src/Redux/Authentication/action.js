import axios from "axios";
import { LOGIN_REQ, SIGNUP_REQ } from "./actionTypes";

export const UserSignup = (userSignupData) => (dispatch) => {
  dispatch({ type: SIGNUP_REQ });
  return axios.post(
    "https://note-api-bdde.onrender.com/users/register",
    userSignupData
  );
};

export const userLogin = (userLogindata)=>(dispatch)=>{
    dispatch({type:LOGIN_REQ})
    return axios.post("https://note-api-bdde.onrender.com/users/login",userLogindata)
}
