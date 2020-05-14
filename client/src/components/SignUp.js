import React, { useState, useEffect } from "react";
import { loginReq, register } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function SignUp(props) {
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
    props.register(values);
    props.history.push("/");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Username</label>
        <input name="username" type="text" onChange={onChange} />
        <label>Password</label>
        <input name="password" type="password" onChange={onChange} />
        <button>SignUp</button>
        <Link to="/">Back</Link>
      </form>
    </div>
  );
}

export default connect(state => state, { register })(SignUp);
