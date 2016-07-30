#!/usr/bin/env node

const esharpi = require('./..');
const fs = require('fs');

if (!process.argv[2]) {
  throw new Error('No file specified.');
}

fs.readFile(process.argv[2], (err, file) => {
  if (err) {
    throw err;
  }

  console.log(esharpi(file.toString()));
});
