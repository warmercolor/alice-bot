const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Mostra a lista de comandos e funcionalidades automatizadas'),

	async execute(interaction) {
		const commandsEmbed = new EmbedBuilder()
			.setColor('#d0bfff')
			.setTitle('Comandos do Bot')
			.setDescription('Aqui estão alguns dos comandos que você pode usar:')
			.addFields(
				{ name: '/gitcommands', value: 'Mostra uma lista de comandos Git úteis, com descrições breves de cada um.' },
				{ name: '/github', value: 'Busca os 5 principais repositórios de um tópico específico no GitHub, ordenados por estrelas.' },
				{ name: '/gpt', value: 'Fornece uma resposta rápida de um modelo GPT.' },
				{ name: '/ping', value: 'Verifica a latência do bot.' },
				{ name: '/resources', value: 'Retorna um link útil de aprendizado relacionado a um tópico fornecido.' },
				{ name: '/semanticommits', value: 'Apresenta uma lista das convenções semânticas para mensagens de commit.' },
			);

		const autoFeaturesEmbed = new EmbedBuilder()
			.setColor('#d0bfff')
			.setTitle('Funcionalidades Automatizadas')
			.setDescription('Aqui estão algumas das funcionalidades automatizadas do bot:')
			.addFields(
				{ name: 'Problema do Codeforces', value: 'A cada dia, às 7h, o bot buscará um problema recente do Codeforces e postará em dois canais específicos.' },
			);

		await interaction.reply({ embeds: [commandsEmbed, autoFeaturesEmbed] });
	},
};
