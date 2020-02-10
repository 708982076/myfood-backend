const Koa = require('koa');
const Router = require('koa-router');
const App = new Koa();
const routes = require('./route');
const cors = require('@koa/cors');

App.use(cors())
require('./db'); 
routes(App);

App.listen(3000);