require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cats = require('./routes/cats')
const users = require('./routes/users')
const imagekit = require('./routes/imagekit')
const comment = require('./routes/comment')
const admins = require('./routes/admins')
const auth = require('./routes/auth')
const like = require('./routes/likes')
const errorHandler = require("./middleware/errorHandler")

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/cats', cats)
app.use('/api/users', users)
app.use('/api/imagekit', imagekit)
app.use('/api/comment', comment)
app.use('/api/admins', admins)
app.use('/api/auth', auth)
app.use('/api/like', like)
app.use(errorHandler)

app.listen(5000, () => {
    console.log('Connected. Listening on port 5000')
})

mongoose.connect('mongodb+srv://root:admin123@cluster0.fb5c9.mongodb.net/cattylove_db?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to db successfully......')
    })
    .catch((err) => {
        console.log('Error connecting to database: ' + err)
    })