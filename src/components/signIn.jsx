import { Box, Text } from "@chakra-ui/react";

import "./login.css";

export const Signup = () => {
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

          <form>
            <input
              type="text"
              placeholder="Username"
              autoFocus
              className="input-box"
            />{" "}
            <br />
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="input-box"
            />{" "}
            <br /> <br />
            <input
              type="password"
              placeholder="Enter your Password"
              className="input-box"
            />{" "}
            <br /> <br />
            <input
              type="submit"
              value={"Sign Up"}
              className="input-box btn"
              color="black"
            />
          </form>
        </Box>
      </Box>
    </>
  );
};
