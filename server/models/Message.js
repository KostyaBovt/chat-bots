const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    target: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    dateSeen: Date,
    dateSent: Date,
    content: String
});

MessageSchema.method.setAsSeen = function() {
    this.dateSeen = new Date();
}

MessageSchema.methods.toInChatMessageJSON = function() {
    return {
        id: this._id,
        authorId: this.author._id,
        authorName: this.author.name,
        isIncoming: true, 
        dateSent: this.dateSent,
        dateSeen: this.dateSeen,
        content: this.content
    }
}

mongoose.model('Message', MessageSchema);
