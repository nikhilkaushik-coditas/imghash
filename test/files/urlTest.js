// test file for getting pHash from URL 
const imghash = require('../../index')
// const hamming = require('../../index');
const hash1 = imghash.hash(
  'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
);

const hash2 = imghash.hash(
  'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
);
Promise.all([hash1, hash2]).then((results) => {
  console.log('hashes', results[0]);
  let dis = imghash.hamming(results[0], results[1]);
  console.log('distnace', dis);
});

