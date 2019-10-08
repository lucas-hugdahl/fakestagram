import CONSTANTS from '../../CONSTANTS';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_HAS_ERRORED = 'FETCH_IMAGES_HAS_ERRORED';
const uniqid = require('uniqid');

export function getImages(count = 70) {
  return dispatch => {
    let imageDictionary = {};
    fetch(`${CONSTANTS.API_ENDPOINT}/random/images?count=${count}`)
      .then(res => res.json())
      .then(images => {
        images.forEach(image => {
          imageDictionary[uniqid()] = image;
        });
        dispatch(fetchImagesSuccess(imageDictionary));
      })
      .catch(err => {
        dispatch(fetchImagesHasErrored(err));
      });

  }
}

export function fetchImagesSuccess(imageList) {
  return {
      type: 'FETCH_IMAGES_SUCCESS',
      imageList
  };
}

export function fetchImagesHasErrored(error) {
  return {
      type: 'FETCH_IMAGES_HAS_ERRORED',
      error: error
  };
}