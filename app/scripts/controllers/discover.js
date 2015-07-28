'use strict';

app.controller('DiscoverCtrl', function ($scope, $routeParams, Profile, Auth) {
	var profileRefBase = new Firebase('https://intense-inferno-7123.firebaseio.com/profile/');
	$scope.profiles = Profile.getAll();
	$scope.userid = Auth.user;	
	console.log($scope.profiles);
	console.log($scope.userid);

});