import { combineReducers } from 'redux';
import auth from './auth';
import userInfo from './user';
import service from './service';

export default combineReducers({
  auth,
  userInfo,
  service
})
