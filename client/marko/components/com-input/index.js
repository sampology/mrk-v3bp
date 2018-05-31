const defineComponent = require('marko-widgets').defineComponent;

module.exports = defineComponent({
  template: require('./template.marko'),
  getTemplateData: function (state, input) {
    const type = input.type;
    const name = input.name;
    const placeholder = input.placeholder;
    return { type, name, placeholder }
  }
});
