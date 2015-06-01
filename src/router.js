'use strict';

// Router class
function Router($stateProvider,$urlRouterProvider) {

	$stateProvider
	.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: '/menu/controllers/menu.html',
    controller: 'MenuCtrl'
    })
  .state('app.home', {
    url: '/home',
    views: {
       'menuContent': {
          templateUrl: '/home/controllers/home.html',
           controller: 'HomeCtrl'
        }
      }
    })
    .state('app.about', {
      url: '/about',
      views: {
       'menuContent': {
          templateUrl: '/about/controllers/about.html',
          controller: 'AboutCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise("/app/home");// Important!
}

module.exports = Router;