import {
  GET_CART_GOOD_DETAIL,
  RECEIVE_ONE_CART,
  FETCH_CART_FAILURE
} from '../actions/types';

const initialState = {
  cartDetail: {},
  cart: {},
  isFetching: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_CART_GOOD_DETAIL:
      return {
        ...state,
        cartDetail: {},
        isFetching: true
      }
    case RECEIVE_ONE_CART:
      return {
        ...state,
        cartDetail: action.payload,
        isFetching: false
      }
    case FETCH_CART_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}
