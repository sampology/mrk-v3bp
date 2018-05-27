const defineComponent = require('marko-widgets').defineComponent;
const _Emitter = require('raptor-pubsub');

module.exports = defineComponent({
    template: require('./template.marko'),
    getInitialState (input)
    {
        let RenderHelper = 0;
        const Links = [
            { Text: 'Button', Link: 'https://www.google.ro' },
            { Text: 'Button', Link: 'https://www.google.ro' }
        ];
        return { Links, RenderHelper }
    },
    getTemplateData: function (state, input) {
        const { Links } = state;
        return {
            Links
        };
    },

    InsertLink: function(titlu, link)
    {
        const { Links } = this.state;
        let { RenderHelper } = this.state;
        const obiect = { Text: titlu, Link: link};
        Links.push(obiect);
        RenderHelper ++;
        console.log('chemat');
        return this.setState({ Links, RenderHelper });
    },
    init() {
        const self = this;
        this.subscribeTo(_Emitter)
        .on('AddNavbarLink', function (titlu, link) {
            return self.InsertLink(titlu, link);
            // Uncaught TypeError: this.InsertLink is not a function => Dar este definit mai sus, why ?
        });
        // Am fost nevoit sa creez functia mai sus deoarece nu am state in Init()
    }
});
