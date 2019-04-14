module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        burger_name: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultvalue: false
        }
    });
    return Burger;
};





// // Dependencies
// // =============================================================

// // Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references my connection to the DB.
// var sequelize = require("../config/connection.js");

// // Creates a "Book" model that matches up with DB
// var Burger = sequelize.define("burger", {
//   burger_name: Sequelize.STRING,
//   devoured: Sequelize.BOOLEAN
//   //what do i do about the primary key? 
// });

// // Syncs with DB
// Burger.sync();

// // Makes the Book Model available for other files (will also create a table)
// module.exports = Burger;