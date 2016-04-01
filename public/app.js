angular.module('bandApp',['ui.router', 'ngCart'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/homeTemp.html',
        controller: 'mainCtrl',

      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'views/adminTemp.html',
        controller: 'adminCtrl',
      })
      .state('about', {
        url: '/about',
        templateUrl:'views/aboutTemp.html',
        controller: 'mainCtrl',

      })
      .state('location', {
        url: '/location',
        templateUrl: 'views/locationTemp.html',
        controller: 'mapCtrl',

      })
      .state('instruments', {
        url: '/instruments',
        templateUrl: 'views/instrumentTemp.html',
        controller: 'mainCtrl',

      })
      .state('clarinetM', {
        url: '/clarinetM',
        templateUrl: 'views/clarinetMTemp.html',
        controller: 'mainCtrl',

      })
      .state('saxophoneM', {
        url: '/saxophoneM',
        templateUrl: 'views/saxophoneMTemp.html',
        controller: 'mainCtrl',

      })
      .state('fluteM', {
        url: '/fluteM',
        templateUrl: 'views/fluteMTemp.html',
        controller: 'mainCtrl',
      })
      .state('trumpetM', {
        url: '/trumpetM',
        templateUrl: 'views/trumpetMTemp.html',
        controller: 'mainCtrl',
      })
      .state('maintHome', {
        url: '/maintenance',
        templateUrl: 'views/maintHomeTemp.html',
        controller: 'mainCtrl'
      })

    })
