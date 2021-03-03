 
import { GET_PROJECTS } from "../actions/types";
import { GET_PROJECT } from "../actions/types";

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
    case GET_PROJECT:
      console.log("project reducer")
      console.log("action type " + action.type)
      console.log("action payload " + action.payload.data)
      return {
        ...state,
        project: action.payload
      };
    default:
      return state;
  }
}