const express = require('express');

const app = express();

app.use('/clock', express.static('./clock'));

app.listen(80, () => {
    console.log('http://127.0.0.1');
})