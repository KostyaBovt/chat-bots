const mongoose = require('mongoose');
const User = mongoose.model('User');

const bots = [
    {
        name: 'Echo Bot',
        avatar: 'https://discordapp.com/assets/20d185289ca0178b8dd30d7605f6dc72.svg',
        bio: "I will repeat, i like to repeat",
        isOnline: false,
        secret: 'echo-bot-secret-for-auth'
    },
    {
        name: 'Ignore Bot',
        avatar: 'https://discordapp.com/assets/20d185289ca0178b8dd30d7605f6dc72.svg',
        bio: "Don't bother me",
        isOnline: false,
        secret: 'ignore-bot-secret-for-auth'
    },
    {
        name: 'Reverse Bot',
        avatar: 'https://discordapp.com/assets/20d185289ca0178b8dd30d7605f6dc72.svg',
        bio: "taeper ot ekil i ,taeper lliw I",
        isOnline: false,
        secret: 'reverse-bot-secret-for-auth'
    },
    {
        name: 'Spam Bot',
        avatar: 'https://discordapp.com/assets/20d185289ca0178b8dd30d7605f6dc72.svg',
        bio: '',
        isOnline: false,
        secret: 'spam-bot-secret-for-auth'
    },
];

exports.importBotsToDB = function(callback) {
    User.collection.insertMany(bots, (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, result)
        }
    });
}