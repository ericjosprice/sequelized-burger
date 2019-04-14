// Set up MySQL connection.
var mysql = require("mysql2");
// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
//notice sequelized is capitalized. we'll see more about this later
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("burger2_sequelized", "root", "root", {
  host: "localhost",
  port: 8889,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;







// *********************************************************************************
// below was previously used for home made ORM. above is sequelized connection
// *********************************************************************************




// // 
// var connection;

// // var connection = mysql.createConnection({
// //   host: "localhost",
// //   port: 8889,
// //   user: "root",
// //   password: "root",
// //   database: "burgers_db"
// // });
// if(process.env.JAWSDB_URL){
//   connection = mysql.createConnection(process.env.JAWSDB_URL)
// } else {
//   connection = mysql.createConnection({
//     host: "localhost",
//     port: 8889,
//     user: "root",
//     password: "root",
//     database: "burgers_db"
//   });
// }


// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // Export connection for our ORM to use.
// module.exports = connection;