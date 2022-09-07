const express = require('express');
const app = express();

const mw1 = function (req, res, next) {
    console.log('这是最简单的中间件函数1');
    const time = Date.now();
    req.startTime = time;
    next();
}

const mw2 = function (req, res, next) {
    console.log('这是最简单的中间件函数2');
    next();
}

// const mw3 = function (req, res, next) {
//     console.log('这是最简单的中间件函数3');
//     next();

// }

// const mw4 = function (req, res, next) {
//     console.log('这是最简单的中间件函数4');

// }
// app.use(mw2);
app.use(mw1);

// app.use(mw3);
// app.use(mw4);


app.get('/', mw2, (req, res) => {
    res.send('Home page ' + req.startTime);

})

app.get('/user', (req, res) => {
    res.send('user page');
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})