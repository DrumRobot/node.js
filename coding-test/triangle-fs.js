/* node.js/coding-test/triangle-fs.js */
const fs = require('fs');
// 파일에서 바이트 데이터를 읽듯이 콘솔에서 표준 입력을 받아서
// 바이트를 문자열로 바꾼다. (단축키 Ctrl + D)
let input = fs.readFileSync('/dev/stdin').toString();
const n = Number(input); // 입력 값을 숫자 n으로 받는다.

/* 1 부터 n 까지의 수열 생성 */
const numbers = new Array(n).fill().map((_, i) => i + 1);

// TODO: numbers에 for-of문 써서 풀어보기

numbers.forEach((value) => {
  console.log('*'.repeat(value));
});

// 중첩 반복문
// for (let i = 1; i <= n; i++) {
//   let output = '*'.repeat(i); // i개의 *을 출력
//   console.log(output); // 한 줄씩 출력 (개행문자 자동 출력)
// }
