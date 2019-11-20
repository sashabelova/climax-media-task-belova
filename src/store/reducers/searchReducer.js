import * as actionTypes from '../actions/actionTypes';

const initialState = {
  repos: [],
  loading: false,
  error: false
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_REPOSITORIES:
      const reposInited = action.repos;
      return {
        ...state,
        repos: state.repos.concat(reposInited),
        loading: false,
        error: false
      };
    case actionTypes.CLEAR_REPOSITORIES:
      return {
        ...state,
        repos: []
      };

    case actionTypes.GET_REPOSITORIES_FAILED:
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
};

export default searchReducer;
