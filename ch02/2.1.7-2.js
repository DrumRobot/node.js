/* node.js/ch02/2.1.7-2.js */
const now = Date.now(); // 현재 시간 ms
const promise = new Promise((resolve, reject) => {
  if (now % 2 === 0) {
    resolve('짝수'); // 짝수는 성공으로 처리
  } else {
    reject('홀수'); // 홀수는 실패로 처리
  }
});
promise
  .then((message) => {
    return new Promise((resolve) => {
      resolve(message);
    });
  })
  .then((message2) => {
    console.log('메서드 체이닝');
    return Promise.resolve(message2);
  })
  .then(console.log)
  .catch(console.error);
