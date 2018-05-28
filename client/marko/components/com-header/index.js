const defineComponent = require('marko-widgets').defineComponent;

module.exports = defineComponent({
    template: require('./template.marko'),
    getTemplateData: function (state, input) {
        const Logo  = input.title; 
        let AvailableRegistrations = true;
        return {
            AvailableRegistrations, Logo
        };
    },
    closeDialog: function(event, el) 
    {
        $('#registerdialog').modal('hide');
    },
    saveDialog: function(event, el)
    {
        let email = $('#email_field').val(), password = $('#password').val();
        $(".modal .result").html('Email: ' + email + ' Password: ' + password);
    }
});
