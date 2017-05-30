let controller = require('./../controllers/controller');

module.exports = app => {
  app.post('/api/login', controller.login);
}
