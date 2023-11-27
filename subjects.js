// subjects.js

// Define an array of subjects with associated information
const subjects = [
    {
        name: 'Mathematics',
        description: 'The study of numbers, quantities, and shapes.',
        resources: ['Khan Academy', 'Wolfram Alpha'],
    },
    {
        name: 'History',
        description: 'The study of past events, particularly in human affairs.',
        resources: ['History.com', 'BBC History'],
    },
    {
        name: 'Biology',
        description: 'The study of living organisms and their interactions.',
        resources: ['Biology Online', 'Nature Education'],
    },
    {
        name: 'Physics',
        description: 'The branch of science concerned with the nature and properties of matter and energy.',
        resources: ['Physics Classroom', 'HyperPhysics'],
    },
    {
        name: 'Chemistry',
        description: 'The study of the properties and behavior of matter.',
        resources: ['ChemCollective', 'Royal Society of Chemistry'],
    },
    {
        name: 'Computer Science',
        description: 'The study of computers and computational systems.',
        resources: ['Codecademy', 'GeeksforGeeks'],
    },
    {
        name: 'Literature',
        description: 'The written works, especially those considered of superior or lasting artistic merit.',
        resources: ['SparkNotes', 'Project Gutenberg'],
    },
    {
        name: 'Geography',
        description: 'The study of the physical features of the earth and its atmosphere.',
        resources: ['National Geographic', 'GeographyIQ'],
    },
    {
        name: 'Economics',
        description: 'The branch of knowledge concerned with the production, consumption, and transfer of wealth.',
        resources: ['Investopedia', 'Khan Academy - Economics'],
    },
    {
        name: 'Psychology',
        description: 'The scientific study of the mind and behavior.',
        resources: ['Simply Psychology', 'Psych Central'],
    },
    {
        name: 'Sociology',
        description: 'The study of society and human social behavior.',
        resources: ['Boundless Sociology', 'Sociology Guide'],
    },
    {
        name: 'Political Science',
        description: 'The systematic study of government and politics.',
        resources: ['CliffsNotes - Political Science', 'OpenStax - Political Science'],
    },
    {
        name: 'Philosophy',
        description: 'The study of fundamental questions about existence, knowledge, values, reason, mind, and language.',
        resources: ['Stanford Encyclopedia of Philosophy', 'Internet Encyclopedia of Philosophy'],
    },
    {
        name: 'Art',
        description: 'The expression of human creative skill and imagination.',
        resources: ['Khan Academy - Art History', 'Google Arts & Culture'],
    },
    {
        name: 'Music',
        description: 'The art of arranging sounds in time.',
        resources: ['MusicTheory.net', 'BBC Music'],
    },
    {
        name: 'Physical Education',
        description: 'The instruction of physical exercises and games.',
        resources: ['PE Central', 'SPARK Physical Education'],
    },
    {
        name: 'Languages',
        description: 'The study of languages and linguistics.',
        resources: ['Duolingo', 'BBC Languages'],
    },
    // Add more subjects as needed
];

module.exports = {
    name: 'subject',
    description: 'Get information about a specific subject',
    execute(message, args) {
        if (!args.length) {
            return message.reply('Please provide the name of a subject.');
        }

        const subjectName = args.join(' ').toLowerCase();
        const subject = subjects.find(sub => sub.name.toLowerCase() === subjectName);

        if (!subject) {
            return message.reply('Sorry, I don\'t have information on that subject.');
        }

        const embed = {
            title: subject.name,
            color: 0x0099ff,
            fields: [
                { name: 'Description', value: subject.description },
                { name: 'Resources', value: subject.resources.join(', ') },
            ],
        };

        message.channel.send({ embed });
    },
};
