const json = `{
  "users": [
    {
      "id": 1,
      "name": "홍길동",
      "joined": "2020-04-28",
      "verified": true
    },
    {
      "id": 2,
      "name": "백소저",
      "joined": "2022-01-12",
      "verified": false
    }
  ]
}`;
let obj = JSON.parse(json);
console.log(obj.users[0]); // 첫 번째 유저 객체
console.log(obj.users[0].name); // 홍길동
console.log(obj.users[0].joined); // 첫 번째 유저의 가입 날짜

/* 이름만 배열로 가져오기 */
console.log(obj.users.map((user) => user.name));

/* 인증된 유저만 가져오기 */
console.log(obj.users.filter((user) => user.verified));

console.log(JSON.parse('3.14'));
console.log(JSON.parse('"text"'));
console.log(JSON.parse('true'));
console.log(JSON.parse('[1, 2, 3]'));
