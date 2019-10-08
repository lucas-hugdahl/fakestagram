import axios from 'axios';

export default {
  generateUsers(count = 1) {
    return new Promise((resolve, reject) => {
      axios.get(`https://api.randomuser.me/?results=${count}`)
        .then(function (response) {
         resolve(response.data)
        })
        .catch(function (error) {
         reject(error);
        })
    });
  },
  generateImages(count = 1) {
    let randomPage = Math.floor(Math.random() * 100);
    return new Promise((resolve, reject) => {
      axios.get(`https://picsum.photos/v2/list?page=${randomPage}&limit=${count}`)
        .then(function (response) {
         resolve(response.data)
        })
        .catch(function (error) {
         reject(error);
        })
    });
  },
  generateQuotes() {
    //get 88 random -- need to make two requests :(
    let quotes = [];
    return new Promise((resolve, reject) => {
      axios.get(`http://quotes.stormconsultancy.co.uk/quotes.json`)
        .then(function (response) {
          quotes.push(...response.data);
          axios.get(`http://quotes.stormconsultancy.co.uk/quotes.json`)
          .then(function (response) {
            quotes.push(...response.data);
            resolve(quotes)
          })
          .catch(function (error) {
            reject(error);
          })
        })
        .catch(function (error) {
         reject(error);
        })
    });
  }
}