const express = require('express');
const mongoose = require('mongoose');

const app = express();
const http = require('http').Server(app);

mongoose.set('useCreateIndex', true)
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/chat_bots', { useNewUrlParser: true })

require('./models/User');
require('./models/Message');

require('./socketServer').init(http);


const server = http.listen(process.env.PORT || 3000, () => {
    console.log('Server listening on port ' + server.address().port);
});
