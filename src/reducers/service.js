import {
  SERVICE,
  SERVICE_SUCCESS,
  SERVICE_FAILURE,
  POSTING,
  POST_SUCCESS,
  POST_FAILURE
} from '../actions/types';

const initialState = {
  inService: false,
  errorMessage: "",
  postErrorMessage: "",
  posting: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SERVICE:
      return {
        ...state,
        errorMessage: "",
        inService: true
      }
    case SERVICE_SUCCESS:
      return {
        ...state,
        errorMessage: "",
        inService: false
      }
    case SERVICE_FAILURE:
      return {
        ...state,
        inService: false,
        errorMessage: action.payload
      }
    case POSTING:
      return {
        ...state,
        posting: true,
        postErrorMessage: ""
      }
    case POST_FAILURE:
      return {
        ...state,
        posting: false,
        postErrorMessage: action.payload
      }
    case POST_SUCCESS:
      return {
        ...state,
        posting: false,
        postErrorMessage: ""
      }
    default:
      return state
  }
}

