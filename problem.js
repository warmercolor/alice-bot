const fetch = require('node-fetch');
const cron = require('node-cron');
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
	],
});

const dotenv = require('dotenv');
dotenv.config();
const { TOKEN, CHANNEL_ID_ALICES, CHANNEL_ID_NOTES } = process.env;

client.once('ready', () => {
	console.log('Ready!');

	cron.schedule('0 7 * * *', async () => {
		try {
			const response = await fetch('https://codeforces.com/api/problemset.recentStatus?count=1');
			const data = await response.json();
			const problem = data.result[0].problem;

			const exampleEmbed = new EmbedBuilder()
				.setColor(0xFF1493)
				.setTitle('Codeforces Problem')
				.setDescription(`Problem: ${problem.name}`)
				.setURL(`https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`);

			const channelAlices = client.channels.cache.get(CHANNEL_ID_ALICES);
			if (channelAlices) {
				channelAlices.send({ embeds: [exampleEmbed] });
			}

			const channelNotes = client.channels.cache.get(CHANNEL_ID_NOTES);
			if (channelNotes) {
				channelNotes.send({ embeds: [exampleEmbed] });
			}
		}
		catch (error) {
			console.error(error);
		}
	});
});

client.login(TOKEN);
