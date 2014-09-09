app.controller('tasksController', ['$scope', function($scope){
	$scope.tasks = [
		{ title: 'Get milk', done: true },
		{ title: 'Write AngularJS tutorial code', done: false },
		{ title: 'Some other random task', done: false }
	];

	$scope.add = function() {
		$scope.tasks.push({
			title: $scope.task,
			done: false
		});

	};
}]);