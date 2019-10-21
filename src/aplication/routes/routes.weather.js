const express = require('express');
const routes = express.Router();
const controllerWeather = require('../controller/controller.wather');


routes.get('/', controllerWeather)


module.exports = routes;