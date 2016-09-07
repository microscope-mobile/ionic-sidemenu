'use strict';

/**
 * Router class
 */
function Router($stateProvider) {

    $stateProvider

        .state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'components/home/controllers/home.html',
                    controller: 'HomeCtrl as vm'
                }
            }
        })

        .state('app.about', {
            url: '/about',
            views: {
                'menuContent': {
                    templateUrl: 'components/home/controllers/about.html',
                    controller: 'AboutCtrl as vm'
                }
            }
        });

}

module.exports = Router;