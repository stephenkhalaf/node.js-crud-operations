const mongoose = require('mongoose')
const rentalsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Rental = mongoose.model('Rental', rentalsSchema)

module.exports = Rental