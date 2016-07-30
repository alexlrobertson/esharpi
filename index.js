const fs = require('fs');
const chiffon = require('chiffon');
const chalk = require('chalk');

/**
 * Load file asynchronously
 * @returns {Promise}
 */
function getFile() {
  return new Promise((resolve, reject) => {
    fs.readFile('./index.js', (err, file) => {
      if (err) {
        return reject(err);
      }

      resolve(file.toString());
    });
  });
}

/**
 * Get function to decorate token value
 * @param tokenType
 * @returns {Function}
 */
function getHighlightColor(tokenType) {
  switch (tokenType) {
    case 'Boolean':
    case 'Null':
    case 'Keyword':
      return chalk.red;
    case 'Comment':
    case 'RegularExpression':
    case 'String':
    case 'Template':
      return chalk.green;
    case 'Identifier':
      return chalk.yellow;
    case 'Numeric':
      return chalk.blue;
    default:
      return (input) => input;
  }
}

// unused example lines
const bool = false;
const nullValue = null;
const foo = /test/;
const a = 1;
const template = `foo${a}`;

// main
getFile()
  .then((fileContents) => {
    return chiffon.tokenize(fileContents, {
      comment: true,
      whiteSpace: true,
      lineTerminator: true,
    });
  })
  .then((tokens) => {
    return tokens
      .map((token) => getHighlightColor(token.type)(token.value))
      .join('');
  })
  .then(console.log)
  .catch(console.error);
