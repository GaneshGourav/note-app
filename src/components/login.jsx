import { Box, Text, useDisclosure, useToast } from "@chakra-ui/react";

import "../css/login.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/Authentication/action";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from "../Redux/Authentication/actionTypes";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const toast = useToast();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.authReducer.isLoading);
  const name = useSelector((store) => store.authReducer.name);
  console.log(name);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handlerOnChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(userLogin(user))
      .then((res) => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.name });
        toast({
         
          description: "Succesfully Logged In",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setTimeout(() => {
          navigate("/notes")
        }, 2000);
      })
      .catch((err) => {
        dispatch({ type: LOGIN_FAILURE });
        console.log(err);
      });
  };
  console.log(isLoading);
  return (
    <>
      <Box
        margin={"auto"}
        height={"100vh - 70px"}
        width={"100%"}
        className="login"
      >
        <Box className="main-container">
          <Text letterSpacing={"3px"} fontWeight={"600"}>
            Login Here!
          </Text>
          <Text letterSpacing={"5px"} lineHeight={"80px"} fontWeight={"bold"}>
            Welcome Back !
          </Text>
          <form onSubmit={handleLogin}>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input-box"
              onChange={handlerOnChange}
            />{" "}
            <br /> <br />
            <input
              name="password"
              type="password"
              placeholder="Enter your Password"
              className="input-box"
              onChange={handlerOnChange}
            />{" "}
            <br /> <br />
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box display={"flex"} justifyContent={"space-around"} gap={"5px"}>
                <input type="radio" name="" id="" />
                <Text fontWeight={"400"} cursor={"pointer"}>
                  Remember Me
                </Text>
              </Box>
              <Text fontWeight={"600"} cursor={"pointer"}>
                Forgot Password
              </Text>
            </Box>
            <br />
            {isLoading ? (
              "waiting"
            ) : (
              <input
                type="submit"
                value={"Sign In"}
                className="input-box btn"
                color="black"
              />
            )}
          </form>{" "}
          <br />
          <Text>
            Don't have an account?&nbsp;
            <span className="span-element">
              <a href="/signup">Sign Up</a>
            </span>
          </Text>
        </Box>
      </Box>
    </>
  );
};
