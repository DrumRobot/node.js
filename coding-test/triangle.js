/* node.js/coding-test/triangle.js */
const readline = require('readline'); // module import
// stdio: Standard Input / Output
const rl = readline.createInterface({
  input: process.stdin, // Standard Input
  output: process.stdout, // Standard Output
});

let n = 0; // input

// 이벤트 리스너 등록으로 입출력
rl.on('line', function (line) {
  n = Number(line); // 입력 값을 숫자 n으로 받는다.
}).on('close', function () { // Ctrl + D로 인터페이스 종료시
  let answer = '';
  // TODO: 한 변의 길이가 n인 직각삼각형 출력
  console.log(answer);
});
