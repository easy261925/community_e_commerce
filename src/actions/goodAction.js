import {
  FETCH_GOODS,
  RECEIVE_GOODS,
  SEARCH_GOODS,
  RECEIVE_SEARCH
} from './types';
import {
  service,
  serviceFailure,
  serviceSuccess
} from './index';
import goodService from '../services/goodService';

function fetchGoods() {
  return {
    type: FETCH_GOODS
  }
}

function searchGoods() {
  return {
    type: SEARCH_GOODS
  }
}

function receiveSearch(goods) {
  return {
    type: RECEIVE_SEARCH,
    payload: goods
  }
}

function receiveGoods(goods) {
  return {
    type: RECEIVE_GOODS,
    payload: goods
  }
}

function loadGoods(page, rows, orderBy, good) {
  return async dispatch => {
    dispatch(service())
    dispatch(fetchGoods())
    try {
      const res = await goodService.all(page, rows, orderBy, good)
      dispatch(serviceSuccess())
      const goods = res.data.data
      return dispatch(receiveGoods(goods))
    } catch (err) {
      if (err.response === undefined) {
        const errorMessage = "服务器睡着了，请稍后再试"
        return dispatch(serviceFailure(errorMessage))
      }
    }
  }
}

function search(page, rows, good) {
  return async dispatch => {
    dispatch(service())
    dispatch(searchGoods())
    try {
      const res = await goodService.search(page, rows, good)
      dispatch(serviceSuccess())
      const goods = res.data.data
      return dispatch(receiveSearch(goods))
    } catch (err) {
      if (err.response === undefined) {
        const errorMessage = "服务器睡着了，请稍后再试"
        return dispatch(serviceFailure(errorMessage))
      }
    }
  }
}

export {
  fetchGoods,
  receiveGoods,
  search,
  loadGoods
}
