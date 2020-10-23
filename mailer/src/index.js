const express = require('express');
const {port} = require('./configuration');
const app = express();

app.listen(port, () => {
    console.log(`Started mailer service on port: ${port}`)
})

app.get('/api/send', (req, res) => {
    res.send('Mail sended');
})
