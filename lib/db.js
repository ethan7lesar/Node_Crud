var mysql = require('mysql2');
require('dotenv').config();

var connection = mysql.createConnection({
	host:process.env.dbHOST,
	user: process.env.dbUSER,
	password: process.env.dbPASSWORD,
	database: process.env.dbDATABASE
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Database Connected Successfully..!!');
	}
});

module.exports = connection;