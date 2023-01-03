/* json/quiz2.js */
const json = `[1, 2, 3, 4]`;

let array = JSON.parse(json);

// array.reduce((prev, cur) => prev + cur);
let sum = 0;
array.forEach((value) => {
  sum += value;
})
console.log(sum);
