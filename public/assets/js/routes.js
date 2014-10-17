angular.module('myApp').config(["$stateProvider", "$urlRouterProvider", "AccessLevels", function($stateProvider, $urlRouterProvider, AccessLevels){
	$urlRouterProvider.otherwise('/');
}]);