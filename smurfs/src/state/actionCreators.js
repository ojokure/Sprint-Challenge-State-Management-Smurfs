import * as types from "./actions";
import axios from "axios";

export const fetchData = () => dispatch => {
  dispatch({ type: types.API_DATA });
  axios.get("http://localhost:3333/smurfs").then(res => {
    dispatch({ type: types.API_DATA, payload: res.data });
  });
};

export const postData = (post) => dispatch => {
  dispatch({ type: types.NEW_POST });
  axios.post("http://localhost:3333/smurfs").then(res => {
    dispatch({ type: types.API_DATA, payload: res.data });
  });
};
