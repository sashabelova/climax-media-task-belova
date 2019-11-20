import * as actionTypes from './actionTypes';
import axios from 'axios';

const url = 'https://api.github.com/users';

export const clearRepositories = () => {
  return {
    type: actionTypes.CLEAR_REPOSITORIES
  };
};

export const setRepositories = repos => {
  return {
    type: actionTypes.GET_REPOSITORIES,
    repos: repos
  };
};

export const getRepositoriesFailed = () => {
  return {
    type: actionTypes.GET_REPOSITORIES_FAILED
  };
};

export const getRepositories = user => {
  //TODO pagination
  return dispatch => {
    dispatch(clearRepositories());
    axios
      .get(`${url}/${user}/repos`)
      .then(response => {
        dispatch(setRepositories(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(getRepositoriesFailed());
      });
  };
};
