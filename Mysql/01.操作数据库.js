const mysql = require('mysql2');

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'book',
})


const book = {
    title: '罗密欧a',
    // author: '我也不知道1',
    // publication_date: '1994-06-06 21:33:18',
    // price: '12'
}

const sqlStr = 'insert into book set ?';

db.query(sqlStr, book, (err, results) => {
    if (err) {
        return console.log(err.message);
    }

    console.log(results);
})