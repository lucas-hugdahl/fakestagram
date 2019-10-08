import {FETCH_IMAGES_SUCCESS, FETCH_IMAGES_HAS_ERRORED} from "./actions"

const initialState = {
  imageList: {},
  isLoaded: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        imageList: action.imageList,
        error: false,
        isLoaded: true
      }
    case FETCH_IMAGES_HAS_ERRORED:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    default: return state;
  }
}