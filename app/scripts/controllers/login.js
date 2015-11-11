'use strict';

/**
 * @ngdoc function
 * @name xphotoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the xphotoApp
 */
angular.module('xphotoApp') .controller('LoginCtrl', ['$scope', '$auth', function (scope, $auth ) {

  scope.credentials = {
    email: '',
    password: ''
  };
  scope.log_in = function(){
    var inputs = scope.credentials;
     $auth.login(inputs).then(function(data) {
          scope.login.success = true
      }, function(data){
        scope.login.error = data.data;
      });
  };
}]);
