import {
  FETCH_GOODS,
  RECEIVE_GOODS,
  SEARCH_GOODS,
  RECEIVE_SEARCH
} from '../actions/types'

const initialState = {
  searchs: [],
  goods: []
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
    default:
      return state
  }
}
