# TemplateOptions

Not only set validators, can also set events.

```
(function() {

    'use strict';

    var app = angular.module('formlyExample', ['formly', 'formlyBootstrap', 'ngNotify']);

    app.controller('MainCtrl', function MainCtrl(ngNotify) {
        var vm = this;

        vm.model = {};
        vm.fields = [
            {
                type: 'input',
                key: "firstName",
                templateOptions: {
                    label: 'Enter your first name',
                    required: true,
                    onClick: function($viewValue, $modelValue, scope){
                        ngNotify.set('Your notification message goes here!');
                    }
                    //onClick: 'model.lastName = "Zhentian"'
                },
               validators: {
                   noBob: '$viewValue !== "Bob"'
               }
            },
            {
                type: 'input',
                key: 'lastName',
                defaultValue: 'Bob',
                templateOptions: {
                    label: 'Enter your last name',
                    required: true,
                    minlength: 3,
                    maxlength: 12
                }
            }
        ];
    });
})();
```