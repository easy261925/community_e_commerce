import {
  FETCH_GOODS,
  RECEIVE_GOODS,
  SEARCH_GOODS,
  RECEIVE_SEARCH,
  GET_GOOD,
  RECEIVE_ONE_GOOD
} from '../actions/types'

const initialState = {
  searchs: [],
  goods: [],
  good: {}
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_GOODS:
      return {
        ...state,
        goods: []
      }
    case RECEIVE_GOODS:
      return {
        ...state,
        goods: action.payload
      }
    case SEARCH_GOODS:
      return {
        ...state,
        searchs: []
      }
    case RECEIVE_SEARCH:
      return {
        ...state,
        searchs: action.payload
      }
    case GET_GOOD:
      return {
        ...state,
        good: {}
      }
    case RECEIVE_ONE_GOOD:
      return {
        ...state,
        good: action.payload
      }
    default:
      return state
  }
}
