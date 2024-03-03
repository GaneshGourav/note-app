import React from "react";
import "../css/Navbar.css";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent={"space-around"}
        width={"100%"}
        height={"70px"}
        alignItems={"center"}
        background={"#f8f7f4"}
      >
        <Box className="appname" > Notes</Box>

        <Box
          display="flex"
          justifyContent={"space-around"}
          width={"85%"}
          alignItems={"center"}
        >
          <NavLink
            to="/notes"
            style={({ isActive, isTransitioning }) => {
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
            <Text
              padding={"5px 20px"}
             color={"white"}
              fontFamily={"cursive"}
              background={"#e05fbe"}
              borderRadius={"8px"}
            >
              Login / Signup
            </Text>
          </NavLink>
        </Box>
      </Box>
    </>
  );
};

// import { Box, Flex, Text } from "@chakra-ui/react";
// import { NavLink } from "react-router-dom";

// export const Navbar = () => {
//   return (
//     <>
//       <Box style={{ height: "100vh", width: "230px" }}>
//         <Text
//           color={"#013CC6"}
//           fontSize={"24px"}
//           fontWeight={"500"}
//           fontFamily={"popins"}
//           width={"203px"}
//           height={"36px"}
//           marginTop={"63px"}
//           marginLeft={"18px"}
//           marginRight={"9px"}
//         >
//           Notes App
//         </Text>
//         <Box
//           marginTop={"57px"}
//           height={"75vh"}
//           marginLeft={"41px"}
//           marginRight={"58px"}
//         >
//           <Box
//             display={"flex"}
//             flexDirection={"column"}
//             gap={"41px"}
//             alignItems={"flex-start"}
//           >
//             <Flex gap={"22px"}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
//                   fill="#0B63F8"
//                 />
//                 <path
//                   d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z"
//                   fill="#0B63F8"
//                 />
//                 <path
//                   d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
//                   fill="#0B63F8"
//                 />
//                 <path
//                   d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
//                   fill="#0B63F8"
//                 />
//               </svg>
//               <NavLink
//                 to={"/login"}
//                 // color={"#0B63F8"}
//                 fontSize={"16px"}
//                 fontWeight={"400"}
//                 letterSpacing={"0.32px"}
//                 style={({ isActive, isPending, isTransitioning }) => {
//                   return {
//                     color: isActive ? "#0B63F8" : "",
//                     viewTransitionName: isTransitioning ? "slide" : "",
//                   };
//                 }}
//               >
//                 Login
//               </NavLink>
//             </Flex>
//             <Flex gap={"22px"}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M15.73 3.87519L15.73 3.87519V3.88V4.82C15.73 5.58386 15.1139 6.2 14.35 6.2H9.64001C8.87615 6.2 8.26001 5.58386 8.26001 4.82V3.88C8.26001 3.11959 8.88269 2.5 9.65001 2.5H14.35C15.1183 2.5 15.7373 3.11947 15.73 3.87519Z"
//                   stroke="black"
//                 />
//                 <path
//                   d="M14.35 8.21001C16.2161 8.21001 17.74 6.68615 17.74 4.82001C17.74 4.65347 17.9251 4.51922 18.1077 4.61278C19.3589 5.27946 20.21 6.6023 20.21 8.12001V17.53C20.21 19.7139 18.4238 21.5 16.24 21.5H7.75998C5.57612 21.5 3.78998 19.7139 3.78998 17.53V8.12001C3.78998 6.60229 4.64111 5.27945 5.8923 4.61277C6.07484 4.51923 6.25998 4.65348 6.25998 4.82001C6.25998 6.68615 7.78383 8.21001 9.64998 8.21001H14.35ZM11.6935 17.0836L15.6935 13.0836C16.1788 12.5983 16.1788 11.8017 15.6935 11.3165C15.2083 10.8312 14.4117 10.8312 13.9264 11.3165L10.81 14.4329L10.1935 13.8165C9.70827 13.3312 8.91169 13.3312 8.42642 13.8165C7.94116 14.3017 7.94116 15.0983 8.42642 15.5836L9.92642 17.0836C10.1751 17.3323 10.4945 17.45 10.81 17.45C11.1254 17.45 11.4448 17.3323 11.6935 17.0836Z"
//                   stroke="black"
//                 />
//               </svg>

//               <NavLink
//                 to={"/analytics"}
//                 fontSize={"16px"}
//                 fontWeight={"400"}
//                 letterSpacing={"0.32px"}
//                 style={({ isActive, isPending, isTransitioning }) => {
//                   return {
//                     color: isActive ? "#0B63F8" : "",
//                     viewTransitionName: isTransitioning ? "slide" : "",
//                   };
//                 }}
//               >
//                 Analytics
//               </NavLink>
//             </Flex>
//             <Flex gap={"22px"}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M20.1 9.22C18.29 9.22 17.55 7.94 18.45 6.37C18.97 5.46 18.66 4.3 17.75 3.78L16.02 2.79C15.23 2.32 14.21 2.6 13.74 3.39L13.63 3.58C12.73 5.15 11.25 5.15 10.34 3.58L10.23 3.39C9.78 2.6 8.76 2.32 7.97 2.79L6.24 3.78C5.33 4.3 5.02 5.47 5.54 6.38C6.45 7.94 5.71 9.22 3.9 9.22C2.86 9.22 2 10.07 2 11.12V12.88C2 13.92 2.85 14.78 3.9 14.78C5.71 14.78 6.45 16.06 5.54 17.63C5.02 18.54 5.33 19.7 6.24 20.22L7.97 21.21C8.76 21.68 9.78 21.4 10.25 20.61L10.36 20.42C11.26 18.85 12.74 18.85 13.65 20.42L13.76 20.61C14.23 21.4 15.25 21.68 16.04 21.21L17.77 20.22C18.68 19.7 18.99 18.53 18.47 17.63C17.56 16.06 18.3 14.78 20.11 14.78C21.15 14.78 22.01 13.93 22.01 12.88V11.12C22 10.08 21.15 9.22 20.1 9.22ZM12 15.25C10.21 15.25 8.75 13.79 8.75 12C8.75 10.21 10.21 8.75 12 8.75C13.79 8.75 15.25 10.21 15.25 12C15.25 13.79 13.79 15.25 12 15.25Z"
//                   stroke="black"
//                 />
//               </svg>
//               <NavLink
//                 to={"/logout"}
//                 fontSize={"16px"}
//                 fontWeight={"400"}
//                 letterSpacing={"0.32px"}
//                 style={({ isActive, isPending, isTransitioning }) => {
//                   return {
//                     color: isActive ? "#0B63F8" : "",
//                     viewTransitionName: isTransitioning ? "slide" : "",
//                   };
//                 }}
//               >
//                 Logout
//               </NavLink>
//             </Flex>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// };
