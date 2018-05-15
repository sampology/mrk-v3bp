const defineComponent = require('marko-widgets').defineComponent;
module.exports = defineComponent({
  template: require('./template.marko'),

  getInitialState (input) {
    const renderHelper = 0;
    const buttons = [
      {
        linkURL: 'https://google.com',
        linkLabel: 'Google'
      },
      {
        linkURL: 'https://yahoo.com',
        linkLabel: 'Yahoo'
      }
    ];
    return {
      buttons,
      renderHelper
    }
  },

  getTemplateData (state, input) {
    const { buttons } = state;
    return {
      buttons
    };
  },

  addButton (ev, el) {
    ev.preventDefault();

    const { buttons } = this.state;
    let { renderHelper } = this.state;
    const button = {
      linkURL: 'https://bing.com',
      linkLabel: 'Bing'
    };

    buttons.push(button);
    renderHelper++;

    return this.setState({
      buttons,
      renderHelper
    })
  }

  //TODO Create another button to remove one button at a time from the buttons array.

});