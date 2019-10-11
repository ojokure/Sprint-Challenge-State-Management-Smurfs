import React from "react";
import { connect } from "react-redux";
import Post from "./Post";
import * as actionCreators from "../state/actionCreators";

function App(props) {

  console.log(props)
  const handleChange = e => {
    // setState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const post = {
      name: props.newPost.name,
      age: props.newPost.age,
      height: props.newPost.age
    };
    props.createPost(post);
  };

  return (
    <div className="App">
      <h1> Please Sign In </h1>
      <form>
        <div>
          <label>Name </label>
          <br />
          <input type="text" name="name" />
        </div>
        <br />
        <div>
          <label>Age </label>
          <br />
          <input type="text" name="age" />
        </div>
        <br />
        <div>
          <label>Height </label>
          <br />
          <input type="text" name="height" />
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
