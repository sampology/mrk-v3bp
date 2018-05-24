const defineComponent = require('marko-widgets').defineComponent;
const _Emitter = require('raptor-pubsub');

module.exports = defineComponent({
    template: require('./template.marko'),
    getInitialState (input)
    {
        let RenderHelper = 0;
        let name = input.name;
        let status = 'primary';

        const drunks = [
            { nume: 'Vasile', prenume: 'Marian', suma: 120 },
            { nume: 'Mariuca', prenume: 'Casie', suma: 150 },
            { nume: 'Andrei', prenume: 'Gheorghe', suma: 666}
        ];

        return { name, drunks, RenderHelper, status }
    },
    getTemplateData: function (state, input) {
        const { drunks, name, status } = state;
        return { name, drunks, status };
    },
    deleteRow: function(idx)
    {
        const { drunks } = this.state;
        let { RenderHelper } = this.state;
        drunks.splice(idx, 1);
        RenderHelper++;
        return this.setState({ drunks, RenderHelper })
    },
    addPayment: function (event)
    {
        event.preventDefault();
        const { drunks } = this.state;
        let { RenderHelper } = this.state;
        RenderHelper ++;
        const payer = {
            nume: $(this.getEl('nume')).val(),
            prenume: $(this.getEl('prenume')).val(),
            suma: $(this.getEl('suma')).val()
        };
        drunks.push(payer);
        let stats = ['info','warning', 'danger'];
        status = stats[Math.floor(Math.random()*stats.length)];
        return this.setState({ drunks, RenderHelper, status });
    },
    deleteMoney: function (ev, el) {
        ev.preventDefault();
        const index = parseInt($(el).attr('data-index'));
        return this.deleteRow(index);
    },
    addNavbar: function(ev, el) {
        _Emitter.emit('AddNavbarLink', 'YouTube', 'https://www.youtube.com');
    }

});
