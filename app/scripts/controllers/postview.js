'use strict';

app.controller('PostViewCtrl', function ($firebase, $scope, $routeParams, Post, Profile, Auth, $location) {
	$scope.posts = Post.all;
	$scope.post = Post.get($routeParams.postId);
	$scope.comments = Post.comments($routeParams.postId);
	$scope.postId = $routeParams.postId;

	$scope.user = Auth.user;
	$scope.signedIn = Auth.signedIn;
	if($routeParams.commentId)
	{
		$scope.comment = Post.comment($routeParams.postId, $routeParams.commentId);
	}

	$scope.addComment = function (){
		var profileRefBase = new Firebase('https://intense-inferno-7123.firebaseio.com/profile/');
		var profileRef = profileRefBase.child($scope.user.uid);
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
		if($scope.post.language == 'Python'){
			var userScore = profileRef.child('devscorePython');
			userScore.transaction(function(devscorePython){
				return devscorePython+5;
			});

		}
		else if($scope.post.language == 'Php'){
			var userScore = profileRef.child('devscorePhp');
			userScore.transaction(function(devscorePhp){
				return devscorePhp+5;
			});
		}
		else if($scope.post.language == 'Ruby'){
			var userScore = profileRef.child('devscoreRuby');
			userScore.transaction(function(devscoreRuby){
				return devscoreRuby+5;
			});
		}
		else if($scope.post.language == 'Javascript'){	
			var userScore = profileRef.child('devscoreJavascript');
			userScore.transaction(function(devscoreJavascript){
				return devscoreJavascript+5;
			});
		}

		console.log(Auth.user.profile.devscorePython);
	};

	$scope.editComment = function () {
		$scope.comment.$save();
		$location.path('/posts/' + $routeParams.postId);
	};

	$scope.deleteComment = function (comment) {
		$scope.comments.$remove(comment);

	};

	$scope.complete = function (post) {
		var profileRefBase = new Firebase('https://intense-inferno-7123.firebaseio.com/profile/');
		var profileRef = profileRefBase.child($scope.user.uid);

		var postBase = new Firebase('https://intense-inferno-7123.firebaseio.com/posts/');
		var posts = $firebase(postBase).$asArray();
		console.log(posts);
		console.log(post);
		if($scope.post.language == 'Python'){
			var userScore = profileRef.child('devscorePython');
			userScore.transaction(function(devscorePython){
				return devscorePython+100;
			});

		}
		else if($scope.post.language == 'Php'){
			var userScore = profileRef.child('devscorePhp');
			userScore.transaction(function(devscorePhp){
				return devscorePhp+100;
			});
		}
		else if($scope.post.language == 'Ruby'){
			var userScore = profileRef.child('devscoreRuby');
			userScore.transaction(function(devscoreRuby){
				return devscoreRuby+100;
			});
		}
		else if($scope.post.language == 'Javascript'){	
			var userScore = profileRef.child('devscoreJavascript');
			userScore.transaction(function(devscoreJavascript){
				return devscoreJavascript+100;
			});
			
			
		}

		return posts.$remove(post.child($scope.postId));
		
	};

});