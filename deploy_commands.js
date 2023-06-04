const { REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const commands = [];

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

(async () => {
	try {
		console.log(`👉 Started refreshing (/ ${commands.length}) commands... 👈`);
		const rest = new REST({ version: '10' }).setToken(TOKEN);

		await rest.put(
			Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
			{ body: commands },
		);

		console.log('Commands registered successfully! 🔥');
	}
	catch (error) {
		console.error(error);
	}
})();
