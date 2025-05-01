const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.reply('Pong !');
    }
});

client.on('messageCreate', message => {
    if (message.content === '!hello') {
        message.reply('Bonjour ! 👋');
    }
});

client.login(process.env.TOKEN);