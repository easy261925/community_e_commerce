import {
  FETCH_GOODS,
  RECEIVE_GOODS
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

function receiveGoods(goods) {
  return {
    type: RECEIVE_GOODS,
    payload: goods
  }
}

function loadGoods(page, rows, good) {
  return async dispatch => {
    dispatch(service())
    const res = await goodService.search(page, rows, good)
    return dispatch(receiveGoods(res.data.data))
  }
}

export {
  fetchGoods,
  receiveGoods,
  loadGoods
}
