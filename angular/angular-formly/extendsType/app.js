(function() {

    'use strict';

    var app = angular.module('formlyExample', ['formly', 'formlyBootstrap']);
    
    app.run(function(formlyConfig) {
        formlyConfig.setType({
            name: 'avengersSelect',
            extends: 'select',
            defaultOptions: {
                templateOptions: {
                    label: 'Favorite Avenger',
                    options: [
                        {name: 'Iron Man', value: 'iron_man'},
                        {name: 'Captain America', value: 'captain_america'},
                        {name: 'Black Widow', value: 'black_widow'},
                        {name: 'Hulk', value: 'hulk'},
                        {name: 'Thor', value: 'thor'}
                    ]
                }
            }
        });
    })

    app.controller('MainCtrl', function MainCtrl($timeout) {
        var vm = this;
        vm.model = {};
        vm.fields = [
            {
                type: 'avengersSelect',
                key: "avengersSelect"
            },
            {
                type: 'avengersSelect',
                key: "avengersSelect2",
                templateOptions: {
                    label: 'Favorite Avenger 2',
                    options: [
                        {name: 'Iron Man', value: 'iron_man'},
                        {name: 'Captain America', value: 'captain_america'},
                        {name: 'Black Widow', value: 'black_widow'},
                        {name: 'Hulk', value: 'hulk'},
                        {name: 'Thor', value: 'thor'}
                    ]
                }
            }

        ];
    });
})();