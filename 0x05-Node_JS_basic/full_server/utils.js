/**
 * Read a database asynchronously
 * @param {string} path - The path of the database
 * @returns {Promise} - The promise containing the data of the database
 * @throws {Error} - If the database cannot be loaded
 *
 */

const fs = require('fs');

module.exports = function readDatabase(path) {
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
      for (const key in fields) {
        if (Object.hasOwnProperty.call(fields, key)) {
          const number = fields[key];
          all[key] = {
            students: `List: ${students[key]}`,
            number,
          };
        }
      }

      return resolve(all);
    });
  });
};
