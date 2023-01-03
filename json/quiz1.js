/* json/quiz1.js */
const json = `{
  "name": "식빵",
  "family": "웰시코기",
  "age": 1,
  "weight": 2.14
}`;

let obj = JSON.parse(json);
// obj.age += 1;
// console.log(JSON.stringify(obj));

console.log(JSON.stringify(obj, replacer, 2));

function replacer(key, value) {
  return key === 'age' ? value + 1 : value;
}
