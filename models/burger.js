//to do========================
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
//to do========================

// Model setup
// Inside your burger directory, create a folder named models.

// In models, make a burger.js file.

// Inside burger.js, import orm.js into burger.js
var orm = require("../config/orm.js");
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.


var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
            // console.log("am i getting a response from ")
            // console.log(res)
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
            
        });
    },
      // The variables cols and vals are arrays.
      create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
          cb(res);
          console.log("have we made it to the burger file?")
          console.log(res);
        });
      },
}




// Export at the end of the burger.js file.

module.exports = burger;

