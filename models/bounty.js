const mongoose = require('mongoose')
const Schema = mongoose.Schema


//Bounty blueprint - ie schema
const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    type: {
        type: String,
        required: true,
        enum: ["sith", "Sith", "jedi", "Jedi", "unknown"]
    },
    alive: Boolean
})

module.exports = mongoose.model("Bounty", bountySchema)