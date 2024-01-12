import React from "react";
import "../Navbar.css";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent={"space-around"}
      
        alignItems={"center"}
        padding={"5px"}
        background={"#459c98"}
      
      >
        <Box width={"20%"}  className="appname" padding={"3px 0px"}>
          {" "}
          NotesAPP
        </Box>

        <Box
          display="flex"
          justifyContent={"space-around"}
         
          width={"70%"}
          alignItems={"center"}
         
        >
            <NavLink
  to="/notes"
  style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "pink" : "white",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
>
  Notes
</NavLink>
<NavLink
  to="/login"
  style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "pink" : "white",
      viewTransitionName: isTransitioning ? "slide" : "",
      
    };
  }}
  
>
     <Text padding={"5px 20px"} colorScheme="teal" fontFamily={"cursive"} background={"#4681f4"}>Login</Text>
 
</NavLink>
         
         
        </Box>
      </Box>
    </>
  );
};
