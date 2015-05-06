(function() {

    'use strict';

    var app = angular.module('formlyExample', ['formly', 'formlyBootstrap']);

    app.controller('MainCtrl', function MainCtrl() {
        var vm = this;
        vm.model = {};
        vm.fields = [
            {
                type: 'checkbox',
                key: "control",
                templateOptions: {
                    label: 'Click to show'
                }
            },
            {
                type: 'input',
                key: "nothing",
                templateOptions: {
                    label: "Show when checkbox checked"
                },
                expressionProperties: {
                    hide: function($viewValue, $modelValue, scope) {
                        console.log(scope.model.control);
                        return !scope.model.control;
                    }
                }
            }
        ];
    });

})();