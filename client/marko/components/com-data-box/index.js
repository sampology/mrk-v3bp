const defineComponent = require('marko-widgets').defineComponent;

module.exports = defineComponent({
template: require('./template.marko'),
getTemplateData: function (state, input) {
    const box = { 
        feature: input.feature, 
        content: input.content, 
        type: input.type, 
        title: input.title 
    }
    return { box }
}
});
