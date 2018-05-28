const defineComponent = require('marko-widgets').defineComponent;

module.exports = defineComponent({
    template: require('./template.marko'),
    getTemplateData: function (state, input) {
        const links = [
            { name: 'World', href: 'https://www.google.ro' },
            { name: 'U.S', href: 'https://www.google.ro' },
            { name: 'Technology', href: 'https://www.google.ro' },
            { name: 'Design', href: 'https://www.google.ro' },
            { name: 'Culture', href: 'https://www.google.ro' },
            { name: 'Business', href: 'https://www.google.ro' },
            { name: 'Politics', href: 'https://www.google.ro' },
            { name: 'Opinion', href: 'https://www.google.ro' },
            { name: 'Science', href: 'https://www.google.ro' },
            { name: 'Health', href: 'https://www.google.ro' },
            { name: 'Style', href: 'https://www.google.ro' },
            { name: 'Travel', href: 'https://www.google.ro' }
        ];
        return { links }
    }
});
