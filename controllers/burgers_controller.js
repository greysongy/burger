var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// var router = express.Router();

router.get("/", function (req, res) {
    console.log("this ran");
    burger.all(function (data) {
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

router.post("/api/burgers", function (req, res) {
    //may need to check here what the body actually is
    console.log("Body");
    console.log(req.body);
    burger.create(["burger_name", "devoured"], [req.body.name, req.body.devoured], function (result) {
        res.json({ id: result.insertId });
    });

    //why do we need to respond with the ID of the new thing
});

router.put("/api/burgers/:id", function (req, res) {
    console.log("The put request ran");
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update(
        {
            devoured: 1
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }

            res.status(200).end();
        }
    );
});

module.exports = router;

