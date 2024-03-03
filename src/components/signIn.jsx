import { Box, Text } from "@chakra-ui/react";

import "../css/login.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { UserSignup } from "../Redux/Authentication/action";
import {
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from "../Redux/Authentication/actionTypes";
import { useToast } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

export const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const toast = useToast();
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const isLoading = useSelector((store) => store.authReducer.isLoading);
  console.log(isLoading);

  const handleSIgnUp = (e) => {
    e.preventDefault();
    dispatch(UserSignup(user))
      .then((res) => {
        dispatch({ type: SIGNUP_SUCCESS });
        setUser({ username: "", email: "", password: "" });

        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
        dispatch({ type: SIGNUP_FAILURE });

        toast({
          title: "Try to Login",
          description: "Your Account already created",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });

    console.log("Normal", user);
  };

  return (
    <>
      <Box
        margin={"auto"}
        height={"100vh - 70px"}
        width={"100%"}
        className="login"
      >
        <Box className="main-container">
          <Text letterSpacing={"3px"} lineHeight={"40px"} fontWeight={"600"}>
            Sign up Here!
          </Text>
          <form onSubmit={handleSIgnUp}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoFocus
              className="input-box"
              value={user.username}
              onChange={changeHandler}
            />{" "}
            <br />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input-box"
              value={user.email}
              onChange={changeHandler}
            />{" "}
            <br /> <br />
            <input
              type="password"
              name="password"
              placeholder="Choose your Password"
              className="input-box"
              value={user.password}
              onChange={changeHandler}
            />{" "}
            <br /> <br />
            {isLoading ? (
              <Spinner color="red.500" />
            ) : (
              <input
                type="submit"
                value={"Sign Up"}
                className="input-box btn"
                color="black"
              />
            )}
          </form>{" "}
          <br />
          <Text>
            Already an account login?&nbsp;
            <span className="span-element">
              <a href="/login">SignIn</a>
            </span>
          </Text>
        </Box>
      </Box>
    </>
  );
};
