/**
 * A more complex HTTP server using Express
 */

const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (error, data) => {
      if (error) return reject(Error('Cannot load the database'));

      const lines = data.split('\n').slice(1, -1);

      const header = data.split('\n').slice(0, 1)[0].split(',');

      const firstnameIndex = header.findIndex((ele) => ele === 'firstname');
      const fieldIndex = header.findIndex((ele) => ele === 'field');

      const fields = {};
      const students = {};

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

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(process.argv[2])
    .then((data) => {
      res.write(data.numberStudents);
      res.end(data.listStudents.join('\n'));
    })
    .catch((error) => {
      res.end(error.message);
    });
});

app.listen(port);

module.exports = app;
