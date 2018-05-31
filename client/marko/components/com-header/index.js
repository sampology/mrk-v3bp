const defineComponent = require('marko-widgets').defineComponent;
const _Emitter = require('raptor-pubsub');

module.exports = defineComponent({
	template: require('./template.marko'),
	getInitialState: function (input) {
		const buttons =
			[
				{
					text: 'Login',
					inputs: [
						{ type: 'email', placeholder: 'E-Mail', name: 'mail' },
						{ type: 'password', placeholder: 'Password', name: 'password' }
					]
				},
				{
					text: 'Register',
					inputs: [
						{ type: 'email', placeholder: 'E-Mail', name: 'mail' },
						{ type: 'password', placeholder: 'Password', name: 'password' },
						{ type: 'text', placeholder: 'First name', name: 'firstname' },
						{ type: 'text', placeholder: 'Last name', name: 'lastname' }
					]
				}
			];
		return { buttons }
	},
	getTemplateData: function (state, input) {
		const logo = input.title;
		const { buttons } = state;
		return { buttons, logo };
	},
	handleClick: function (event, el) {
		event.preventDefault();
		const { buttons } = this.state;
		let modal_id = parseInt($(el).attr('data-modal'));
		_Emitter.emit('openModal', buttons[modal_id]); // am facut bine sa trimit strict doar obiectul necesar ? 'less data'
	}
});
