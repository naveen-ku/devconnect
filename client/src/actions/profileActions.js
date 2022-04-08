import axios from "axios";
import {
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  SET_CURRENT_USER,
} from "./types";

// Get current profile

export const getCurrentProfile = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get("/v1/api/profile")
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PROFILE,
        payload: {},
      })
    );
};

// Get profile by handle

export const getProfileByHandle = (handle) => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get(`/v1/api/profile/handle/${handle}`)
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PROFILE,
        payload: null,
      })
    );
};

//Create Profile
export const createProfile = (profileData, history) => (dispatch) => {
  axios
    .post("/v1/api/profile", profileData)
    .then((res) => history.push("/dashboard"))
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Add Experience
export const addExperience = (expData, history) => (dispatch) => {
  axios
    .post("/v1/api/profile/experience", expData)
    .then((res) => history.push("/dashboard"))
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

//Add Education
export const addEducation = (eduData, history) => (dispatch) => {
  axios
    .post("/v1/api/profile/education", eduData)
    .then((res) => history.push("/dashboard"))
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING,
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE,
  };
};

// Delete Experience
export const deleteExperience = (id) => (dispatch) => {
  axios
    .delete(`/v1/api/profile/experience/${id}`)
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Delete Education
export const deleteEducation = (id) => (dispatch) => {
  axios
    .delete(`/v1/api/profile/education/${id}`)
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

//Delete Account and Profile
export const deleteAccount = () => (dispatch) => {
  if (window.confirm("Are you sure? This action cannot be undone!")) {
    axios
      .delete("/v1/api/profile")
      .then((res) =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {},
        })
      )
      .catch((err) =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        })
      );
  }
};

//Get all profiles
export const getProfiles = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get("/v1/api/profile/all")
    .then((res) =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PROFILES,
        payload: null,
      })
    );
};
