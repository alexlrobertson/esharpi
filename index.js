const chiffon = require('chiffon');
const chalk = require('chalk');

function getANSIColorizer(tokenType) {
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

function getHTMLColorizerForColor(color) {
  return (input) => `<span style="color: ${color};">${input}</span>`;
}

function getHTMLColorizer(tokenType) {
  switch (tokenType) {
    case 'Boolean':
    case 'Null':
    case 'Keyword':
      return getHTMLColorizerForColor('red');
    case 'Comment':
    case 'RegularExpression':
    case 'String':
    case 'Template':
      return getHTMLColorizerForColor('green');
    case 'Identifier':
      return getHTMLColorizerForColor('yellow');
    case 'Numeric':
      return getHTMLColorizerForColor('blue');
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
    .map((token) => getANSIColorizer(token.type)(token.value))
    .join('');
}

highlight.html = function highlightHtml(input) {
  return chiffon
    .tokenize(input, {
      comment: true,
      whiteSpace: true,
      lineTerminator: true,
    })
    .map((token) => getHTMLColorizer(token.type)(token.value))
    .join('');
};

module.exports = highlight;
