# ESHarpi
A NodeJS based ECMAScript syntax highlighter based on http://rubyquiz.strd6.com/quizzes/218-syntax-highlighting

[![Build Status](https://travis-ci.org/alexlrobertson/esharpi.svg?branch=master)](https://travis-ci.org/alexlrobertson/esharpi)

## Usage

`npm install esharpi`

### NodeJS

#### `esharpi`

Accepts source code as a string and returns a string with inserted ANSI color character sequences for use on the console.

```javascript
const esharpi = require('esharpi');

esharpi('const foo = "bar";');
```

#### `esharpi.html`

Accepts source code as a string and returns an HTML string with inline styles for ECMAScript syntax.

```javascript
const esharpi = require('esharpi');

esharpi.html('const foo = "bar";');
```

### Command Line

```bash
esharpi example.js
```
