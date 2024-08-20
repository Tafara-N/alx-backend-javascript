/**
 * StudentsController.js - This file contains the routing for the application
 * @param {object} request - The request object
 * @param {object} response - The response object
 * @returns {object} - The response object
 *
 */

const readDatabase = require('../utils');

module.exports = class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        let defaultMessage = 'This is the list of our students';

        for (const field in data) {
          if (Object.hasOwnProperty.call(data, field)) {
            const element = data[field];
            defaultMessage += `\nNumber of students in ${field}: ${element.number}. ${element.students}`;
          }
        }
        response.send(defaultMessage);
      })
      .catch((error) => {
        response.send(error.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    if (!['SWE', 'CS'].includes(request.params.major)) {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2])
      .then((data) => {
        const defaultMessage = data[request.params.major].students;
        console.log('defaultMessage', defaultMessage);
        if (defaultMessage) response.send(defaultMessage);
        response.status(500).send('Major parameter must be CS or SWE');
      })
      .catch((error) => {
        console.log('error', error);
        response.send(error.message);
      });
  }
};
