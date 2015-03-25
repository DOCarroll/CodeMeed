'use strict';

app.controller('PostViewCtrl', function ($scope, $routeParams, Post, Auth, $location) {
	$scope.post = Post.get($routeParams.postId);
	$scope.comments = Post.comments($routeParams.postId);

	$scope.user = Auth.user;
	$scope.signedIn = Auth.signedIn;
	if($routeParams.commentId)
	{
		$scope.comment = Post.comment($routeParams.postId, $routeParams.commentId);
	}

	$scope.addComment = function (){
		if(!$scope.commentText || $scope.commentText === ''){
			return;
		}

		var comment = {
			text: $scope.commentText,
			creator: $scope.user.profile.username,
			creatorUID: $scope.user.uid
		};
		$scope.comments.$add(comment);

		$scope.commentText = '';
	};

	$scope.editComment = function () {
		$scope.comment.$save();
		$location.path('/posts/' + $routeParams.postId);
	};

	$scope.deleteComment = function (comment) {
		$scope.comments.$remove(comment);

	};

});