/**
 * Web server that reads a file and returns the content
 * @param {string} path - Path of the database
 * @returns {Promise} - The content of the file
 * @throws {Error} - If cannot load the database
 */

const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) return reject(Error('Cannot load the database'));

      const lines = data.split('\n').slice(1, -1);

      const header = data.split('\n').slice(0, 1)[0].split(',');

      const firstnameIndex = header.findIndex((ele) => ele === 'firstname');
      const fieldIndex = header.findIndex((ele) => ele === 'field');

      const fields = {};
      const students = {};

      // Contains all the data
      const all = {};

      lines.forEach((line) => {
        const list = line.split(',');
        if (!fields[list[fieldIndex]]) fields[list[fieldIndex]] = 0;
        fields[list[fieldIndex]] += 1;
        if (!students[list[fieldIndex]]) students[list[fieldIndex]] = '';
        students[list[fieldIndex]] += students[list[fieldIndex]]
          ? `, ${list[firstnameIndex]}`
          : list[firstnameIndex];
      });

      all.numberStudents = `Number of students: ${lines.length}\n`;
      all.listStudents = [];
      for (const key in fields) {
        if (Object.hasOwnProperty.call(fields, key)) {
          const element = fields[key];
          all.listStudents.push(
            `Number of students in ${key}: ${element}. List: ${students[key]}`,
          );
        }
      }
      return resolve(all);
    });
  });
}

/**
 * A small HTTP server using Node's HTTP module
 * @param {host} host - Hostname
 * @param {number} port - Port number
 * @returns {void}
 */

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') res.end('Hello Holberton School!');
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((data) => {
        res.write(data.numberStudents);
        res.write(data.listStudents.join('\n'));
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  }
});

app.listen(port, hostname);

module.exports = app;
