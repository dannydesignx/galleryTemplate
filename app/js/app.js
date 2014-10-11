'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
	'ngAnimate',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'ArticleListCtrl'});
  $routeProvider.when('/gallery', {templateUrl: 'partials/gallery.html', controller: 'GalleryCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
