var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableInput, function(err, result) {
            if (err) throw err;
            console.log("Call back of the result");
            cb(result);
            console.log("End of callback");
        });
    }, 
    // How generic are we supposed to make this orm?
    insertOne: function(tableInput, newName, devoured) {
        var queryString = "INSERT INTO ? SET ?";
        connection.query(queryString, [tableInput, {
            burger_name: newName, 
            devoured: devoured
        }], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }, 
    //will fill out the specifics of this method later
    updateOne: function() {

    }
};

module.exports = orm;