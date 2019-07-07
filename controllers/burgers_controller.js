var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// var router = express.Router();

router.get("/", function(req, res) {
    console.log("this ran");
    burger.all( function(data) {
        console.log("Data");
        console.log(data);
        var formattedObj = {
            burgers: data
        };
        console.log(formattedObj);
        res.render("index", formattedObj);
        console.log("Did we get here?");
    });
});

module.exports = router;

