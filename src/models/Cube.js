const mongoose = require('mongoose');



const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 50 //ceck real length
    },
    imageUrl: {
        type: String,
        required: true
        //Add http/https validation
    },
    difficultyLevel: {
        type: Number,
        required: true,
        max: 8,
        min: 1
    }
})

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;