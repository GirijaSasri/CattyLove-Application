const express = require('express')
const Admin = require('../models/admin')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/', async (req, res) => {
    const {
        username,
        password
    } = req.body

    if(!username)
        return res.status(400).send('Username is missing')
    if(!password)
        return res.status(400).send('Password is missing')

    try {
        const admin = await Admin.findOne({ username })
        if(!admin) return res.status(400).send('Invalid credentials')
    
        const pwdMatching = await bcrypt.compare(password, admin.password)
        if(!pwdMatching) return res.status(400).send('Invalid credentials')

        const token = jwt.sign({ 
            id: admin._id, 
            username: admin.username, 
            isAdmin: true 
        }, process.env.SECRET_KEY, { expiresIn: '24h' })

        return res.send({ token })
    }
    catch(err) {
        return res.status(500).send(err.message)
    }
})

module.exports = router