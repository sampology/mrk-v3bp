const defineComponent = require('marko-widgets').defineComponent;
const _Emitter = require('raptor-pubsub');

module.exports = defineComponent({
	template: require('./template.marko'),
	getInitialState: function(input) { 
		let renderHelper = 0;
		let results = null;
		let modal = null; // cand dau setstate efectiv fortez componenta sa reinitializeze cu acel model definit strict ca ce ii zic eu, corect ? 
		return { renderHelper, modal }
	},
	getTemplateData: function (state, input) {
		let { renderHelper, modal, results } = state;
		return { renderHelper, modal, results }
	},
	init: function() {
		const self = this;
		this.subscribeTo(_Emitter)	
		.on('openModal', function (object) {
			let { renderHelper } = self.state;
			renderHelper ++;
			return self.setState({ modal: object, renderHelper });	
		});
	},
	onUpdate: function() {
		let { modal } = this.state;
		let el = this.getEl('modal');
		$(el).modal({ backdrop: 'static' });        
	},
	closeDialog: function() {
		let el = this.getEl('modal');
		$(el).modal('hide');
	},
	saveModal: function() {
		let { modal } = this.state;
		let el = this.getEl('modal');
		$(el).modal('hide');
		const obiectul = [];
		modal.inputs.forEach(input => {
				let value = $('#' + input.name).val();
				let object = { field: input.name, value: value}
				obiectul.push(object);
		});
		return this.setState({ results: obiectul });	
	}
});

