import { OADING, LOGIN_FETCH, LOGIN_FAILED } from "../actions";

const initiallstate = {
  user: {
    username: "",
    password: ""
  }
};

export const rootReducer = (state = initiallstate, actions) => {
  switch (actions.type) {
    case LOGIN_FETCH:
      sessionStorage.setItem("token", actions.payload.token.payload);

      return {
        ...state,
        user: actions.payload.user,
        token: sessionStorage.getItem("token"),
        isloading: false,
        error: null
      };
    default:
      return state;
  }
};
