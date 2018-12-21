const config = {
    secret: 'echo-bot-secret-for-auth'
}

exports.init = function() {
    const echoBot = require('./BaseBot')();
    
    console.log('Echo Bot connecting to server...');
    echoBot.init({ secret: config.secret });

    echoBot.onMessage(message => {
        const { authorId, content } = message;
        
        echoBot.emitConversationSeen(authorId);
        echoBot.sendMessage(content, authorId);
    });
}