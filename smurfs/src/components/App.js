import React, { useState } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import * as actionCreators from "../state/actionCreators";

function App(props) {
  const initialFormState = {
    name: "",
    age: "",
    height: ""
  };

  const [state, setState] = useState(initialFormState);
  const handleChange = e => {
    setState({...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const post = {
      name: state.name,
      age: state.age,
      height: state.height
    };
    props.postData(post);
    // console.log(post)
  };
  return (
    <div className="App">
      <h1> Please Sign In </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name </label>
          <br />
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={state.name}
          />
        </div>
        <br />
        <div>
          <label>Age </label>
          <br />
          <input
            type="text"
            name="age"
            onChange={handleChange}
            value={state.age}
          />
        </div>
        <br />
        <div>
          <label>Height </label>
          <br />
          <input
            type="text"
            name="height"
            onChange={handleChange}
            value={state.height}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <Post />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    apiData: state.data.apiData,
    newPost: state.data.newPost,
    test: state.data.test
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(App);
