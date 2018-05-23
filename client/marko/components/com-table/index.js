const defineComponent = require('marko-widgets').defineComponent;
module.exports = defineComponent({
  template: require('./template.marko'),
  getInitialState (input)
  {
    let RenderHelper = 0;
    let name = input.name;

    const drunks = [
      { nume: 'Vasile', prenume: 'Marian', suma: 120 },
      { nume: 'Mariuca', prenume: 'Casie', suma: 150 },
      { nume: 'Andrei', prenume: 'Gheorghe', suma: 666}
    ];

    return {
      name,
      drunks,
      RenderHelper
    }
  },
  getTemplateData: function (state, input) {
    const { drunks } = state;
    const { name } = state;

    return {
      name,
      drunks
    };
  },
  addPayment: function (event)
  {
    event.preventDefault();
    const { drunks } = this.state;
    let { RenderHelper } = this.state;
    RenderHelper ++;

    // Pray.js: god forgive me for not checking this fields for emptiness, for i am a sinner.

    const payer = {
      nume: $(this.getEl('nume')).val(),
      prenume: $(this.getEl('prenume')).val(),
      suma: $(this.getEl('suma')).val()
    };

    drunks.push(payer);

    return this.setState({
      drunks,
      RenderHelper
    });
  }

  // Aici primesc eroarea: event-delegation.js:64 Uncaught Error: Method not found on widget w0-w1-w0: deleteMoney(0) / deleteMoney(1) etc.
  // deleteMoney: function (id) {
  //   const { drunks } = this.state;
  //   let { RenderHelper } = this.state;
  //   drunks.splice(id, 1);
  //   RenderHelper++;
  //   console.log(id);
  //   return this.setState({
  //     drunks,
  //     RenderHelper
  //   })
  // }
});
