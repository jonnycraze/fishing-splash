(function(angular) {
	myApp.directive('fcAbout', function() {
		return {
			restrict: 'AE',
			transclude: true,
			templateUrl: 'templates/fcAboutTemplate.html',
			replace: false
		}
	});	
})(window.angular);