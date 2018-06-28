const mysql = require('mysql');
const server = require('./src/server');
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
const executeConn = connection.connect((err) => {

   if (err) {
       return console.log(err);
   }
   else {
       var results = connection.query("SELECT * FROM users", (rows) => {
           console.log("Users:" + " " + rows);
       });
   }

   module.exports.results = results;

});

