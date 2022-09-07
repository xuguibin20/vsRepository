const express = require('express');

const app = express();

// app.get('/user', (req, res) => {
//     res.send({
//         name: 'zs',
//         age: 20,
//         grnder: '男'
//     })
// })

// app.get('/', (req, res) => {
//     console.log(req.query);
//     res.send(req.query);
// })

app.get('/user/:id/:name', (req, res) => {
    console.log(req.params);
    console.log(res.send(req.params));

})

app.post('/user', (req, res) => {
    res.send('请求成功');
})



app.listen(80, () => {
    console.log('http://127.0.0.1');
})



// const http = require('http');

// const server = http.createServer();

// server.on('request', (req, res) => {
//     conhod;
//     const str = `Youst url = req.url;
//     const method = req.metr request url is ${url},and request method is ${method}`;
//     // console.log(str);
//     res.setHeader('Content-Type', 'text/html: charset=utf-8')
//     res.send('我是你爹');
// })

// server.listen(80, () => {
//     console.log('http server running at http://127.0.0.1');
// }) 