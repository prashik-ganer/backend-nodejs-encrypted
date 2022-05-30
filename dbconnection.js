const mysql = require('mysql');

const dbconnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    // database:'new_senselive3',
    database:'auth',
});

module.exports = dbconnection;