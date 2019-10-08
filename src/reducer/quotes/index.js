import {FETCH_QUOTES_SUCCESS, FETCH_QUOTES_HAS_ERRORED} from "./actions"
const initialState = {
  quoteList: {},
  isLoaded: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTES_SUCCESS:
      return {
        ...state,
        quoteList: action.payload,
        error: false,
        isLoaded: true
      }
    case FETCH_QUOTES_HAS_ERRORED:
        return {
          ...state,
          error: action.payload,
          isLoaded: true
        }
    default: return state;
  }
}