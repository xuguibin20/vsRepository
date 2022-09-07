const express = require('express');
const app = express();


app.use(express.urlencoded({ extended: false }))
const router = require('./16.apiRouter');

app.use('/api', router);

app.listen(80, () => {
    console.log('http://127.0.0.1');
})