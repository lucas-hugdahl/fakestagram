import CONSTANTS from '../../CONSTANTS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_HAS_ERRORED = 'FETCH_USERS_HAS_ERRORED';
const uniqid = require('uniqid');

export function getUsers(count = 10) {
  let userDictionary = {};
  return dispatch => {
    fetch(`${CONSTANTS.API_ENDPOINT}/random/users?count=${count}`)
      .then(res => res.json())
      .then(users => {
        users.forEach(user => {
          userDictionary[uniqid()] = user;
        });
        dispatch(fetchUsersSuccess(userDictionary))
      })
      .catch((err) => {
        dispatch(fetchUsersHasErrored(err))
      });
  }
}

export function fetchUsersSuccess(userList) {
  return {
      type: 'FETCH_USERS_SUCCESS',
      userList
  };
}

export function fetchUsersHasErrored(error) {
  return {
      type: 'FETCH_USERS_HAS_ERRORED',
      error: error
  };
}

