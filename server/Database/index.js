const mysql = require('mysql');

const connection = mysql.createPool({
    host: "sql6.freesqldatabase.com",
    user: "sql6464570",
    password: "Inay1dgKsE",
    database: "sql6464570",
    multipleStatements:true
})

module.exports.connection = connection;