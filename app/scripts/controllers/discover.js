'use strict';

app.controller('DiscoverCtrl', function ($scope, Profile) {
	Profile.getAll();

});