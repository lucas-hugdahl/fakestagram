import {FETCH_USERS_SUCCESS,FETCH_USERS_HAS_ERRORED} from "./actions"
const initialState = {
  userList: {},
  isLoaded: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        userList: action.userList,
        error: false,
        isLoaded: true
      }
    case FETCH_USERS_HAS_ERRORED:
        return {
          ...state,
          error: action.error,
          isLoaded: true
        }
    default: return state;
  }
}