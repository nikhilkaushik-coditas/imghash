// test file for getting pHash from URL 
const imghash = require('../../index')
const request = require('request');
// const hamming = require('../../index');
const filepath = 'https://www.gstatic.com/webp/gallery/1.jpg';
// const hash1 = imghash.hash(
//   'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
// );
request({ url: filepath, encoding: null }, async (err, resp, content) => { 
  console.log('file buffer', content);
  const hash1 = await imghash.hash(content);
  console.log('hashes', hash1);
});
// const hash2 = imghash.hash(
//   'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
// );
// Promise.all([hash1, hash2]).then((results) => {
//   console.log('hashes', results[0]);
//   let dis = imghash.hamming(results[0], results[1]);
//   console.log('distnace', dis);
// });

