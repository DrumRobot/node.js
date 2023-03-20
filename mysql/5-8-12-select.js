const express = require('express');
const mysql = require('mysql2');
const app = express();

require('dotenv').config({ path: 'mysql/.env' }); // yarn add dotenv

app.get('/', (req, res) => {
  const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });

  let body = '<h1>single row</h1>';
  connection.query(
    'SELECT * FROM topic WHERE id = ?', [1],
    (err, results, fields) => {
      console.log(err, results, fields);
      let row = results[0];
      body += '<h2>' + row.title + '<h2>';
      body += row.description;

      body += '<h1>multi row</h1>';
      connection.query(
        'SELECT * FROM topic',
        (err, results, fields) => {
          console.log(err, results, fields);
          for (let row of results) {
            body += '<h2>' + row.title + '<h2>';
            body += row.description;
          }
          res.send(body);
        }
      );
    }
  );
});

app.listen(3000, function () {
  console.log(process.env);
  console.log('Listening: http://localhost:3000');
});
