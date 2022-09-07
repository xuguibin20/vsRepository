const express = require('express');
const qs = require('querystring');
const app = express();

app.use((req, res, next) => {
    let str = '';
    req.on('data', (chunk) => {
        str += chunk;
    });

    req.on('end', () => {
        const body = qs.parse(str);
        req.body = body;
        next();
    })
})

app.post('/user', (req, res) => {
    res.send(req.body);
})

app.listen(80, (req, res) => {
    console.log('http://127.0.0.1');
})