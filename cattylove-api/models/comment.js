const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    catId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    comment: {
        type: String,
        required: true,
        minlength: 5
    },
    anonymous: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment