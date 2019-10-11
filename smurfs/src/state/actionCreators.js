import * as types from "./actions";
import axios from "axios";

export const fetchData = () => dispatch => {
  dispatch({ type: types.API_DATA });
  dispatch({ type: types.NEW_POST });
  axios
    .post()
    .then(res => {
      dispatch({ type: types.API_DATA, 
        payload: res.data 
    });
    })
};
