/* node.js/coding-test/10869.js
   https://www.acmicpc.net/problem/10869 */
const fs = require('fs');
let [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ');
a = parseInt(a);
b = parseInt(b);
// A+B 출력
console.log(a + b);
// A-B 출력
console.log(a - b);
// A*B 출력
console.log(a * b);
// A/B(몫) 출력
console.log(parseInt(a / b));
// A%B(나머지) 출력
console.log(a % b);
