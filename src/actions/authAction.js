import {
  FETCH_TOKEN,
  AUTH_ERROR,
  SET_CURRENT_USER
} from './types';
import AppStorage from '../AppStorage';
import {
  USER_ID,
  TOKEN
} from '../constants'
import authService from '../services/authService';
import { AsyncStorage } from 'react-native';
import storage from '../utils/storage';

function fetchToken() {
  return {
    type: FETCH_TOKEN
  }
}

function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

function authError(message) {
  return {
    type: AUTH_ERROR,
    errorMessage: message
  }
}

function signin(username, password) {
  return async dispatch => {
    dispatch(fetchToken())
    try {
      const res = await authService.post(username, password)
      const token = res.data.data.token
      const userId = res.data.data.userId

      return dispatch(setCurrentUser({
        userId,
        token
      }))
    } catch (err) {
      if (err.response === undefined) {
        const errorMessage = '服务器错误，请稍后再试'
        return dispatch(authError(errorMessage))
      }

      if (err.response.status === 404 && err.response.data.code === -1001) {
        const errorMessage = err.response.data.message
        return dispatch(authError(errorMessage))
      }
    }
  }
}

export {
  fetchToken,
  setCurrentUser,
  signin
}
