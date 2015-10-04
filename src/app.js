'use strict';

// imports
var angular = require('angular');
require('angular-sanitize');
require('ionic-npm/js/ionic.bundle.min');
require('angular-ui-router');
require('angular-animate');
//require('ng-cordova');

// Application routing and startup
var Router  = require('./router');
var startUp = require('./startUp');

// Application modules
require('./components/menu/menu');
require('./components/home/home');
require('./components/about/about');

// application definition
var app = angular.module('app', [
	'ionic',
	'app.menu',
	'app.home',
	'app.about'
]);

// application routing configuration
app.config([
	'$stateProvider',
	'$urlRouterProvider', 
	Router
]);

// application startUp
app.run(startUp);