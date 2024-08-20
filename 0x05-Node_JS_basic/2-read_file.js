/**
 * Function that reads a file and prints the content: Synchronous version
 * @param {string} path - Path of the file
 * @returns {void}
 */

const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf-8' });

    // Splitting data and taking only list without header
    const lines = data.split('\n').slice(1, -1);

    const header = data.split('\n').slice(0, 1)[0].split(',');

    const firstnameIndex = header.findIndex((ele) => ele === 'firstname');
    const fieldIndex = header.findIndex((ele) => ele === 'field');

    // Dictionaries for counting each fields and store list of students
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
          `Number of students in ${key}: ${element}. List: ${students[key]}`,
        );
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
