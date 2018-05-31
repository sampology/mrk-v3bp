const defineComponent = require('marko-widgets').defineComponent;

module.exports = defineComponent({
	template: require('./template.marko'),
	getTemplateData: function (state, input) {
		const slider = { title: input.title, summary: input.summary }
		return { slider }
	},
	init() {
		if (window) {
			$(function () {
				const owlCarousel = require('owl.carousel');
				$('.owl-carousel').owlCarousel({
					loop: true,
					margin: 0,
					nav: false,
					items: 1
				});
			});
		}
	}
});
