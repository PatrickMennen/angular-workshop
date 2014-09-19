app.factory('tasks', function(){
	var db = new PouchDB('tasks');

	return {
		getAll: function(callback) {
			db.allDocs({ include_docs: true }, function(error, response) {
				callback(response.rows.map(function(row) { return row.doc; }));
			});
		},

		update: function(task) {
			db.put(task, task._id, task._rev);
		},

		create: function(task) {
			db.post(task);
		},

		remove: function(task) {
			db.remove(task);
		},

		watchChanges: function(callback) {
			db.changes({ since: 'now', live: true }).on('change', function(change) { callback(change); });
		}
	};
});