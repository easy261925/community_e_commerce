import {
  FETCH_USER,
  RECEIVE_USER
} from './types'
import userService from '../services/userService';

function fetchUser() {
  return {
    type: FETCH_USER
  }
}

function receiveUser(user) {
  return {
    type: RECEIVE_USER,
    user
  }
}

function loadUser(userId, token) {
  return async dispatch => {
    dispatch(fetchUser())
    const res = await userService.get(userId, token)
    console.log(res)
  }
}

export {
  loadUser
}
