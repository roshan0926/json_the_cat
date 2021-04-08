const request = require('request');
const argv = process.argv.slice(2);

const handleData = (data) => {
  if (data.length === 0) {
    throw new Error('Error: Breed is not found');
  } else {
    console.log(data[0].description);
  }
};
const fetchBreed = (dataHandler) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${argv}`, (error, response, body) => {
  
    if (error) {
      throw new Error('Request failed');
    }
    const data = JSON.parse(body);
    
    dataHandler(data);
  });
};
fetchBreed(handleData);








