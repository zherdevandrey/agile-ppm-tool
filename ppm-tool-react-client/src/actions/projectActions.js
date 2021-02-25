import axios from "axios";
import { GET_ERRORS } from "./types";
import { GET_PROJECTS } from "./types";

export const createProject = (project, history) => async dispatch => {
  try {
    console.log("createProject action");
    const res = await axios.post("http://localhost:8080/api/project", project);
    console.log("backend response " + res.project);
    history.push("/dashboard");
  } catch (err) {
    console.log("call back failed");
    console.log("error " + err);
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getProjects = () => async dispatch => {

  console.log("getProjectsll action");
  const res = await axios.get("http://localhost:8080/api/project/all");
  console.log("backend response " + res.data);
  dispatch({
    type: GET_PROJECTS,
    payload: res.data
  })
  
};