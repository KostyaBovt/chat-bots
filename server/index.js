const express = require('express');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    pingInterval: 10000,
    pingTimeout: 5000
});

io.on('connection', socket => {
    console.log('New connection, assigning identity...');

    socket.emit('new message', 'Successfully connected to server!');
    socket.emit('user typing', 1);
    socket.emit('new user connected', {
        id: 1,
        avatar: 'string',
        name: 'string',
        bio: 'string',
        isOnline: true,
    });
    socket.emit('user disconnected', 1);

});

http.listen(3000, () => {
    console.log('Server started at port 3000');
})