'use strict';

/**
 * @ngdoc overview
 * @name easyMoveApp
 * @description
 * # easyMoveApp
 *
 * Main module of the application.
 */
angular
  .module('easyMoveApp', [
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
        templateUrl: 'views/main.html',
        controller: 'RecentsCtrl',
        controllerAs: 'recents'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/recents', {
        templateUrl: 'views/recents.html',
        controller: 'RecentsCtrl',
        controllerAs: 'recents'
      })
      /*.when('/state-detail', {
        templateUrl: 'views/state-detail.html',
        controller: 'RecentsCtrl',
        controllerAs: 'recents'
      })*/
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'RecentsCtrl',
        controllerAs: 'recents'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
