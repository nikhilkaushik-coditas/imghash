// test file for getting pHash from URL 
const imghash = require('../../index')

const hash1 = imghash.hash(
  'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
);

Promise.all([hash1]).then((results) => {
  console.log('hashes', results[0]);
});

