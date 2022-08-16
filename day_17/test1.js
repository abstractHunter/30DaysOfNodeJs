const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

// we can interact with any database from here
const query = "CREATE DATABASE IF NOT EXISTS test_db1";

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected to mysql");

    conn.query(query, function(err, result) {
        if (err) throw err;
        console.log("Query executed");
        console.log(result);
    });
});