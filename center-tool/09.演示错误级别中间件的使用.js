const express = require('express');

const app = express();

const mw1 = function (req, res, next) {
    // throw new Error('中间件1发生了错误');
    console.log('这是最简单的中间件函数1');
    // const time = Date.now();
    // req.startTime = time;
    next();
}

app.get('/', mw1, (req, res) => {
    // throw new Error('服务器内部发生了错误！');
    console.log('homr page.');
})

app.use((error, req, res, next) => {
    console.log('发生了错误 ' + error.message);
    res.send('Error' + error.message);
})

app.listen(80, (req, res) => {
    console.log('http://127.0.0.1');
})