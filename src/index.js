const express = require('express');
const app = express();




//Routes
const routes = require('../src/aplication/routes/index');

//Middleware
app.use(express.json());
app.use('/', routes);

//Config
app.set('port', process.env.PORT || 3000);


//Server
app.listen(app.get('port'), ()=>{
    console.log('The port is running in:' , app.get('port'));
})