(function(angular) {
	myApp.directive('fcFormMessages', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/fcFormMessages.html',
			replace: true,
			scope: {
				form: '=fcForm',
				successMsg: '=onSuccess'
			}
		}
	});	
})(window.angular);