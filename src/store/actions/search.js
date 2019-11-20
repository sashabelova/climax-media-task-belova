import * as actionTypes from './actionTypes';
import axios from 'axios';

const url = 'https://api.github.com/users';

export const clearRepositories = () => {
  return {
    type: actionTypes.CLEAR_REPOSITORIES
  };
};

export const fetchStart = () => {
  return {
    type: actionTypes.FETCH_START
  };
};

export const setRepositories = repos => {
  return {
    type: actionTypes.GET_REPOSITORIES,
    repos: repos
  };
};

export const getPaginationLinks = links => {
  return {
    type: actionTypes.GET_PAGINATION_LINKS,
    links: links
  };
};

export const getRepositoriesFailed = () => {
  return {
    type: actionTypes.GET_REPOSITORIES_FAILED
  };
};

export const getRepositories = user => {
  return dispatch => {
    dispatch(clearRepositories());
    dispatch(fetchStart());
    axios
      .get(`${url}/${user}/repos?page=1&per_page=10`)
      .then(response => {
        let links_pages = {};
        response.headers.link.split(', ').forEach(el => {
          let parts = el.split('; ');
          links_pages[parts[1]] = parts[0];
        });
        dispatch(getPaginationLinks(links_pages));
        dispatch(setRepositories(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(getRepositoriesFailed());
      });
  };
};
