/* json/quiz3.js */
const json = `{
  "size": 0,
  "values": [1, 2, 3, 4]
}`;

let obj = JSON.parse(json);
obj.size = obj.values.length;
console.log(JSON.stringify(obj));
