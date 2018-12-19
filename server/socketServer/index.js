const mongoose = require('mongoose');
const User = mongoose.model('User');
const Message = mongoose.model('Message');

exports.init = (http) => {
    const io = require('socket.io')(http, {
        pingInterval: 10000,
        pingTimeout: 5000
    });
    
    io.on('connection', async socket => {
        const { userName } = socket.handshake.query;
        if (!userName) {
            console.log('attempt to connect without name');
            socket.disconnect();
            return;
        };

        console.log(`${userName} connected to chat`);

        const self = new User();
        self.generateIdentity(userName);
        self.socketId = socket.id;
        await self.save();

        socket.broadcast.emit('new user connected', self.toChatUserJSON());

        socket.on('get users', async () => {
            try {
                const allUsers = await User.find( { _id: { $ne: self._id } } );
                const result = allUsers.map(user => user.toChatUserJSON());
                socket.emit('users', result);
            } catch (e) {
                console.error(e);
                socket.emit('users', []);
            }
        });

        socket.on('conversation seen', async (targetId, dateSeen) => {
            const target = await User.findById(targetId);

            if (target && target.isOnline) {
                const data = {
                    targetId: self._id,
                    dateSeen
                }
                socket.broadcast.to(target.socketId).emit('conversation was seen', data);
                await Message.updateMany(
                    { author: target },
                    { dateSeen: data.dateSeen }
                );
            }
        });

        socket.on('message', async (message) => {
            console.log('massage was emited', message);
            const { dateSent, content, targetId } = message;
            const target = await User.findById(targetId);

            if (!target) {
                console.log('Message target not found, returning');
                return;
            }

            const messageToSend = new Message();
            messageToSend.author = self;
            messageToSend.target = target;
            messageToSend.dateSent = dateSent
            messageToSend.content = content;
            await messageToSend.save();

            socket.to(target.socketId).emit('new message', messageToSend.toInChatMessageJSON());
            
            console.log('Message was sent to', target);
        });

        socket.on('typing', async (targetId) => {
            const target = await User.findById(targetId);
            if (!target) {
                console.log('Typing event target not found, returning');
                return;
            }
            socket.broadcast.to(target.socketId).emit('user typing', self._id);
        });

        socket.on('disconnect', () => {
            socket.broadcast.emit('user disconnected', self._id);
            self.isOnline = false;
            self.save();
        });
    
    });
}