const defineComponent = require('marko-widgets').defineComponent;

module.exports = defineComponent({
  template: require('./template.marko'),
  getTemplateData: function (state, input) {
    const { headline } = input;
    const articole = [
      { title: 'Sample post title', author: 'Marian' },
      { title: 'Sample post title', author: 'Gheorghe' }
    ];
    const boxes = [
      { type: '1', feature: 'World', title: 'Featured post' },
      { type: '2', feature: 'Design', title: 'Post title' }
    ];
    return {
      headline,
      articole,
      boxes
    };
  }
});
