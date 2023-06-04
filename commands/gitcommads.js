const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const exampleEmbed = new EmbedBuilder()
	.setColor('DarkOrange')
	.setTitle('Git Commads')
	// .setAuthor({ name: 'Git Commads', iconURL: 'https://i.imgur.com/ZjtyCv2.png', url: 'https://discord.js.org' })
	.setDescription('Git commands are a series of instructions used to perform specific operations within the Git environment.')
	.setThumbnail('https://cdn-icons-png.flaticon.com/512/4494/4494748.png')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: '$ git init [project-name]', value: 'Creates a new local repository with a specified name', inline: true },
		{ name: '$ git clone [url]', value: 'Downloads a project and its entire version history', inline: true },
		{ name: '$ git stash', value: 'Temporarily stores all modified tracked files', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '$ git status', value: 'Review edits and create a commit transaction', inline: true },
		{ name: '$ git add [file]', value: 'Snapshots a file in preparation for versioning', inline: true },
		{ name: '$ git commit -m "[message]"', value: 'Permanently records the file snapshot in version history', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '$ git branch', value: 'Lists all local branches in the current repository', inline: true },
		{ name: '$ git branch [branch-name]', value: 'Creates a new branch', inline: true },
		{ name: '$ git switch -c [branch-name]', value: 'Switches to the specified branch and updates the working directory', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '$ git merge [branch-name]', value: 'Combines the specified branch history with the current branch', inline: true },
		{ name: '$ git push [alias] [branch]', value: 'Sends all local branch commits to GitHub', inline: true },
		{ name: '$ git pull', value: 'Downloads history and incorporates changes', inline: true },
	);

module.exports = {
	data: new SlashCommandBuilder().setName('gitcommads').setDescription('Remember and descriptions commands git!'),

	async execute(interaction) {
		await interaction.reply({ embeds: [exampleEmbed] });
	},
};