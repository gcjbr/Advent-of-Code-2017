const fs = require('fs');

const input = fs.readFileSync('./input/day02', 'utf8').split('\n');

let checksum = null;
let min = null;
let max = null;


input.forEach((e) => {
  const cells = e.split('\t');

  for (let i = 0; i < cells.length; i += 1) {
    const currCell = parseInt(cells[i]);
    if (i === 0) {
      min = currCell;
      max = currCell;
    }
    if (currCell < min) min = currCell;
    if (currCell > max) max = currCell;
  }

  checksum += max - min;
});

console.log(checksum);
