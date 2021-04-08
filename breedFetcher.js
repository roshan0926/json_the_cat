const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback('Request failed', null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback('Error: Breed is not found', null);
    } else {
      return callback(null, data[0].description)
    }
  });
};
module.exports = { fetchBreedDescription };








