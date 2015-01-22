module.exports = function(Followers) {

	Followers.beforeSave = function(next, model) {
		console.log('beforeSave#Followers');

		model.created = Date.now();

		next();
	};

	Followers.afterSave = function(next) {
		console.log('AfterSave#Followers');

		console.log(this.fromUserId);
		console.log(this.toUserId);

		next();
	};
};
