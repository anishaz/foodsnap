let controller = require('./../controllers/controller');

module.exports = app => {
  app.post('/api/login', controller.login);
  app.post('/api/register', controller.register);
}
