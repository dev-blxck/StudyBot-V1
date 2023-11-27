const axios = require('axios');

module.exports = {
    name: 'ask',
    aliases: ['solve', 'question'],
    description: 'Ask a question using Brainly API',
    async execute(message, args) {
        if (!args.length) {
            return message.reply('Please provide a question to ask.');
        }

        const question = args.join(' ');

        try {
            const response = await axios.get(`https://brainly.com/api/28/api_answers?request=2&q=${encodeURIComponent(question)}`);
            const answerData = response.data.data[0];

            if (answerData) {
                const answer = answerData.content;
                message.channel.send(`**Question:** ${question}\n**Answer:** ${answer}`);
            } else {
                message.channel.send('Sorry, I couldn\'t find an answer to that question.');
            }
        } catch (error) {
            console.error(error);
            message.channel.send('An error occurred while fetching the answer.');
        }
    },
};
