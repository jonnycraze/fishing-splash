(function(angular) {
	myApp.directive('fcFooter', function() {
		return {
			restrict: 'AE',
			transclude: true,
			templateUrl: 'templates/fcFooterTemplate.html',
			replace: false
		}
	});	
})(window.angular);