import * as actionTypes from '../actions/actionTypes';

const initialState = {
  repos: [],
  error: false
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_REPOSITORIES:
      const reposInited = action.repos;
      return {
        ...state,
        repos: state.repos.concat(reposInited),
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
        error: true
      };

    default:
      return state;
  }
};

export default searchReducer;
