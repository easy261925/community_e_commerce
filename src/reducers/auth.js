import {
  FETCH_TOKEN,
  SET_CURRENT_USER,
  AUTH_ERROR
} from '../actions/types';

const initialState = {
  isFetching: false,
  user: {},
  isAuthorized: false,
  errorMessage: ""
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_TOKEN:
      return {
        ...state,
        isFetching: true,
        errorMessage: "",
        isAuthorized: false
      }
    case SET_CURRENT_USER:
      return {
        ...state,
        isFetching: false,
        user: action.user,
        isAuthorized: true,
        errorMessage: ""
      }
    case AUTH_ERROR:
      return {
        ...state,
        isFetching: false,
        user: {},
        isAuthorized: false,
        errorMessage: action.errorMessage
      }
    default:
      return state
  }
}
