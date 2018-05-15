const template = require('marko').load(require('./template.marko'));
const skeleton = require('./marko/layouts/skeleton/template.marko');
const tpl = require(`./marko/layouts/lay-1-column/template.marko`);
const env = require('common/config.json').environment;

module.exports = (ctx) => {
  ctx.type = 'text/html; charset=utf-8';
  ctx.status = 200;
  const seo = {
    title: 'Page: /',
    description: ''
  };

  return ctx.body = template.stream({
    skeleton,
    seo,
    tpl,
    env
  });
};
