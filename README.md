# ESHarpi
A NodeJS based ECMAScript syntax highlighter based on http://rubyquiz.strd6.com/quizzes/218-syntax-highlighting

[![Build Status](https://travis-ci.org/alexlrobertson/esharpi.svg?branch=master)](https://travis-ci.org/alexlrobertson/esharpi)

## Usage

`npm install esharpi`

### NodeJS

```javascript
const esharpi = require('esharpi');

console.log(esharpi('const foo = "bar";'));
```

### Command Line

```bash
esharpi example.js
```
