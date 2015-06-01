'use strict';

// Router class
function Router($stateProvider,$urlRouterProvider) {

	$stateProvider
	.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: '/menu/templates/menu.html',
    controller: 'MenuCtrl'
    })
  .state('app.home', {
    url: '/home',
    views: {
       'menuContent': {
          templateUrl: '/home/templates/home.html',
           controller: 'HomeCtrl'
        }
      }
    })
    .state('app.about', {
      url: '/about',
      views: {
       'menuContent': {
          templateUrl: '/about/templates/about.html',
          controller: 'AboutCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise("/app/home");// Important!
}

module.exports = Router;