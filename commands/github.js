const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder().setName('github').setDescription('Get the top 5 GitHub repositories for a given topic'),

	async execute(interaction) {
		const topic = interaction.options.getString('topic');

		try {
			const response = await fetch(`https://api.github.com/search/repositories?q=topic:${topic}&sort=stars&order=desc`, {
				headers: {
					'Accept': 'application/vnd.github.mercy-preview+json',
				},
			});
			const data = await response.json();

			if (data.items.length === 0) {
				await interaction.reply('No repositories found for that topic.');
			}
			else {
				let reply = 'Here are the top 5 repositories:\n';
				for (let i = 0; i < Math.min(5, data.items.length); i++) {
					const repo = data.items[i];
					reply += `**[${repo.full_name}](${repo.html_url})** - ${repo.stargazers_count} stars\n`;
				}
				await interaction.reply(reply);
			}
		}
		catch (error) {
			console.error(error);
			await interaction.reply('Oops! Something went wrong.');
		}
	},
};
