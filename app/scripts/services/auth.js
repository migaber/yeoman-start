'use strict';

/**
 * @ngdoc service
 * @name xphotoApp.Auth
 * @description
 * # Auth
 * Factory in the xphotoApp.
 */
 angular.module('xphotoApp')
 .factory('Auth',['$http', '$rootScope', '$q', function($http, $rootScope, $q) {

  var api_base = "http://xphoto.loc/";
    // Public API here
    return {
      login: function () {
        return $http.post(api_base + 'auth/login', {
          'email' : 'email',
          'password' : 'password'
        }).then(function(d){
          return (d.data.status === true) ? d.data : $q.reject(d.data);
        });
      }
    };
  }]);
