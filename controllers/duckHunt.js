const common = require("../helpers/common");
const config = require("../config.json");
const bot = require("../index.js");

module.exports.DuckHunt = function DuckHunt() {
	const time = common.getRandomInt(config.duckHunt.minTime, config.duckHunt.maxTime);
	setTimeout(DuckHunt, time);
	bot.bot.postMessageToChannel("bot-testing", "Spawning a ducky!", bot.params);
}
