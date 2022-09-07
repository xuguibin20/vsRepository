const express = require('express');
const app = express();
const myRouter = require('./03.router');


// const router = express.Router();

// router.get('/user/list', (req, res) => {
//     res.send('get user list')
// })

// router.post('/user/add', (req, res) => {
//     res.send('add new user');
// })

// module.exports = router;


app.use(myRouter);

app.listen(80, () => {
    console.log('http://127.0.0.1');
})