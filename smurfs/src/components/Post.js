import React from 'react';
import { connect } from 'react-redux';
import App from "./App"
import * as actionCreators from '../state/actionCreators';


export function Post(props) {
 
  return (
    <div>
    </div>
  );
}

const mapStateToProps = state => {
    return {
     test : state.data.test
    };
  };
  
  export default connect(
    mapStateToProps,
    actionCreators
  )(Post);
