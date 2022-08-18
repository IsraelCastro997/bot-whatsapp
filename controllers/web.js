const fs = require('fs')
const { sendMessage } = require('../controllers/send')

const sendMessagePost = (req, res) => {
    const { message, number } = req.params
    const client = req.app.locals.session;
    console.log( message, number);
    sendMessage(client, number, message)
    res.send({ status: 'Mensaje enviado' })
}

const getQr = (req, res) => {
    res.writeHead(200, { 'content-type': 'image/svg+xml' });
    fs.createReadStream(`${__dirname}/../mediaSend/qr-code.svg`).pipe(res);
}

module.exports = { sendMessagePost, getQr }