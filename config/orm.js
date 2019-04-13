
// the below lines is how it was written in our in class example
// // Import MySQL connection.
var connection = require("../config/connection.js");



// Object for all our SQL statement functions.
var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table + " SET devoured=1" + " WHERE " + condition + ";";

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table + " (burger_name) Values ('" + vals + "')";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },



}
// Export the ORM object in module.exports.

// Export the orm object for the model (cat.js).
module.exports = orm;




//     create: function(table, cols, vals, cb) {
//       var queryString = "INSERT INTO " + table;

//       queryString += " (";
//       queryString += cols.toString();
//       queryString += ") ";
//       queryString += "VALUES (";
//       queryString += printQuestionMarks(vals.length);
//       queryString += ") ";

//       console.log(queryString);

//       connection.query(queryString, vals, function(err, result) {
//         if (err) {
//           throw err;
//         }

//         cb(result);
//       });
//     },
//     // An example of objColVals would be {name: panther, sleepy: true}
//     update: function(table, objColVals, condition, cb) {
//       var queryString = "UPDATE " + table;

//       queryString += " SET ";
//       queryString += objToSql(objColVals);
//       queryString += " WHERE ";
//       queryString += condition;

//       console.log(queryString);
//       connection.query(queryString, function(err, result) {
//         if (err) {
//           throw err;
//         }

//         cb(result);
//       });
//     },
//     delete: function(table, condition, cb) {
//       var queryString = "DELETE FROM " + table;
//       queryString += " WHERE ";
//       queryString += condition;

//       connection.query(queryString, function(err, result) {
//         if (err) {
//           throw err;
//         }

//         cb(result);
//       });
//     }
//   };