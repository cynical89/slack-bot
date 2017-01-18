const common = require("../helpers/common");

module.exports = {
    handler: function handler(data, users) {
        if (data.type === "message" && data.user !== undefined) {
            const payload = common.parseUser(data, users.members);
            return `${payload.user} said "${payload.text}"`;
        }
    }
};