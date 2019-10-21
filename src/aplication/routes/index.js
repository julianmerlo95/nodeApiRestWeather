const express = require('express');
const routes = express.Router();


routes.use('/weather', require('./routes.weather'));


module.exports = routes;