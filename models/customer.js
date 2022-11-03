const mongoose = require('mongoose')
const customersSchema = new mongoose.Schema({
    isGold: {
        type: Boolean,
        required: true,
        default: false
    },
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    phone:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 11
    }
})

const Customer = mongoose.model('Customer', customersSchema)
module.exports = Customer