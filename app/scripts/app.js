'use strict';

/**
 * @ngdoc overview
 * @name xphotoApp
 * @description
 * # xphotoApp
 *
 * Main module of the application.
 */
angular
  .module('xphotoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'satellizer'
  ])
  .config(function ($routeProvider, $authProvider) {
    $authProvider.loginUrl = 'http://xphoto.loc/auth/login';
    $routeProvider
      .when('/',      {templateUrl: 'views/main.html',   controller: 'MainCtrl',    controllerAs: 'main'})
      .when('/login', {templateUrl: 'views/login.html',  controller: 'LoginCtrl',   controllerAs: 'login'})
      .when('/about', {templateUrl: 'views/about.html',  controller: 'AboutCtrl',   controllerAs: 'about'})
      .when('/login', {templateUrl: 'views/login.html',  controller: 'LoginCtrl',   controllerAs: 'login'})
      .otherwise({ redirectTo: '/' });
  });
