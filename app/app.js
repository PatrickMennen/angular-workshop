var app = angular.module('todo', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/tasks', {
		controller: 'tasksController',
		templateUrl: 'app/views/tasks.html'
	});

	$routeProvider.otherwise({
		redirectTo: '/tasks'
	});
}]);