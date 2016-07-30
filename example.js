const fs = require('fs');
const highlight = require('./');

// unused example lines
const bool = false;
const nullValue = null;
const foo = /test/;
const a = 1;
const template = `foo${a}`;

/**
 * Load file asynchronously
 * @returns {Promise}
 */
function getFile() {
  return new Promise((resolve, reject) => {
    fs.readFile('./example.js', (err, file) => {
      if (err) {
        return reject(err);
      }

      resolve(file.toString());
    });
  });
}

// main
getFile()
  .then(highlight)
  .then(console.log)
  .catch(console.error);
