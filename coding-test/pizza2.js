function solution3(n) {
  for (let i = 6; i >= 1; i--) {
    if (n % i == 0 && 6 % i == 0) { // GCD i를 구하기
      // const lcm = n * 6 / i; // 조각수
      // return lcm / 6; // 판수
      return n / i; // n / GCD(n, 6)
    }
  }
}

function solution(n) { //n : 4
  for (let i = 1; i < n; i++) { // 피자 개수(판)
      // i: 1 => 6 % 4 = 2
      // i: 2 => 12 % 4 = 0
      // i: 3 => 18 % 4 = 2
      if (i * 6 % n == 0) {
          return i;
      }
  }
  return n;
}

function solution(n) { //n : 4
  for (let i = 6; i < 6 * n; i += 6) { // 피자 조각수
      // i % n: 6 % 4 = 2
      // i % n: 12 % 4 = 0
      // i % n: 18 % 4 = 2
      if (i % n == 0) { // n명이 똑같이 먹을 수 있으면
          return i / 6; // 피자의 판 수
      }
  }
  return n;
}

console.log(solution(6)); // 1
console.log(solution(10)); // 5
console.log(solution(4)); // 2
