import { Box, Text } from "@chakra-ui/react";

import "../css/login.css";

export const Login = () => {
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

          <form>
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
            <input
              type="submit"
              value={"Sign In"}
              className="input-box btn"
              color="black"
            />
          </form> <br />
          <Text>Don't have an account?&nbsp;<span className="span-element"><a href="/signup">Sign Up</a></span>
             </Text>
        </Box>
        
      </Box>
    </>
  );
};
