'use strict';

/**
 * @ngdoc function
 * @name codeMeedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the codeMeedApp
 */
angular.module('codeMeedApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
