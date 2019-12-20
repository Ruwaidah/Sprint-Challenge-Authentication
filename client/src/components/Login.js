import React, { useState, useEffect } from "react";
import { loginReq } from "../actions";
import { connect } from "react-redux";

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
    props.loginReq(values);
    props.history.push("/users");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Username</label>
        <input name="username" type="text" onChange={onChange} />
        <label>Password</label>
        <input name="password" type="password" onChange={onChange} />
        <button>Login</button>
      </form>
    </div>
  );
}

export default connect(state => state, { loginReq })(Login);
