const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    socketId: String,
    name: { type: String, required: [true, "is requiredfield"], index: true },
    avatar: String,
    bio: String,
    isOnline: Boolean,
    secret: String // For authentication purposes, used by bots
}, { timestamps: true });

UserSchema.methods.generateIdentity = function(name) {
    const randomNumber = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;

    this.name = name;
    this.avatar = `https://api.adorable.io/avatars/150/${randomNumber}`;
    this.bio = "Lorem ipsum dolor sit amet...";
    this.isOnline = true;
}

UserSchema.methods.toChatUserJSON = function() {
    return {
        id: this._id,
        avatar: this.avatar,
        name: this.name,
        bio: this.bio,
        isOnline: this.isOnline,
        isBot: !!this.secret
    }
}

mongoose.model('User', UserSchema);
