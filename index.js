const Discord = require('discord.js');
const express = require('express');

const client = new Discord.Client();
const app = express();
const { prefix, token, aliases } = require('./config.json');

client.commands = new Discord.Collection();
const fs = require('fs');

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);

    if (command.aliases) {
        command.aliases.forEach(alias => {
            client.commands.set(alias, command);
        });
    }
}

client.once('ready', () => {
    console.log('StudyBot is online!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);

    if (!command) return;

    try {
        command.execute(message, args, client);
    } catch (error) {
        console.error(error);
        message.reply('There was an error executing that command!');
    }
});

// Express route for a simple status endpoint
app.get('/status', (req, res) => {
    res.json({ status: 'StudyBot is online!' });
});

// Start the Express server on port 5000 and IP 0.0.0.0
const PORT = 5000;
const IP_ADDRESS = '0.0.0.0';

app.listen(PORT, IP_ADDRESS, () => {
    console.log(`Express server is running at http://${IP_ADDRESS}:${PORT}`);
});

client.login(token);
