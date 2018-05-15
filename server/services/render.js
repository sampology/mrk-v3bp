const startUp = require('client/startup');

const render = {
  Page () {
    return async (ctx) => {
      return startUp(ctx);
    };
  }
};

module.exports = render;
