'use strict';

/**
 * Router class
 */
function Router($stateProvider, $urlRouterProvider) {

  $stateProvider
  
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: '/components/menu/controllers/menu.html',
    controller: 'MenuCtrl as vm'
  })
  
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: '/components/home/controllers/home.html',
        controller: 'HomeCtrl as vm'
      }
    }
  })
  
  .state('app.about', {
    url: '/about',
      views: {
        'menuContent': {
          templateUrl: '/components/about/controllers/about.html',
          controller: 'AboutCtrl as vm'
      }
    }
  });
  
  $urlRouterProvider.otherwise("/app/home");
}

module.exports = Router;