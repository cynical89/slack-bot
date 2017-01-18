module.exports.parseUser = function parseUser(data, users) {
    for (const user of users) {
        if (user.id === data.user) {
            data.user = user.name;
            return data;
        }
    }
};