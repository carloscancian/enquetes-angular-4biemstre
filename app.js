
angular.module('starter', ['ionic','controller.api', 'controller.api'])
angular
    .module('App',['ngRoute'])


    .config(function($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeController'
      })
      .when('/criar',{
        templateUrl: 'criar/index.html',
        controller: 'controller'
      })
      .when('/votar/:enqueteId',{
        templateUrl: 'votar/index.html',
        controller: 'votarController'
      })
    })

    .controller('AppController', function($scope) {


    });
