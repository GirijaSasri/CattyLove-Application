const express = require('express')
const Cat = require('../models/cat')
const mongoose = require('mongoose');

const router = express.Router()

router.get('/:id', async (req, res) => {
    
    console.log("all likes request received for catID " + req.params.id + " on " + new Date().toISOString())
    try{
        let likes = await Cat.findById(req.params.id).select('likes')
        res.status(200).send(likes) 
    }
    catch(ex){
        res.status(500).send("Error: " + ex.message)
    }
})

router.put('/:id/:u_id', async (req, res) => {
        
    console.log("request received to add like for catID " + req.params.id + " and " + req.params.u_id + " on " + new Date().toISOString())
    try {
        
        await Cat.findOneAndUpdate(
            {
                _id:req.params.id
            },
            {
                $push: {
                    likes: req.params.u_id
                }
            }
        )

        let likes = await Cat.findById(req.params.id).select('likes')

        return res.status(200).send(likes)
    }   
    catch(ex) {
        return res.status(500).send('Error: ' + ex.message)
    } 
})

router.delete('/:id/:u_id', async (req, res) => {
        
    try {
        
        await Cat.findOneAndUpdate(
            {
                _id:req.params.id
            },
            {
                $pull: {
                    likes: req.params.u_id
                }
            }
        )

        let likes = await Cat.findById(req.params.id).select('likes')

        return res.status(200).send(likes)
    }   
    catch(ex) {
        return res.status(500).send('Error: ' + ex.message)
    } 
})

module.exports = router