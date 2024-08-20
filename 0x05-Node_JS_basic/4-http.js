/**
 * A small HTTP server using Node's HTTP module
 * @param {host} host - Hostname
 * @param {number} port - Port number
 * @returns {void}
 */

const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello Holberton School!');
  res.end();
});

app.listen(port, hostname);

module.exports = app;
