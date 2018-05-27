const defineComponent = require('marko-widgets').defineComponent;
module.exports = defineComponent({
  template: require('./template.marko'),
  getInitialState (input)
  {
    const Headline = input.headline;
    return { Headline }   
  },
  getTemplateData: function (state, input) {
    const { Headline } = state;
    return {
      Headline
    };
  }
});
