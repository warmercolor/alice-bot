const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder().setName('ping').setDescription('Check the bot\'s latency'),

	async execute(interaction) {
		const roundtripLatency = Date.now() - interaction.createdTimestamp;
		const apiLatency = interaction.client.ws.ping;

		await interaction.reply(`Pong! The round-trip latency is ${roundtripLatency}ms. The API latency is ${Math.round(apiLatency)}ms.`);
	},
};
