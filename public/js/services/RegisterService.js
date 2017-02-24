myApp.service('RegisterService', ['$q', function($q) {
	var privateRegistrations = [];
	var service = {
		register: function (data) {
			var defer = $q.defer();
			var rejected = false;
			for(var i in privateRegistrations) {
				if (data.email === privateRegistrations[i].email) {
					defer.reject("That email has already been registered!");
					rejected = true;
					break;
				}
			}
			if (!rejected) {
				privateRegistrations.push(data);
				defer.resolve(privateRegistrations);
			}

			return defer.promise;
		}
	};

	return service;
}]);