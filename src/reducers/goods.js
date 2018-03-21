import {
  FETCH_GOODS,
  RECEIVE_GOODS
} from '../actions/types'

const initialState = {
  goods: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_GOODS:
      return {
        ...state,
      }
    case RECEIVE_GOODS:
      return {
        ...state,
        goods: action.payload
      }
    default:
      return state
  }
}
