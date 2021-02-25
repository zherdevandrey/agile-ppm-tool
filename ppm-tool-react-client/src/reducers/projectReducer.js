 
import { GET_PROJECTS } from "../actions/types";

const initialState = {
    projects: [],
    pproject: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
        console.log("project reducer")
        console.log("action type " + action.type)
        console.log("action payload " + action.payload.data)
      return {
          ...state,
          projects:action.payload
      }

    default:
      return state;
  }
}