const mongoose = require('mongoose');
const { Schema } = mongoose;

const animalSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    color: { type: String, required: true },
    age: { type: Number, required: true }
})

module.exports = mongoose.model('Animal', animalSchema);