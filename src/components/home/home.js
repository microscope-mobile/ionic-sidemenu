'use strict';

// Imports
var angular = require('angular');
var HomeCtrl  = require('./controllers/homeCtrl');
var AboutCtrl  = require('./controllers/AboutCtrl');
var Router  = require('./router');

// sub-module definition
var home = angular.module('app.home', []);
home.controller('HomeCtrl', [HomeCtrl]);
home.controller('AboutCtrl', [AboutCtrl]);

// module routing definition
home.config(['$stateProvider', Router]);

module.exports = home;