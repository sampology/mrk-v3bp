const defineComponent = require('marko-widgets').defineComponent;

module.exports = defineComponent({
    template: require('./template.marko'),
    getInitialState (input)
    {
        const slider = { title: input.title, summary: input.summary }
        return { slider }
    },
    getTemplateData: function (state, input) {
        const { slider } = state;
        return { slider }
    },
    init () {
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            items: 1
        });
    }

});
