const mongoose = require('mongoose')
const registerSchema = new mongoose.Schema({
    name:{
        type: String,
        minlength: 5,
        maxlength: 255,
        trim: true
    },
    email:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1000,
    }
})

const User = mongoose.model('User', registerSchema)

module.exports = User