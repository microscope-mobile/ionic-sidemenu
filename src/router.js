'use strict';

/**
 * Router class
 */
function Router($stateProvider, $urlRouterProvider) {

  $stateProvider
  
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'components/menu/controllers/menu.html',
    controller: 'MenuCtrl as vm'
  });
  
  $urlRouterProvider.otherwise('/app/home');
}

module.exports = Router;