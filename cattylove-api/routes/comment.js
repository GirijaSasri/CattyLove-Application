const express = require('express')
const Cat = require('../models/cat')
const Comment = require('../models/comment')
const User = require('../models/user')

const router = express.Router()

router.get('/comment', async (req, res) => {
    res.render("comment");
})

module.exports = router