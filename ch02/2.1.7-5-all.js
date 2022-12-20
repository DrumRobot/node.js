/* node.js/ch02/2.1.7-5-all.js */
function delayed(value, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.timeLog('delayed', value, ms); // 시간 측정
      resolve(value)
    }, ms);
  });
}
console.time('delayed'); // 시간 측정 시작
const promise1 = delayed('성공1', 1000);
const promise2 = delayed('성공2', 2000);
Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result); // ['성공1', '성공2'];
  })
  .catch((error) => {
    console.error(error);
  });
