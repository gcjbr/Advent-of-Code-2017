const fs = require('fs');

const input = fs.readFileSync('./input/day01', 'utf8').trim().split('');
let prev = input[input.length - 1];
let total = input.reduce((pre, el) => {
  if (parseInt(el) === parseInt(prev)) return parseInt(pre) + parseInt(el); 
  prev = el;
  return pre;
}, 0);

console.log(total);

