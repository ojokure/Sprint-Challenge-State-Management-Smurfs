import * as types from "./actions";

const intialState = {
  apiData: [],
  newPost: {},
  test: "its working"
};

export function dataReducer(state = intialState, action) {
  switch (action.type) {
    case types.API_DATA:
      return {
        ...state,
        apiData: action.payload
      };
    case types.NEW_POST:
      return {
        ...state,
        apiData: state.apiData.concat(action.payload)
      };
    default:
      return state;
  }
}
