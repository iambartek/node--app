const mysql = require('mysql');
// properties to connection
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node--app'
};
// create a new connection
const connection = createConnection(dbConfig, (error) => {
   if (error) {
       return console.log('Create connection is failed', error);
   }
});
// connecting of data base
var results = connection.query("SELECT * FROM users", (err, rows) => {
    if (!err) {
        console.log(rows);
    } else {
        console.log(err);
    }
});

module.exports.connection = connection;
module.exports.results = results;