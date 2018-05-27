const defineComponent = require('marko-widgets').defineComponent;

module.exports = defineComponent({
    template: require('./template.marko'),
    getInitialState (input)
    {
        const data = { title: input.title, links: input.links }
        let lista;
        if(data.links == 1)
        {
            lista = [
                { text: 'March 2014', link: '#' },
                { text: 'Feb 2014', link: '#' },
                { text: 'December 2014', link: '#' },
                { text: 'January 2014', link: '#' },
                { text: 'April 2014', link: '#' },
                { text: 'Jun 2014', link: '#' },
                { text: 'July 2014', link: '#' },
                { text: 'March 2017', link: '#' }
            ];
        }
        else
        {
            lista = [
                { text: 'Github', link: '#' },
                { text: 'Twitter', link: '#' },
                { text: 'Facebook', link: '#' }
            ];    
        }
        return { data, lista }
    },
    getTemplateData: function (state, input) {
        const { data } = state;
        const { lista } = state;
        return { data, lista }
    }
});
