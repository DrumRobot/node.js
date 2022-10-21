/** es6/filter.js
  @see https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter */
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result); // ['exuberant', 'destruction', 'present']


const fruits = ['Apple', 'Banana', 'Grapes', 'Mango', 'Orange'];

/**
 * 검색 조건에 따른 배열 필터링(쿼리)
 */
const filterItems = (query) => {
  return fruits.filter(
    (el) => el.toLowerCase().includes(query.toLowerCase())
  );
}
// console.log(fruits.filter(
//   (el) => el.toLowerCase().includes('ap')
// ));
console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
