const fetch = require('node-fetch');
const cron = require('node-cron');
const { Client, Intents } = require('discord.js');

const dotenv = require('dotenv');
dotenv.config();
const { TOKEN, CHANNEL_ID_ALICES, CHANNEL_ID_NOTES } = process.env;

const client = new Client({ intents: [Intents.FLAGS.Guilds, Intents.FLAGS.GuildMessages] });

client.once('ready', () => {
	console.log('Ready!');

	cron.schedule('0 7 * * *', async () => {
		try {
			const response = await fetch('https://codeforces.com/api/problemset.recentStatus?count=1');
			const data = await response.json();
			const problem = data.result[0].problem;
			const message = `Problem: ${problem.name}\nLink: https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`;

			const channelAlices = client.channels.cache.get(CHANNEL_ID_ALICES);
			if (channelAlices) {
				channelAlices.send(message);
			}

			const channelNotes = client.channels.cache.get(CHANNEL_ID_NOTES);
			if (channelNotes) {
				channelNotes.send(message);
			}
		}
		catch (error) {
			console.error(error);
		}
	});
});

client.login(TOKEN);
