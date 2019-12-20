import { OADING, LOGIN_FETCH, LOGIN_FAILED, JOKES_FETCH } from "../actions";

const initiallstate = {
  user: {
    username: "",
    password: ""
  },
  jokes: [],
  isloading: false,
  error: null
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
    case JOKES_FETCH:
      console.log(actions);
      return {
        ...state,
        jokes: actions.payload
      };
    default:
      return state;
  }
};
