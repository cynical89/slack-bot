const axios = require("axios");
const config = require("../config.json");
const helpDoc = require("../helpers/help.json");
const duckHunt = require("../models/duckhunt");

module.exports = {
	action: (cmd) => {
		const command = cmd.substring(1);
		if (commands.hasOwnProperty(command) !== true) {
			return;
		}
		return commands[command];
	}
};

const commands = {
	h: function* h() {
		return getHelp();
	},
	help: function* help() {
		return getHelp();
	},
	we: function* we(data) {
		const result = yield getWeather(data);
			return result;
	},
	weather: function* weather(data) {
		const result = yield getWeather(data);
		return result;
	},
	startDuckHunt: function* startDuckHunt() {
			const game = duckHunt.newGame();
			return game;
	}
}

function* getWeather(data) {
		let location = yield axios.get(`http://api.wunderground.com/api/${config.bot.weather.key}/geolookup/q/${data}.json`);
		location = location.data.location;
		location = `${location.city}, ${location.state}, ${location.country}`;

		let result = yield axios.get(`http://api.wunderground.com/api/${config.bot.weather.key}/forecast/q/${data}.json`);
		result = result.data.forecast.simpleforecast.forecastday[0];

		const date = `${result.date.month}/${result.date.day}/${result.date.year}`
		const temps = `High (${result.high.fahrenheit}F/${result.high.celsius}C) Low (${result.low.fahrenheit}F/${result.low.celsius}C)`

		return `Weather for ${location} - ${date} : ${temps} - Conditions: ${result.conditions}`;
}

function getHelp() {
	return `${helpDoc.commands[0]}\n${helpDoc.commands[1]}\n${helpDoc.commands[2]}`;
}
