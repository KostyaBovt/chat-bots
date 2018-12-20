const io = require('socket.io-client');

module.exports = function() {

    const _private = {

        socket: null,

        connect: function({ name, secret }) {
            if (this.socket === null) {
                console.log('bot connecting to server');
                this.name = name;
                this.socket = io('http://localhost:3000', {
                    forceNew: true,
                    query: { name, secret }
                });
            }
        },

        disconnect: function() {
            this.socket.disconnect();
        },

        onEvent: function(eventName, handler) {
            this.socket.on(eventName, handler);
        },

        emit: function(eventName, ...args) {
            this.socket.emit(eventName, ...args);
        }
    };

    return {

        init: function({ name, secret }) {
            _private.connect({ name, secret });
        },

        disconnect: function() {
            _private.disconnect();
        },

        onMessage: function(handler) {
            _private.onEvent('new message', handler);
        },

        onConversationSeenEvent: function(handler) {
            _private.onEvent('conversation was seen', handler);
        },

        onTypingEvent: function(handler) {
            _private.onEvent('user typing', handler);
        },

        onUserConnectedEvent: function(handler) {
            _private.onEvent('new user connected', handler);
        },

        onUserDisconnected: function(handler) {
            _private.onEvent('user disconnected', handler);
        },

        sendMessage: function(content, target) {
            const msg = {
                id: null,
                authorId: null,
                targetId: target, 
                authorName: null,
                dateSent: new Date(),
                dateSeen: null,
                content
              }

            _private.emit('message', msg);
        },

        emitTyping: function(target) {
            _private.emit('typing', target);
        },

        emitConversationSeen: function(target) {
            const now = new Date();
            _private.emit('conversation seen', target, now);
        },

    }

};
