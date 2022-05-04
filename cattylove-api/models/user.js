const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    sub: {          // user id given by Auth0
        type: String,
        unique: true,
        required: true
    },
    name: String,
    email: String,
    picture: String,
    wishlist: {
        type: [mongoose.Types.ObjectId]
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User