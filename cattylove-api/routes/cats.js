const express = require('express')
const Cat = require('../models/cat')
const User = require('../models/user')
const Comment = require('../models/comment')
const router = express.Router()

router.get('/', async (req, res) => {
    
    console.log("request received " + new Date().toISOString())
    try{
        let cats = await Cat.find()
        let users = await User.find()
        res.send(cats)
    }
    catch(ex){
        res.status(500).send("Error: " + ex.message)
    }
})

module.exports = router