const Slackbot = require("slackbots");
const co = require("co");
const config = require("./config.json");
const main = require("./controllers/main");
const duckHunt = require("./controllers/duckHunt");

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
	// bot.postMessageToChannel("bot-testing", `${config.bot.name} has awoken!`, params);
});

bot.on("message", (data) => {
	co(function* co() {
		const result = yield main.handler(data, users);
		if (result === undefined)
			return;
		if (result.isGame) {
			duckHunt.DuckHunt();
		} else {
			bot.postMessageToChannel("bot-testing", result, params);
		}
		});
});

bot.on("close", (data) => {
	console.log(`closing: ${data}`);
});

bot.on("open", (data) => {
	console.log(`opening: ${data}`);
});

bot.on("error", (data) => {
	console.log(`error: ${data}`);
});



module.exports.bot = bot;
module.exports.params = params;
