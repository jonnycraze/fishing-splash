(function(angular) {
	myApp.directive('fcHero', function() {
		return {
			restrict: 'AE',
			transclude: true,
			templateUrl: 'templates/fcHeroTemplate.html',
			replace: false
		}
	});	
})(window.angular);