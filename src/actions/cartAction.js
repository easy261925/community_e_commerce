import {
  GET_CART_GOOD_DETAIL,
  RECEIVE_ONE_CART,
  FETCH_CART_FAILURE
} from './types'
import {
  authError,
  service,
  serviceSuccess,
  serviceFailure,
  posting,
  postSuccess,
  postFailure
} from './index';
import cartService from '../services/cartService';

function getCartGoodDetail() {
  return {
    type: GET_CART_GOOD_DETAIL
  }
}

function receiveOneCart(cartDetail) {
  return {
    type: RECEIVE_ONE_CART,
    payload: cartDetail
  }
}

function fetchCartFailure(message) {
  return {
    type: FETCH_CART_FAILURE,
    payload: message
  }
}

/**
 * 根据goodId 获取用户购物车中一件商品的详细信息
 *
 * @param {any} userId
 * @param {any} token
 * @param {any} goodId
 * @returns
 */
function getCartByGoodId(userId, token, goodId) {
  return async dispatch => {
    dispatch(getCartGoodDetail())
    try {
      const res = await cartService.getDetailByGoodId(userId, token, goodId)
      return dispatch(receiveOneCart(res.data.data))
    } catch (err) {
      if (err.response === undefined) {
        const errorMessage = "服务器睡着了，请稍后再试"
        return dispatch(fetchCartFailure(errorMessage))
      }
      if (err.response.status === 404) {
        const errorMessage = err.response.data.message
        return dispatch(fetchCartFailure(errorMessage))
      }
    }
  }
}

function addGoodToCart(userId, token, goodId, count) {
  return async dispatch => {
    dispatch(posting())
    try {
      const res = await cartService.post(userId, token, goodId, count)
      return dispatch(postSuccess())
    } catch (err) {
      if (err.response === undefined) {
        const errorMessage = '服务器错误，请稍后再试'
        return dispatch(postFailure(errorMessage))
      }

      if (err.response.status === 400) {
        const errorMessage = err.response.data.message
        return dispatch(postFailure(errorMessage))
      }

      // un authorized
      if (err.response.status === 401) {
        const errorMessage = err.response.data.message
        dispatch(postFailure(errorMessage))
        return dispatch(authError(errorMessage))
      }
    }
  }
}

export {
  getCartByGoodId,
  addGoodToCart
}
