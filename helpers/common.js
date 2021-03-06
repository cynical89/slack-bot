module.exports.parseUser = function parseUser(data, users) {
	for (const user of users) {
		if (user.id === data.user) {
			data.user = user.name;
			return data;
		}
	}
};

module.exports.getRandomInt = function getRandomInt(min, max, test = false) {
	if (test === true) {
		return min;
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
