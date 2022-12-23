/* node.js/ch04/4.1/server1.mjs */
import http from 'http';
import { stdin as input, stdout as output } from 'node:process';
import readline from 'node:readline/promises';

const rl = readline.createInterface({ input, output });

try {
  do {
    const abortable = new AbortController();
    setTimeout(() => abortable.abort(), 5000);
    const answer = await rl.question('포트 입력: ', abortable);
    var port = Number(answer);
  } while (isNaN(port));
} catch (err) {
  console.warn(err.message);
  var port = 8080;
}

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
  })
  .listen(port, () => {
    // 서버 연결
    console.log(`http://localhost:${port} 서버 대기 중입니다!`);
  });
