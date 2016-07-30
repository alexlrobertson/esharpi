const chiffon = require('chiffon');
const chalk = require('chalk');

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

function highlight(input) {
  return chiffon
    .tokenize(input, {
      comment: true,
      whiteSpace: true,
      lineTerminator: true,
    })
    .map((token) => getHighlightColor(token.type)(token.value))
    .join('');
}

module.exports = highlight;
