const express = require('express')
const Cat = require('../models/cat')
const Comment = require('../models/comment')
const User = require('../models/user')

const router = express.Router()

router.get('/comment', async (req, res) => {
    res.render("comment");
})


router.post("/", async (req, res) => {


    //Validate the data before we create an order
    // const { error } = orderValidation(req.body);
    // if (error) {
    //     return res.status(400).send({ message: error.details[0].message });
    // }

    try {
        console.log("===============");
        console.log("req :",req.body);

        const com = req.body.comment;
        const anon = req.body.anonymous;        
        const catid = req.body.catId;
        let date = new Date();
        let time =date.toLocaleString()
        let user = await User.findOne({sub: req.body.userSub})
        let comment = new Comment({
            
            userId : user._id,
            catId: catid,
            comment: com,
            anonymous: anon,
            timestamps: time

        });

        comment = await comment.save();

        return res.status(200).send({ message: "Comment successful." });


    }
    catch (e) {
        console.log(e);

        return res.status(500).send('Error: ' + ex.message)
    }

})

router.get('/:id', async (req, res) => {
    try {
        let comment = await Comment.find({catId : req.params.id}).populate('userId','name picture')
        if(!comment)
            return res.status(404).send('No comments available for this cat.')

        return res.status(200).send(comment)
    }
    catch(ex) {
        return res.status(500).send('Error: ' + ex.message)
    }
})
  
router.get('/', async (req, res) => {
    try {
        let comment = await Comment.find()
        if(!comment)
            return res.status(404).send('No comments available for this cat.')
        return res.status(200).send(comment)
    }
    catch(ex) {
        return res.status(500).send('Error: ' + ex.message)
    }
})  

module.exports = router