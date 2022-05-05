const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.get('/', async (req, res) => {

})

//get user _id
router.get('/:sub', async (req, res) => {
    try {
        let user_id = await User.findOne({sub:req.params.sub}).select('_id')
        if(!user_id)
            return res.status(404).send('A cat for the given id is not available')
        return res.status(200).send(user_id)
    }
    catch(ex) {
        return res.status(500).send('Error: ' + ex.message)
    }
})

router.post('/', async (req, res) => {
    const {
        sub,
        name,
        email,
        picture
    } = req.body

    if(!sub) 
        return res.status(400).send('User id is missing')

    try {
        let user = await User.findOne({ sub })

        if(user) {
            // update user if already exist and any values are changed
            if(user.name !== name || user.email !== email || user.picture !== picture) {
                user.set({
                    name,
                    email,
                    picture
                })
                user = await user.save()
            }
                
            return res.status(200).send(user)
        }

        // add a new user if already not exist
        user = new User({
            sub,
            name,
            email,
            picture
        })
        user = await user.save()
        return res.status(200).send(user)
    }   
    catch(ex) {
        return res.status(500).send('Error: ' + ex.message)
    } 
})

module.exports = router