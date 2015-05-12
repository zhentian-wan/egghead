# defaultOptions

angular-formly allows you to keep your forms as DRY as possible. The optionsTypes property is one way of composing your field configurations to keep your forms light-weight and DRY.

```
(function() {

    'use strict';

    var app = angular.module('formlyExample', ['formly', 'formlyBootstrap']);

    app.run(function(formlyConfig){

        formlyConfig.setType({
            name: 'ipAddress',
            defaultOptions: {
                templateOptions: {
                    label: 'IP Address'
                },
                validators: {
                    ipAddress: function($viewValue, $modelValue, scope){
                        var value = $viewValue || $modelValue;
                        if(value){
                            return validateIpAddress(value);
                        }{
                            return true;
                        }
                    }
                }
            }
        });

        function validateIpAddress(value) {
            return value && /(\d{1,3}\.){3}\d{1,3}/.test(value);
        }
    });

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
               validators: {
                   noBob: '$viewValue !== "Bob"'
               }
            },
            {
                type: 'input',
                key: 'address1',
                optionsTypes: ['ipAddress']
            },
            {
                type: 'input',
                key: 'address2',
                optionsTypes: ['ipAddress']
            },
            {
                type: 'input',
                key: 'address3',
                optionsTypes: ['ipAddress']
            }
        ];
    });
})();
```