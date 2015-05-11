(function() {

    'use strict';

    var app = angular.module('formlyExample', ['formly', 'formlyBootstrap']);

    app.run(function(formlyConfig) {
        formlyConfig.setType({
            name: 'input',
            templateUrl: 'input.html'
        });
    });

    app.controller('MainCtrl', function MainCtrl() {
        var vm = this;
        vm.model = {};
        vm.options= {
            formState: {
                foo: 'bar'
            }
        }
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