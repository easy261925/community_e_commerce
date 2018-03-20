import {
  FETCH_USER,
  RECEIVE_USER
} from '../actions/types'

const initialState = {
  isFetching: false,
  user: {}
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        isFetching: true,
        user: {}
      }
    case RECEIVE_USER:
      return {
        ...state,
        isFetching: false,
        user: action.user
      }
    default:
      return state
  }
}
