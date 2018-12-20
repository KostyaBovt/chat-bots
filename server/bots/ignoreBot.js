const config = {
    secret: 'ignore-bot-secret-for-auth'
}

exports.init = function() {
    const ignoreBot = require('./BaseBot')();
    
    ignoreBot.init({ secret: config.secret });

    ignoreBot.onMessage(message => {
        // Ignoring...
    });
}