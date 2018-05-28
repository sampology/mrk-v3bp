const defineComponent = require('marko-widgets').defineComponent;
module.exports = defineComponent({
  template: require('./template.marko'),
  getTemplateData: function (state, input) {
    const { Headline } = input;
    const Articole = [
      { Title: 'Sample post title', Author: 'Marian' },
      { Title: 'Sample post title', Author: 'Gheorghe' }
    ]; 
    const Boxes = [
      { Type: '1', Feature: 'World', Title: 'Featured post' },
      { Type: '2', Feature: 'Design', Title: 'Post title' }
    ];
    return {
      Headline,
      Articole,
      Boxes
    };
  }
});
