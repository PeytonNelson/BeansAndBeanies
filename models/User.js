const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 8
    },
    email: {
        type: String,
        required: true,
        min: 8,
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 8
    }
},  {timestamps: true});

module.exports = mongoose.model('User', userSchema)