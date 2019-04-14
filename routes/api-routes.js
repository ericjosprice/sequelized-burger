// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function (results) {

            var hbsObject = {
                burgers: results
            };
            res.render("index", hbsObject);
        });
    });

    app.post("/api/burgers", function (req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name
        }).then(function (results) {
            res.json({
                id: result.insertId
            })
        })
    });


    app.put("/api/burgers/:id", function (req, res) {
        var condition = req.params.id;

        console.log("put route hit")

        db.Burger.update({
            devoured: true
        }, {
            where: {
                id: condition
            }
        }).then(function (results) {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
            res.json(results);
        });
    });






}


//reference to old routes== coppied from controller file=====================


// //to do=========================

// // Create the router for the app, and export the router at the end of your file.
// //to do=========================
// var express = require("express");

// var router = express.Router();

// // // Import the model (burger.js) to use its database functions.
// var burger = require("../models/burger.js");
// //=================== my code goes here=====

// // Create all our routes and set up logic within those routes where required.
// router.get("/", function (req, res) {
//     burger.all(function (data) {
//         var hbsObject = {
//             burgers: data
//         };
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//     });
// });

// router.put("/api/burgers/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     burger.update({
//         devoured: req.body.devoured
//     }, condition, function (result) {
//         if (result.changedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });

// });

// router.post("/api/burgers", function (req, res) {
//     burger.create("burger_name", req.body.name, function (result) {
//         console.log("this route was hit")
//         // Send back the ID of the new quote
//         res.json({
//             id: result.insertId
//         });
//     });
// });



// // Export routes for server.js to use.
// module.exports = router;