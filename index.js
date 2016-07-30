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
      return getHTMLColorizerForColor('rgb(229, 107, 104)');
    case 'Comment':
    case 'RegularExpression':
    case 'String':
    case 'Template':
      return getHTMLColorizerForColor('rgb(152, 192, 35)');
    case 'Identifier':
      return getHTMLColorizerForColor('rgb(214, 178, 70)');
    case 'Numeric':
      return getHTMLColorizerForColor('rgb(59, 114, 212)');
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
