const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test_db1"
});

// any sql query on a specific database
const query = "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(126), email VARCHAR(126), age INT)";

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database.");

    conn.query(query, function(err, result) {
        if (err) throw err;
        console.log("Query executed");
        console.log(result);
    });
});