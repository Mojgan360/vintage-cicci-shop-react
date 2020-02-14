// register user
import axios from "axios";
import url from "../utils/URL";
import React from "react";

const registerUser = async ({ username, email, password }) => {
  const response = await axios
    .post(`${url}/auth/local/register`, { username, email, password })
    .catch(error => console.log(error));
  return response;
};

export default registerUser;

// async const registerUser = ({ username, email, password }) => {
//   const response = axios
//     .post("http://localhost:1337/auth/local/register", {
//       username,
//       email,
//       password
//     })
//     .then(response => {
//       // Handle success.
//       console.log("Well done!");
//       //   console.log("User profile", response.data.user);
//       //   console.log("User token", response.data.jwt);
//     })
//     .catch(error => {
//       // Handle error.
//       console.log("An error occurred:", error);
//     });
//   return response;
// };
// export default registerUser;
