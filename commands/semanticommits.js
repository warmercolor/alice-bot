const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const exampleEmbed = new EmbedBuilder()
	.setColor('DarkOrange')
	.setTitle('Semantic commits')
	// .setAuthor({ name: 'Git Commads', iconURL: 'https://i.imgur.com/ZjtyCv2.png', url: 'https://discord.js.org' })
	.setDescription('Semantic commits are a naming convention that provides clarity about the changes made in a commit, making it easier to read and understand the projects history.')
	.setThumbnail('https://cdn-icons-png.flaticon.com/512/4494/4494748.png')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'feat', value: 'New feature in the project, for example, functionality, service, endpoint, etc.', inline: true },
		{ name: 'refactor', value: 'Refactoring of some part of the code.', inline: true },
		{ name: 'fix', value: 'Error fixes that are causing bugs.', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'chore', value: 'Changes that do not affect the system or test files, such as adding files to git ignore, changes to eslint, etc.', inline: true },
		{ name: 'style', value: 'Formatting or code style changes that do not affect the system logic.', inline: true },
		{ name: 'build', value: 'Changes that impact the build process.', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'test', value: 'Creation or alteration of some test code.', inline: true },
		{ name: 'perf', value: 'Changes made to improve the projects performance, such as improving the database query, making a function more performant, etc.', inline: true },
		{ name: 'docs', value: 'Changes to the project documentation, such as the readme, swagger, etc.', inline: true },
	);


module.exports = {
	data: new SlashCommandBuilder().setName('semanticommits').setDescription('Remember and descriptions commands git!'),

	async execute(interaction) {
		await interaction.reply({ embeds: [exampleEmbed] });
	},
};