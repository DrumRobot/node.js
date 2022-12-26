/* node.js/ch04/4.3/cookie-client.js */
const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
  console.log(req.url, req.headers.cookie); // 쿠키 헤더 출력
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Set-Cookie': 'mycookie=test',
  });
  res.end(fs.readFileSync(`${__dirname}/cookie-client.html`));
})
  .listen(8083, () => {
    console.log('http://localhost:8083 서버 대기 중');
  });
