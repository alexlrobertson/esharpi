const esharpi = require('./');
const assert = require('assert');

const example = 'const foo = "bar";';

assert.notEqual(esharpi(example), example, 'does not exactly match input');
assert(esharpi(example).match(/const/), 'has reference to variable type');
assert(esharpi(example).match(/foo/), 'has reference to original variable name');
assert(esharpi(example).match(/bar/), 'has reference to original string value');
assert(esharpi(example).match(/\u001b/), 'contains ANSI colors');

// HTML
assert(esharpi.html(example).match(/span/), 'contains <span> tags');
assert(esharpi.html(example).match(/style="/), 'contains style attributes');
