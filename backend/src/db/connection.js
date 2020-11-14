const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'admin',
    database: 'avalia_aqui',
});

module.exports = con;