/* global app:true */
/* exported app */

'use strict';

/**
 * @ngdoc overview
 * @name codeMeedApp
 * @description
 * # codeMeedApp
 *
 * Main module of the application.
 */
var app = angular
  .module('codeMeedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .constant('FIREBASE_URL', 'https://intense-inferno-7123.firebaseio.com')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
      })
      .when('/register', {
        templateUrl: '/views/register.html',
        controller: 'AuthCtrl',
        resolve: {
          user: function(Auth) {
            return Auth.resolveUser();
          }
        }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        resolve: {
          user: function(Auth) {
            return Auth.resolveUser();
          }
        }
      })
      .when('/users/:userId', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/upload', {
        templateUrl: 'views/upload.html',
      })
      .when('/edit/:postId', {
        templateUrl: 'views/edit.html',
        controller: 'PostsCtrl'
      })
      .when('/editComment/:postId/:commentId', {
        templateUrl: 'views/editComment.html',
        controller: 'PostViewCtrl'
      })
      .when ('/follow/:userId', {
        templateUrl:'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
