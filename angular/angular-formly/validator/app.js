(function() {

    'use strict';

    var app = angular.module('formlyExample', ['formly', 'formlyBootstrap']);

    app.controller('MainCtrl', function MainCtrl($timeout) {
        var vm = this;
        var takenNames = ['foo', 'bar', 'Joe'];
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
                key: 'ipAddress',
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
            },
            {
                type: 'input',
                key: 'name',
                templateOptions: {
                    label: "Your name"
                },
                validators: {
                    isUnique: function($viewValue, $modelValue, scope){
                        return $timeout(function(){
                            var value = $viewValue || $modelValue;
                            if(takenNames.indexOf(value) !== -1){
                                throw new Error('Not Unique');
                            }else{
                                return 'Unique';
                            }
                        }, 1000);
                    }
                }
            }
        ];
    });

    function validateIpAddress(ipAddress){
        return /(\d{1,3}\.){3}(\d){1,3}/.test(ipAddress);
    }

})();