app.controller('tasksController', ['$scope', 'tasks', function($scope, tasks){
	$scope.add = function() {
		var task = {
			title: $scope.task,
			done: false
		};

		tasks.create(task);
	};

	tasks.watchChanges(function (changes) {
		tasks.getAll(function(tasks) {
			$scope.$apply(function() {
				$scope.tasks = tasks;
				console.log(tasks);
			});
		});
	});

	$scope.updateTask = function(task) {
		tasks.update(task);
	};

	$scope.removeTask = function(task) {
		tasks.remove(task);
	};
}]);