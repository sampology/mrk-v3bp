const defineComponent = require('marko-widgets').defineComponent;

module.exports = defineComponent({
    template: require('./template.marko'),
    getInitialState (input)
    {
        const box = { design: input.design, content: input.content, type: input.type, title: input.title }
        return { box }
    },
    getTemplateData: function (state, input) {
        const { box } = state;
        return { box }
    }
});
