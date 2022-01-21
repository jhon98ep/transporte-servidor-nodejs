const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
	host: 'localhost',
    port: 3306,
    user: 'root',
    password: '98120772627',
    dateStrings: true,
    database: 'servicios'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;