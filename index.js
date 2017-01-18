const Slackbot = require("slackbots");
const co = require("co");
const config = require("./config.json");
const main = require("./controllers/main");

const bot = new Slackbot({
	token: config.bot.token,
	name: config.bot.name
});

let users;

const params = {
	icon_emoji: ":panda_face:"
};

bot.on("start", () => {
	co(function* co() {
		users = yield bot.getUsers();
		users = users.members;
	});
	console.log(`${config.bot.name} is listening...!`);
	bot.postMessageToChannel("bot-testing", `${config.bot.name} has awoken!`, params);
});

bot.on("message", (data) => {
	co(function* co() {
		const result = yield main.handler(data, users);
		if (result === undefined)
			return;

		bot.postMessageToChannel("bot-testing", result, params);
		});
});
