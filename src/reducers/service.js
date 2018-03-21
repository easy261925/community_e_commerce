import {
  SERVICE,
  SERVICE_SUCCESS,
  SERVICE_FAILURE
} from '../actions/types';

const initialState = {
  inService: false,
  errorMessage: ""
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
    default:
      return state
  }
}

