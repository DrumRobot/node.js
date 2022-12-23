/* node.js/ch04/4.1/server2-sync.js */
const http = require('http');
const fs = require('fs');

const contentType = 'text/html; charset=utf-8';

http.createServer((req, res) => {
  try {
    const data = fs.readFileSync('./server2.html');
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': contentType });
    res.end(err.message);
  }
}).listen(8082, () => {
  console.log('http://localhost:8082 서버 대기 중입니다!');
});
