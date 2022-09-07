const express = require('express');
const parser = require('body-parser');
const app = express();


app.use(parser.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('ok');
})

app.listen(80, (req, res) => {
    console.log('http://127.0.0.1');
})