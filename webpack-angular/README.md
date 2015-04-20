1. create package.json

 ```
 npm init
 ```   
  
  
2. install angular and webpack

 ```
 npm install angular webpack -D
 ```
  
  
3. create webpack.config.js file

  ```
  module.exports = {
    context: __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    }
  }
  ```
  
  
4. Using CommonJS way to load angular
  app\index.js
  
  ```
  var angular = require('angular');
  var ngModule = angular.module('app', []);

  require('./directives')(ngModule);
  ```

5. In directives dir, load home directive in index.js
 directives\indx.js

 ```
 module.exports = function(ngModule) {
    require('./home')(ngModule);
 };
 ```

directive\home.js
 ```
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
 ```

