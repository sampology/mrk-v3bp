const defineComponent = require('marko-widgets').defineComponent;

module.exports = defineComponent({
    template: require('./template.marko'),
    getTemplateData: function (state, input) {
        const box = { content: input.content, title: input.title }
        return { box }
    }
});
