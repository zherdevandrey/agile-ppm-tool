 
import { GET_ERRORS } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      console.log("error reducer")
      console.log("action type " + action.type)
      console.log("action payload " + action.payload)
      return action.payload;

    default:
      return state;
  }
}