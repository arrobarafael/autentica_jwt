const app = require('express');

const UserController = require('./controller/UserController');
const HomeController = require('./controller/HomeController');
const authMiddleware = require('./middlewares/auth');

const routes = app.Router();

routes.get('/user', UserController.index);
routes.get('/user/:id', UserController.show);
routes.post('/user', UserController.create);

routes.post('/autenticar', UserController.authenticate);

routes.use(authMiddleware);
routes.get('/home', HomeController.index);

module.exports = routes;
