exports.definition = {
	config: {
		columns: {
		    "id": "int",
		    "titleF": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "article"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};