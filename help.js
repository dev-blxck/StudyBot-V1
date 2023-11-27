module.exports = {
    name: 'help',
    description: 'List all available commands',
    execute(message, args, client) {
        const embed = {
            title: 'StudyBot Commands',
            color: 0x0099ff,
            fields: [],
        };

        client.commands.forEach(command => {
            embed.fields.push({
                name: `!${command.name}`,
                value: command.description,
            });

            if (command.aliases) {
                embed.fields.push({
                    name: 'Aliases',
                    value: command.aliases.map(alias => `!${alias}`).join(', '),
                });
            }

            embed.fields.push({
                name: '\u200b', // Zero-width space
                value: '\u200b',
            });
        });

        message.channel.send({ embed });
    },
};
