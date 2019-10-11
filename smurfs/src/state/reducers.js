import * as types from "./actions";

const intialState = {
  apiData: [],
  newPost: {},
  test: "its working"
};

export function dataReducer(state = intialState, action) {
  switch (action.type) {
    case type:
      types.API_DATA;
      return {
        ...state,
        apiData: action.payload
      };
    case type:
      types.NEW_POST;
      return {
        ...state,
        newPost: action.payload
      };
    default:
      return state;
  }
}
