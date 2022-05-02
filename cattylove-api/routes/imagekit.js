const express = require('express')
const ImageKit = require('imagekit');

const router = express.Router()

const imagekit = new ImageKit({
    urlEndpoint: process.env.imagekitEndpoit,
    publicKey: process.env.imagekitPublicKey,
    privateKey: process.env.imagekitPrivateKey
});

router.get('/auth', async (req, res) => {
    var result = imagekit.getAuthenticationParameters();
    res.status(200).send(result);
})

module.exports = router