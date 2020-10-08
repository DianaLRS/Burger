// our dependencies
var express = require("express");
var router = express.Router();

//Import the model burger.js to use its database functions
var burger = require("../models/burger.js");

//Create all our routes and set up logic 

router.get("/", function(req, res) {
    burger.all(function(data) {
        var handlebarObject = {
            burgers: data
        };
        console.log(handlebarObject);
        res.render("index", handlebarObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insert([
        "burger_name", "devoured"


    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        // Send back the ID of the new 
        // res.json({ id: result.insertId })
        res.redirect("/")
    });
});
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({

            devoured: true
        },
        condition,
        function(res) {
            res.redirect("/")

        })

});

module.exports = router;