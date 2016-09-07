microscope mobile ionic-sidemenu
================================

microscope mobile starter kit with ionic sidemenu template

Requirements
------------

* npm
* gulp
* nodejs
* ionic CLI (optional)
* cordova CLI (optional)
* protractor
* mocha

Installation
------------

Install node.js:

[Download Node.js](http://nodejs.org/download/)

Install project dependencies:

	npm install
	
Install gulp (task runner):

	npm install gulp -g
	
Install ionic CLI:

	npm install ionic -g
	
Install cordova CLI:

	npm install cordova -g

Install selenium-standalone & protractor (test framework):

	npm install protractor -g

Update webdrivers:

	webdriver-manager update

install android platform:

	ionic platform add android

install android ios:

	ionic platform add ios

install mocha (test runner):

	npm install mocha -g

Commands
--------

Run web application:

	npm start

Run web application in development mode:

	npm run serve

Run end to end tests:

	npm run test

note: to enable testing on mobile device (IOS / Android) you can use [Appium](https://github.com/appium/appium) with protractor.
Check out documentation for protractor [mobile setup](https://github.com/angular/protractor/blob/master/docs/mobile-setup.md).

Run source code validation:

	npm run lint

Build web application:

	npm run build

Build android application:

	npm run build:android

Build ios application:

	npm run build:ios

Release web application:

	npm run release

Release android application:

	npm run release:android

Release ios application:

	npm run release:ios

Run on android device:

	npm run android

Run on IOS device:

	npm run ios    

Run on android emulator:

	npm run emulate:android

Run on ios emulator:

	npm run emulate:ios