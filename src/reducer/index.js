import { combineReducers } from 'redux';
import users from './users';
import quotes from './quotes';
import images from './images';

export default combineReducers({
  quotes: quotes,
  images: images,
  users: users,
});