'use strict';

/**
 * @ngdoc function
 * @name codeMeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codeMeedApp
 */
angular.module('codeMeedApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
