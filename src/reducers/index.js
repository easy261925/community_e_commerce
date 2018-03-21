import { combineReducers } from 'redux';
import auth from './auth';
import userInfo from './user';
import service from './service';
import goods from './goods';

export default combineReducers({
  auth,
  userInfo,
  service,
  goods
})
