const mongoose = require('mongoose')

const Feature = {
    key: String,
    value: String
}

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        required: true
    },
    gender: {
        type: String,
        enum: {
            values: ['Male', 'Female', 'Unknown'],
            message: '{VALUE} is not supported for gender of the cat'
        },
        required: true,
        default: 'Unknown'
    },
    age: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    picture: String,
    contact: {
        type: String,
        required: true
    },
    longitude: String,
    latitude: String,
    features: {
        type: [Feature]
    },
    likes: [mongoose.Types.ObjectId]
}, {
    timestamps: true
})

const Cat = mongoose.model('Cat', catSchema)

module.exports = Cat