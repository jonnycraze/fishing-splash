(function(angular) {
	myApp.directive('fcLakes', function() {
		return {
			restrict: 'AE',
			transclude: true,
			templateUrl: 'templates/fcLakesTemplate.html',
			replace: false
		}
	});	
})(window.angular);