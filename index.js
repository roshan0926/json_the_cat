const { fetchBreedDescription } = require('./breedFetcher');

const argv = process.argv[2];

fetchBreedDescription(argv, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});


