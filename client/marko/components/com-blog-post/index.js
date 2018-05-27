const defineComponent = require('marko-widgets').defineComponent;

module.exports = defineComponent({
    template: require('./template.marko'),
    getInitialState (input)
    {
        const article = { title: input.title, author: input.author }
        return { article }
    },
    getTemplateData: function (state, input) {
        const { article } = state;
        return { article }
    }
});
