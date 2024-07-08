const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'username is required'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;


