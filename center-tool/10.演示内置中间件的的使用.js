const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('ok');
})

app.post('/book', (req, res) => {
    console.log(req.body);
    res.send('ok');
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})