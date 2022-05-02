const express = require('express')
const Cat = require('../models/cat')
const Comment = require('../models/comment')
const router = express.Router()

router.get('/', async (req, res) => {

})

router.get('/:id', async (req, res) => {
    try {
        let cat = await Cat.findById(req.params.id)
        if(!cat)
            return res.status(404).send('The given ID does not exist on our system.')
        return res.send(cat)
    }
    catch(ex) {
        return res.status(500).send('Error: ' + ex.message)
    }
})

router.post('/', async (req, res) => {
    const { 
        name, 
        age, 
        gender, 
        description, 
        contact, 
        longitude, 
        latitude, 
        picture, 
        features
    } = req.body
    if(!name || !age || !gender || !description || !contact || !picture) 
        return res.status(400).send('Not all mendatory values are sent')
    if(name.length < 2 || name.length > 25)
        return res.status(400).send('Name of cat is invalid')
    if(isNaN(age)) 
        return res.status(400).send('Age of cat is invalid')
    if(isNaN(contact)) 
        return res.status(400).send('Owner contact number is invalid')
    if(longitude && isNaN(longitude))
        return res.status(400).send('Longitude value is invalid')
    if(latitude && isNaN(latitude))
        return res.status(400).send('Latitude value is invalid')
    
    try {
        let cat = new Cat({
            name,
            age,
            gender,
            description,
            contact,
            longitude,
            latitude,
            picture,
            features
        })
        cat = await cat.save()

        return res.status(200).send(cat)
    }   
    catch(ex) {
        return res.status(500).send('Error: ' + ex.message)
    } 
})

router.put('/:id', async (req, res) => {
    try {
        let cat = await Cat.findById(req.params.id)
        if(!cat)
            return res.status(404).send('The given ID does not exist on our system.')

        const { 
            name, 
            age, 
            gender, 
            description, 
            contact, 
            longitude, 
            latitude, 
            picture, 
            features
        } = req.body
        if(!name || !age || !gender || !description || !contact || !picture) 
            return res.status(400).send('Not all mendatory values are sent')
        if(name.length < 2 || name.length > 25)
            return res.status(400).send('Name of cat is invalid')
        if(isNaN(age)) 
            return res.status(400).send('Age of cat is invalid')
        if(isNaN(contact)) 
            return res.status(400).send('Owner contact number is invalid')
        if(longitude && isNaN(longitude))
            return res.status(400).send('Longitude value is invalid')
        if(latitude && isNaN(latitude))
            return res.status(400).send('Latitude value is invalid')

        cat.set({
            name,
            age,
            gender,
            description,
            contact,
            longitude,
            latitude,
            picture,
            features
        })
        cat = await cat.save()
        return res.status(200).send(cat)
    }   
    catch(ex) {
        return res.status(500).send('Error: ' + ex.message)
    } 
})

module.exports = router