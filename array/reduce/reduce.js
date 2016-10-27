'strict mode';

var fs = require('fs')

// It will read the data from the txt file in a utf8 format
var output = fs.readFileSync('theData.txt', 'utf-8')
  .trim()
  .split('\n')
  // each line is split into a array by taps caracter '\t'
  .map(line => line.split('\t'))
  .reduce((customers, line) => {
    console.log(line);
    customers[line[0]] = customers[line[0]] || []
    customers[line[0]].push({
      productName: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers;
  }, {});

console.log('output', JSON.stringify(output, null, 2));






// const output = fs.readFileSync('data.txt', 'UTF8')
//   .trim()
//   .split('\n')
//   .map((line) => line.split('\t'))
//   .reduce((customers, [name, order, price, quantity]) => {
//     customers[name] = customers[name] || [];
//     customers[name].push({ order, price, quantity });
//     return customers;
//   }, {});﻿
