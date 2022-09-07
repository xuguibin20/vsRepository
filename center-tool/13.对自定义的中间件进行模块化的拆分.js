const express = require('express');
const customBodyParser = require('./14.custom-body-parser')

const app = express();

app.use(customBodyParser) //全局中间件函数

app.post('/user', (req, res) => {
    res.send(req.body);
})

app.listen(80, (req, res) => {
    console.log('http://127.0.0.1');
})