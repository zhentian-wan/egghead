(function() {

    'use strict';

    var app = angular.module('formlyExample', ['formly', 'formlyBootstrap']);

    app.controller('MainCtrl', function MainCtrl() {
        var vm = this;
        vm.model = {};
        vm.fields = [
            {
                type: 'input',
                key: "firstName",
                templateOptions: {
                    label: 'Enter your first name',
                    required: true
                },
                expressionProperties: {
                    'templateOptions.disable': function($viewValue, $modelValue, scope) {
                        return !scope.model.firstName;
                    }
                }
            }
        ];
    });

})();