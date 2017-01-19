

module.exports = {
	newGame: () => {
		const game = {
			isGame: true,
			enabled: true,
			active: true
		}
		return game;
	},
	toggleEnabled: (game) => {
		game.enabled = !game.enabled;
		return game;
	},
	toggleActive: (game) => {
		game.active = !game.active;
		return game;
	}
};
