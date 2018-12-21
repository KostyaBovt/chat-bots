const config = {
    secret: 'reverse-bot-secret-for-auth'
}

exports.init = function() {
    const reverseBot = require('./BaseBot')();
    
    console.log('Reverse Bot connecting to server...');
    reverseBot.init({ secret: config.secret });

    reverseBot.onMessage(message => {
        const { authorId, content } = message;

        reverseBot.emitConversationSeen(authorId);
        setTimeout(() => {
            reverseBot.emitTyping(authorId);
        }, 500);

        const response = content.split("").reverse().join("");
        setTimeout(() => {
            reverseBot.sendMessage(response, authorId);
        }, 3000);
    });
}