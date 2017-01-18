# slack-bot
a bot for slack!

### Requirements
* [NodeJs](https://nodejs.org/en/)
* [Slack bot token](https://api.slack.com/services/new/bot)
* [Wunderground Api Token](https://www.wunderground.com/weather/api)


### Instructions

* Clone down this repo `git clone https://github.com/cynical89/slack-bot.git`

* Cd into the directory `cd slack-bot`

* Install dependencies `npm install`

* Make config and add config settings. 
Inside the directory there is a file named `config.example.json`. copy this file and rename it `config.json`. Open up this file and add your slack bot token and wunderground api token.

* Start it up `npm start`

* Enjoy!


### Current commands

* `!h` - `.h` - `!help` - `.help`
displays the commands and how their useage

* `!we` - `.we` - `!weather` - `.weather` - `also takes a paramer of zip code or city/state/country`
displays the current weather information
