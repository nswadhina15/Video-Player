const { videoUpload } = require('../middlewares/videoUpload')

const router = require('express').Router()

router.post('/upload', videoUpload.single('video'), (req,res) => {
    res.send({message: 'Video Upload'})
})

module.exports = router