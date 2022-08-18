const express = require('express');
const router = express.Router()
const { getQr, sendMessagePost } = require('../controllers/web')

router.use('/qr', getQr)
// router.post('/send', sendMessagePost)
router.get('/send/:number/:message', sendMessagePost)

module.exports = router