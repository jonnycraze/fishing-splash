myApp.service('RegisterService', ['$q','$http', function($q,$http) {
	var service = {
		register: function (data) {
			var defer = $q.defer();

			$http.post('http://fishingclashapi-91763.onmodulus.net/api/alpha-register', data).success(function(data) {
				defer.resolve(data);
			}).error(function(err) {
				defer.reject("That email has already been registered!");
			});

			return defer.promise;
		}
	};

	return service;
}]);
