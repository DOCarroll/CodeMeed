'use strict';

app.factory('Post', function ($resource) {
	return $resource('https://intense-inferno-7123.firebaseio.com/posts/:id.json');
});