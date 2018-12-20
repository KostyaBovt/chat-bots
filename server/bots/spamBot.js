const config = {
    secret: 'spam-bot-secret-for-auth'
}

exports.init = function() {
    const spamBot = require('./BaseBot')();

    const spamList = [];
    
    spamBot.init({ secret: config.secret });

    spamBot.onUserConnectedEvent(user => {
        spamList.push(user);
    });

    spamBot.onUserDisconnected(userId => {
        const index = spamList.findIndex(user => user.id === userId);
        if (index != -1) {
            spamList.splice(index, 1);
        }
    });

    spamBot.onMessage(message => {
        const { authorId } = message;
        spamBot.emitConversationSeen(authorId);
    });

    (function spamLoop() {
        const rand = Math.floor(Math.random() * (120000 - 10000 + 1)) + 10000;

        setTimeout(function() {
            spamList.forEach(user => {
                if (!user.isBot) {
                    spamBot.sendMessage('spam', user.id);
                }
            });
            spamLoop();  
        }, rand);
    }());
}