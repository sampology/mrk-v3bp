const defineComponent = require('marko-widgets').defineComponent;

module.exports = defineComponent({
    template: require('./template.marko'),
    getTemplateData: function (state, input) {
        const article = { 
            title: input.title, 
            author: input.author 
        }
        return { article }
    }
});
