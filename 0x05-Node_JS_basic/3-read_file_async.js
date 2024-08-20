/**
 * Function that reads a file and prints the content: Asynchronous version
 * @param {string} path - Path of the file
 * @returns {Promise} - Promise object represents the content of the file
 */

const fs = require('fs');

module.exports = function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) return reject(Error('Cannot load the database'));
      const lines = data.split('\n').slice(1, -1);

      const header = data.split('\n').slice(0, 1)[0].split(',');

      const firstnameIndex = header.findIndex((ele) => ele === 'firstname');
      const fieldIndex = header.findIndex((ele) => ele === 'field');

      const fields = {};
      const students = {};

      lines.forEach((line) => {
        const list = line.split(',');
        if (!fields[list[fieldIndex]]) fields[list[fieldIndex]] = 0;
        fields[list[fieldIndex]] += 1;
        if (!students[list[fieldIndex]]) students[list[fieldIndex]] = '';
        students[list[fieldIndex]] += students[list[fieldIndex]]
          ? `, ${list[firstnameIndex]}`
          : list[firstnameIndex];
      });

      console.log(`Number of students: ${lines.length}`);
      for (const key in fields) {
        if (Object.hasOwnProperty.call(fields, key)) {
          const element = fields[key];
          console.log(
            `Number of students in ${key}: ${element}. List: ${students[key]}`
          );
        }
      }
      return resolve();
    });
  });
};
