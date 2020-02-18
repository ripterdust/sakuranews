const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs-mate');
const morgan = require('morgan');

// Settings
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
require('./lib/database.js');

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

// Routes
app.use('/', require('./routes/routes.js'));
app.use('/admin', require('./model/admin.js'));


app.listen(app.get('port'), console.log('App running on port: ', app.get('port')));