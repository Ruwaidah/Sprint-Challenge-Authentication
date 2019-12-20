import axios from "axios";

export const axiosWithAuth = () => {
  console.log(sessionStorage.getItem("token"));
  return axios.create({
    headers: {
      authorization: sessionStorage.getItem("token")
    }
  });
};
