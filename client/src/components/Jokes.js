import React, { useEffect } from "react";
import { jokes } from "../actions";
import { connect } from "react-redux";

function Jokes(props) {
  useEffect(() => {
    props.jokes();
  }, []);
  console.log(props.alljokes);
  return (
    <div>
      <h1>hii</h1>
      <button
        onClick={() => {
          sessionStorage.clear();
          props.history.push("/");
        }}
      >
        LogOut
      </button>

      {props.alljokes.map(joke => (
        <h4>{joke.joke}</h4>
      ))}
    </div>
  );
}

const mapStatetoProps = state => {
  console.log(state);
  return {
    alljokes: state.jokes
  };
};

export default connect(mapStatetoProps, { jokes })(Jokes);
