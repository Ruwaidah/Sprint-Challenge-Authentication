import React, { useState, useEffect } from "react";
import { loginReq } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Login(props) {
  console.log(props);
  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  const onChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  const onSubmit = event => {
    event.preventDefault();
    props.loginReq(values, props.history);
    props.history.push("/jokes");
  };
  return (
    <div>
      {sessionStorage.getItem("token") ? props.history.push("/jokes") : null}
      <form onSubmit={onSubmit}>
        <label>Username</label>
        <input name="username" type="text" onChange={onChange} />
        <label>Password</label>
        <input name="password" type="password" onChange={onChange} />
        <button>Login</button>
      </form>{" "}
      <Link to="/signup">SignUp</Link>
    </div>
  );
}

export default connect(state => state, { loginReq })(Login);
