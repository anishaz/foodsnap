let controller = require('./../controllers/controller');

module.exports = app => {
  app.post('/api/login', controller.login);
  app.post('/api/register', controller.register);
  app.get('/api/current', controller.current);
  app.get('/logout', controller.logout);
  app.post('/api/upload', controller.upload);
  app.get('/api/images', controller.getImages);
  app.get('/api/images/:id', controller.showprofile);
}
