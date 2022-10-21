/* 2.1.1-1.js */
if (true) {
  var x = 3;
}
console.log(x); // 3
// console.log(y); // undefined

if (true) {
  const y = 3;
  console.log(y);
}
// console.log(y); // Uncaught ReferenceError: y is not defined

if (true) {
  let z = 3;
  console.log(z);
}
// console.log(z); // Uncaught ReferenceError: y is not defined
