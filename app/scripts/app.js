'use strict';

/**
 * @ngdoc overview
 * @name saludWebApp
 * @description
 * # saludWebApp
 *
 * Main module of the application.
 */
angular
  .module('saludWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      
      .when('/profileForm', {
        templateUrl: 'views/profileForm.html',
        controller: 'ProfileFormCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });



