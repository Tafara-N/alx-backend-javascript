/**
 * AppController - This class contains the methods for the application
 */

module.exports = class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
};
