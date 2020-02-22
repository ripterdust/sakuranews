const { Router } = require('express');
const app = Router();
const controller = require('../controllers/controller');

app.get('/', controller.mainPage);
app.get('/list', controller.listPage);
app.get('/write', controller.writePage);
app.post('/new', controller.createNew);
app.get('/new/:id', controller.getSingleNew);
app.get('/category/:category', controller.getSingleCategory);
app.get('/search/:category', controller.search);
app.get('/searchbar/:search', controller.searchBar);

module.exports = app;