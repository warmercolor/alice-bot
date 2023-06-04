const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder().setName('resources').setDescription('Get learning resources').addStringOption(option => option.setName('topic').setDescription('The topic to get resources for').setRequired(true)),

	async execute(interaction) {
		const topic = interaction.options.getString('topic');
		const resources = {
			'python': { link: 'https://docs.python.org/3/tutorial/index.html', color: '#3776AB', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
			'django': { link: 'https://docs.djangoproject.com/', color: '#092E20', image: 'https://iconape.com/wp-content/png_logo_vector/django.png' },
			'flask': { link: 'https://flask.palletsprojects.com/', color: '#000000', image: 'https://www.pngkey.com/png/full/35-353143_flask-web-development-python-logo-white.png' },
			'javascript': { link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', color: '#F7DF1E', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
			'expressjs': { link: 'https://expressjs.com/', color: '#000000', image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
			'react': { link: 'https://reactjs.org/tutorial/tutorial.html', color: '#61DAFB', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
			'nextjs': { link: 'https://nextjs.org/learn', color: '#000000', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
			'angular': { link: 'https://angular.io/tutorial', color: '#B52E31', image: 'https://angular.io/assets/images/logos/angular/angular.svg' },
			'nestjs': { link: 'https://docs.nestjs.com/', color: '#E0234E', image: 'https://nestjs.com/img/logo_text.svg' },
			'vue': { link: 'https://vuejs.org/v2/guide/', color: '#4FC08D', image: 'https://vuejs.org/images/logo.png' },
			'mongodb': { link: 'https://docs.mongodb.com/manual/tutorial/', color: '#13AA52', image: 'https://www.mongodb.com/assets/images/global/favicon.ico' },
			'docker': { link: 'https://docs.docker.com/get-started/', color: '#2496ED', image: 'https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png' },
			'java': { link: 'https://docs.oracle.com/javase/tutorial/', color: '#007396', image: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
			'spring': { link: 'https://spring.io/guides', color: '#6DB33F', image: 'https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg' },
			'hibernate': { link: 'https://hibernate.org/orm/documentation/5.4/', color: '#59666C', image: 'https://hibernate.org/images/hibernate-logo.svg' },
			'csharp': { link: 'https://docs.microsoft.com/en-us/dotnet/csharp/', color: '#239120', image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/C_Sharp_logo.svg' },
			'.net': { link: 'https://dotnet.microsoft.com/learn', color: '#512BD4', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/.NET_Logo.svg' },
			'asp.net': { link: 'https://dotnet.microsoft.com/apps/aspnet', color: '#512BD4', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/.NET_Logo.svg' },
			'ruby': { link: 'https://www.ruby-lang.org/en/documentation/', color: '#CC342D', image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg' },
			'rails': { link: 'https://guides.rubyonrails.org/', color: '#CC0000', image: 'https://rubyonrails.org/images/rails-logo.svg' },
			'sinatra': { link: 'http://sinatrarb.com/documentation.html', color: '#000000', image: 'http://sinatrarb.com/images/logo.png' },
		};

		if (resources[topic]) {
			const embed = new MessageEmbed()
				.setTitle(`Resources for learning ${topic}`)
				.setColor(resources[topic].color)
				.setURL(resources[topic].link)
				.setThumbnail(resources[topic].image);
			await interaction.reply({ embeds: [embed] });
		}
		else {
			await interaction.reply(`Sorry, I don't have any resources for ${topic}.`);
		}
	},
};
