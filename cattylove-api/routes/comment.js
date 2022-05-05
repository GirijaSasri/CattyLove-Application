const express = require('express')
const Cat = require('../models/cat')
const Comment = require('../models/comment')
const User = require('../models/user')

const router = express.Router()

router.get('/comment', async (req, res) => {
    res.render("comment");
})


router.post("/", async (req, res) => {

    try {
        console.log("===============");
        console.log("req :",req.body);

        const com = req.body.comment;
        const anon = req.body.anonymous;        
        const catid = req.body.catId;    

        let user = await User.findOne({sub: req.body.userSub})
       
            let comment = new Comment({
            
                userId : user.id,
                catId: catid,
                comment: com,
                anonymous: anon
    
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