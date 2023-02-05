const mongoose = require('mongoose');
const Accessory = require('./Accessory');



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
        required: true,
        //Add http/https validation
        //match: /^https?:/
        validate: {
            validator: function(value) {
                return value.startsWith('http://') || value.startsWith('https://')
            },
            message: 'Url is invalid'
        }
    },
    difficultyLevel: {
        type: Number,
        required: true,
        max: 8,
        min: 1
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: Accessory
    }]
})

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;