/* eslint-disable no-mixed-spaces-and-tabs */
const { SlashCommandBuilder } = require('@discordjs/builders');
const openai = require('openai');
const dotenv = require('dotenv');
dotenv.config();
const { KEY_OPENAI } = process.env;

openai.apiKey = KEY_OPENAI;

module.exports = {
	data: new SlashCommandBuilder().setName('gpt').setDescription('Get a response from GPT'),

	async execute(interaction) {
		const question = interaction.options.getString('question');

		try {
			const gptResponse = await openai.Completion.create({
			  engine: 'text-davinci-003',
			  prompt: question,
			  max_tokens: 60,
			});

			await interaction.reply(gptResponse.data.choices[0].text.trim());
		}
		catch (error) {
			console.error(error);
			await interaction.reply('Oops! Something went wrong.');
		}
	},
};
