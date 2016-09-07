'use strict';

// imports
var angular = require('angular');
require('ionic-npm/js/ionic');
require('ionic-npm/js/ionic-angular');
require('angular-ui-router');
require('angular-animate');
require('angular-sanitize');
//require('ng-cordova');

// Application routing and startup
var Router  = require('./router');
var startUp = require('./startUp');

// Application modules
require('./components/menu/menu');
require('./components/home/home');

// application definition
var app = angular.module('app', [
	'ionic',
	'app.menu',
	'app.home'
]);

// application routing configuration
app.config([
	'$stateProvider',
	'$urlRouterProvider', 
	Router
]);

// application startUp
app.run(['$ionicPlatform', startUp]);