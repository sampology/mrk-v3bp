const defineComponent = require('marko-widgets').defineComponent;

module.exports = defineComponent({
    template: require('./template.marko'),
    getInitialState (input)
    {
        const Logo  = input.title; 
        let AvailableRegistrations = true;
        return { AvailableRegistrations, Logo }
    },
    getTemplateData: function (state, input) {
        let { AvailableRegistrations } = state;
        const { Logo } = state;
        return {
            AvailableRegistrations, Logo
        };
    }
});
