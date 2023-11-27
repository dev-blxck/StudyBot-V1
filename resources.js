// resources.js

// Define an array of general study resources
const generalResources = [
    {
        name: 'Khan Academy',
        url: 'https://www.khanacademy.org/',
        description: 'Free online courses, lessons, and practice.',
    },
    {
        name: 'Coursera',
        url: 'https://www.coursera.org/',
        description: 'Online courses from universities and organizations worldwide.',
    },
    // Add more general resources as needed
];

module.exports = {
    name: 'resources',
    description: 'List study resources',
    execute(message) {
        const embed = {
            title: 'Study Resources',
            color: 0x0099ff,
            fields: [],
        };

        // Add general study resources
        embed.fields.push({
            name: 'General Resources',
            value: generalResources.map(resource => `[${resource.name}](${resource.url}) - ${resource.description}`).join('\n'),
        });

        // Add subject-specific resources (you can customize this part based on your needs)
        // Example: embed.fields.push({ name: 'Mathematics', value: '[Resource 1](url1) - Description 1\n[Resource 2](url2) - Description 2' });

        message.channel.send({ embed });
    },
};
