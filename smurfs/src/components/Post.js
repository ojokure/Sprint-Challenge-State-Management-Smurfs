import React, { useEffect } from "react";
import { connect } from "react-redux";
import App from "./App";
import * as actionCreators from "../state/actionCreators";

export function Post(props) {
  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <div>
      {props.apiData &&
        props.apiData.map(el => (
          <div>
            Hi my name is {el.name}, i am {el.age} years old and i am {el.height} tall 
          </div>
        ))}
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
)(Post);
