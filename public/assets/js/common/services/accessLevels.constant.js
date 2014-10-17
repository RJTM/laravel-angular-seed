/**
*
* In this file we define the Access Levels corresponding to each type of user
* This is relevant if we want to make some type of Authentication and Authorization
*
**/

angular.module('myApp.common').constant('AccessLevels', {
	anon: 0,
	user: 1,
	admin: 2
});