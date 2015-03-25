'use strict';
app.controller('PostsCtrl', function ($scope, $location, Post, Auth, $routeParams) {
	$scope.posts = Post.all;
	$scope.user = Auth.user;

	if($routeParams.postId)
	{
		$scope.post = Post.get($routeParams.postId)
	}

	$scope.deletePost = function (post) {
		Post.delete(post);
		
	};

	$scope.updatePost = function () {
		$scope.post.$save();
		$location.path('#/');
	};

});