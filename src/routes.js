const app = require('express');

const UserController = require('./controller/UserController');

const routes = app.Router();

routes.get('/user', UserController.index);
routes.get('/user/:id', UserController.show);
routes.post('/user', UserController.create);

module.exports = routes;
