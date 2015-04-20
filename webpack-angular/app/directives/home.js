/**
 * Created by Answer1215 on 4/20/2015.
 */
module.exports = function(ngModule) {
    ngModule.directive('newHome', function() {
        return {
            restrict: 'E',
            scope: {},
            controller: function() {
                var vm = this;

                vm.greeting = "Hello Webpack!";
            },
            controllerAs: 'vm',
            templateUrl: 'directives/home.html'
        }
    });
};