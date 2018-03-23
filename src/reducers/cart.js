import {
  GET_CART_GOOD_DETAIL,
  RECEIVE_ONE_CART,
  FETCH_CART_DETAIL_FAILURE,
  FETCH_CART,
  RECEIVE_CART,
  FETCH_CART_FAILURE
} from '../actions/types';

const initialState = {
  cartDetail: {},
  cart: {},
  isFetchingCart: false,
  isFetchingCartDetail: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_CART_GOOD_DETAIL:
      return {
        ...state,
        cartDetail: {},
        isFetchingCartDetail: true
      }
    case RECEIVE_ONE_CART:
      return {
        ...state,
        cartDetail: action.payload,
        isFetchingCartDetail: false
      }
    case FETCH_CART_DETAIL_FAILURE:
      return {
        ...state,
        isFetchingCartDetail: false
      }
    case FETCH_CART:
      return {
        ...state,
        isFetchingCart: true,
        cart: {}
      }
    case RECEIVE_CART:
      return {
        ...state,
        isFetchingCart: false,
        cart: action.payload
      }
    case FETCH_CART_FAILURE:
      return {
        ...state,
        isFetchingCart: false
      }
    default:
      return state
  }
}
