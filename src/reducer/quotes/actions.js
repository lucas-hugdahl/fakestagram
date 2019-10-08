import CONSTANTS from '../../CONSTANTS';
export const FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS';
export const FETCH_QUOTES_HAS_ERRORED = 'FETCH_QUOTES_HAS_ERRORED';
const uniqid = require('uniqid');



export function getQuotes(count = 10) {
  return dispatch => {
    fetch(`${CONSTANTS.API_ENDPOINT}/random/quotes?count=${count}`)
    .then(res => res.json())
    .then(quotes => {
      let quoteDictionary = {};
      quotes.forEach(quote => {
        quoteDictionary[uniqid()] = quote;
      });
      dispatch(fetchQuotesSuccess(quoteDictionary))
    })
    .catch((err) => {
      dispatch(fetchQuotesHasErrored(err))
    });
  }
}

export function fetchQuotesSuccess(quotes) {
  return {
      type: 'FETCH_QUOTES_SUCCESS',
      payload: quotes
  };
}

export function fetchQuotesHasErrored(error) {
  return {
      type: 'FETCH_QUOTES_HAS_ERRORED',
      payload: error
  };
}



