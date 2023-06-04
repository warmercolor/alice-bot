const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

const dotenv = require('dotenv');
dotenv.config();
const { TOKEN } = process.env;

const fs = require('node:fs');
const path = require('node:path');

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	}
	else {
		console.log(`[ERROR] Command ${filePath} is not a valid command.`);
	}
}

client.once(Events.ClientReady, c => {
	console.log(`🤖Ready! Logged in as ${c.user.tag}🔥`);
});
client.login(TOKEN);

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;
	const command = interaction.client.commands.get(interaction.commandName);
	if (!command) console.error('[ERROR] Command is not a valid command.');

	try {
		await command.execute(interaction);
	}
	catch (error) {
		console.error(`[ERROR]: ${error}`);
		await interaction.reply('❌ There was an error trying to execute this command! ❌');
	}
});