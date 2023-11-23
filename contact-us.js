const express = require('express')
const router = express.Router()

const path = require('path')

const rootDir = require('../helper/path')

router.get('/contact-us',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','contact-us.html'))
})

module.exports = router;