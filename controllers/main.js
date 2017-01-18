const common = require("../helpers/common");
const command = require("../services/command");

const cmd1 = /^\!\w+/i;
const cmd2 = /^\.\w+/i;
let cmd;
let action;
let result;

module.exports = {
	handler: function* handler(data, users) {
		if (data.type === "message" && data.user !== undefined) {
			const json = common.parseUser(data, users);
			// does our message contain a command string?
			if(cmd1.test(json.text) === true) {
				cmd = json.text.match(cmd1);
				action = command.action(cmd[0]);
			}
			else if(cmd2.test(json.text) === true) {
				cmd = json.text.match(cmd2);
				action = command.action(cmd[0]);
			} else {
				return;
			}
			const i = json.text.indexOf(cmd[0]) + cmd[0].length + 1;
			result = yield action(json.text.substring(i));
			return result;
		}
	}
};
