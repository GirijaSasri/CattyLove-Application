const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    wishlist: {
        type: [mongoose.Types.ObjectId]
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User