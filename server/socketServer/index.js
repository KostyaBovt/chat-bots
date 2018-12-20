const mongoose = require('mongoose');
const User = mongoose.model('User');
const Message = mongoose.model('Message');


const authWithSecret = async function(secret, socketId) {
    const user = await User.findOne({ secret });
    if (!user) {
        return null;
    }
    user.socketId = socketId;
    user.isOnline = true;
    await user.save();
    return user;
}

const authWithUserName = async function(userName, socketId) {
    const user = new User();

    user.generateIdentity(userName);
    user.socketId = socketId;
    await user.save();

    return user;
}

exports.init = (http) => {
    const io = require('socket.io')(http, {
        pingInterval: 10000,
        pingTimeout: 5000
    });
    
    io.on('connection', async socket => {
        const { userName, secret } = socket.handshake.query;
        let self = null;

        if (secret) {
            const user = await authWithSecret(secret, socket.id);
            if (user === null) {
                console.log('authentication error, invalid secret');
                return;
            } else {
                console.log(`${user.name} connected to chat`);
                self = user;
                socket.broadcast.emit('new user connected', self.toChatUserJSON());
            }
        } else if (userName) {
            console.log(`${userName} connected to chat`);
            self = await authWithUserName(userName, socket.id);
            socket.broadcast.emit('new user connected', self.toChatUserJSON());
        } else {
            console.log('attempt to connect without a name or secret');
            socket.disconnect();
            return;
        };

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