const R = require('koa-router');
const render = require('server/services/render');

const Router = new R();

Router.get(
  '/', render.Page()
);

module.exports = Router;
