import axios from "axios";
import { axiosWithAuth } from "../components/axiosWithAuth";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_FETCH = "LOGIN_FETCH";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const JOKES_FETCH = "JOKES_FETCH";

export const loginReq = (values, history) => dispatch => {
  console.log(history);
  axios
    .post("http://localhost:3300/api/auth/login", values)
    .then(res => {
      console.log(res);

      sessionStorage.setItem("token", res.data.token);
      history.push("/jokes");
    })
    .catch(error => {
      console.log(error);
    });
};

export const register = values => dispatch => {
  console.log(values);
  axios
    .post("http://localhost:3300/api/auth/register", values)
    .then(res => {})
    .catch(error => {
      console.log(error);
    });
};

export const jokes = () => dispatch => {
  const authAxios = axiosWithAuth();

  authAxios
    .get("http://localhost:3300/api/jokes")
    .then(res => {
      console.log(res);
      dispatch({
        type: JOKES_FETCH,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};
