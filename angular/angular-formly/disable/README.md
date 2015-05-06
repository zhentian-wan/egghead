# disable

```
        <form name="vm.form" class="col-md-4" novalidate>
            <formly-form model="vm.model" fields="vm.fields">
                <button class="btn btn-primary" ng-disabled="vm.form.$invalid">Submit</button>
            </formly-form>
        </form>

```

```
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
```