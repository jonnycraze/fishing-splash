var myApp = angular.module('fcWebsite', [
	'ngRoute'
]);
myApp.config(['$routeProvider', '$locationProvider', 
function($routeProvider, $locationProvider) {
	$routeProvider
		//// =======================================================================================
		//// home page
		//// =======================================================================================
		.when('/', { 
			templateUrl: '../views/home.html',
			controller: 'mainController',
			controllerAs: 'vm'
		});


	$locationProvider.html5Mode(true);
}]);