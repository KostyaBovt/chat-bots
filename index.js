const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const http = require('http').Server(app);

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.raw({ limit: '50mb' }));
app.use(bodyParser.text({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

app.use(express.static('dist'));

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/chat_bots', { useNewUrlParser: true });

require('./models/User');
require('./models/Message');

require('./bots/botManager').importBotsToDB((err, result) => {
    require('./bots/echoBot').init();
    require('./bots/reverseBot').init();
    require('./bots/ignoreBot').init();
    require('./bots/spamBot').init();
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'));
});

require('./socketServer').init(http);
const server = http.listen(process.env.PORT || 3000, () => {
    console.log('Server listening on port ' + server.address().port);
});
